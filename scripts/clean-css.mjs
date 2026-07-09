import fs from 'node:fs/promises'
import path from 'node:path'

const input = path.resolve(process.cwd(), process.env.CSS_INPUT || 'migration-output/raw-runtime-css.css')
const output = path.resolve(process.cwd(), process.env.CSS_OUTPUT || 'migration-output/cleaned-runtime-css.css')

function cleanCss(css) {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, match => {
    return /license|copyright|@preserve/i.test(match) ? match : ''
  })

  const normalized = withoutComments
    .replace(/\[data-v-[a-f0-9]+\]/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim()

  const kept = []
  const seen = new Set()
  const rulePattern = /([^{}]+)\{([^{}]*)\}/g
  let match

  while ((match = rulePattern.exec(normalized)) !== null) {
    const selector = match[1].trim()
    const declarations = match[2].trim()
    if (!selector || !declarations) continue
    if (/^(@keyframes|from|to|\d+%)/i.test(selector)) {
      kept.push(`${selector}{${declarations}}`)
      continue
    }
    const key = `${selector}{${declarations}}`
    if (seen.has(key)) continue
    seen.add(key)
    kept.push(key)
  }

  return kept
    .join('\n')
    .replace(/}/g, '}\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n'
}

async function main() {
  const raw = await fs.readFile(input, 'utf8')
  await fs.mkdir(path.dirname(output), { recursive: true })
  await fs.writeFile(output, cleanCss(raw))
  console.log(`Cleaned CSS written to ${output}`)
}

main().catch(error => {
  console.error(`CSS cleanup failed: ${error.message}`)
  process.exit(1)
})
