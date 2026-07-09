import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const targetUrl = process.env.TARGET_URL || 'https://www.alphex888.com'
const outputDir = path.resolve(process.cwd(), process.env.MIGRATION_OUTPUT || 'migration-output')
const waitMs = Number(process.env.POST_LOAD_WAIT_MS || 2500)

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function safeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim()
}

async function main() {
  await ensureDir(outputDir)

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } })

  const captured = {
    targetUrl,
    capturedAt: new Date().toISOString(),
    requests: [],
    console: [],
    errors: []
  }

  page.on('requestfinished', request => {
    captured.requests.push({ url: request.url(), method: request.method(), resourceType: request.resourceType() })
  })
  page.on('console', message => {
    captured.console.push({ type: message.type(), text: message.text() })
  })
  page.on('pageerror', error => {
    captured.errors.push(error.message)
  })

  await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 90000 })
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {})
  await page.waitForTimeout(waitMs)

  const pageData = await page.evaluate(async () => {
    const abs = value => {
      try { return new URL(value, location.href).href } catch { return value }
    }

    const styles = [...document.querySelectorAll('style')].map((node, index) => ({
      index,
      source: 'style-tag',
      cssText: node.textContent || ''
    }))

    const links = [...document.querySelectorAll('link[rel="stylesheet"]')].map((node, index) => ({
      index,
      href: abs(node.getAttribute('href') || ''),
      media: node.getAttribute('media') || null
    }))

    const runtimeCss = []
    for (const sheet of [...document.styleSheets]) {
      const href = sheet.href || 'inline-sheet'
      try {
        const rules = [...sheet.cssRules].map(rule => rule.cssText).join('\n')
        runtimeCss.push({ href, cssText: rules })
      } catch (error) {
        runtimeCss.push({ href, cssText: '', error: String(error && error.message ? error.message : error) })
      }
    }

    const images = [...document.images].map(img => ({
      src: abs(img.currentSrc || img.src),
      alt: img.alt || '',
      width: img.naturalWidth || null,
      height: img.naturalHeight || null
    }))

    const anchors = [...document.querySelectorAll('a')].map(anchor => ({
      href: abs(anchor.getAttribute('href') || ''),
      text: anchor.textContent.replace(/\s+/g, ' ').trim()
    }))

    const textBlocks = [...document.querySelectorAll('h1,h2,h3,h4,h5,p,li,button,a')]
      .map(node => ({ tag: node.tagName.toLowerCase(), text: node.textContent.replace(/\s+/g, ' ').trim() }))
      .filter(item => item.text)

    return {
      url: location.href,
      title: document.title,
      lang: document.documentElement.lang,
      html: document.documentElement.outerHTML,
      bodyText: document.body.innerText,
      styles,
      stylesheetLinks: links,
      runtimeCss,
      images,
      anchors,
      textBlocks
    }
  })

  const externalCss = []
  for (const link of pageData.stylesheetLinks) {
    try {
      const response = await page.request.get(link.href, { timeout: 45000 })
      externalCss.push({ href: link.href, status: response.status(), cssText: await response.text() })
    } catch (error) {
      externalCss.push({ href: link.href, status: null, cssText: '', error: error.message })
    }
  }

  const allCss = [
    ...pageData.styles.map(item => `/* style tag ${item.index} */\n${item.cssText}`),
    ...pageData.runtimeCss.map(item => `/* runtime sheet: ${item.href}${item.error ? ` | ${item.error}` : ''} */\n${item.cssText}`),
    ...externalCss.map(item => `/* external: ${item.href} | status ${item.status} */\n${item.cssText}`)
  ].join('\n\n')

  await fs.writeFile(path.join(outputDir, 'runtime.html'), pageData.html)
  await fs.writeFile(path.join(outputDir, 'runtime-body.txt'), pageData.bodyText)
  await fs.writeFile(path.join(outputDir, 'raw-runtime-css.css'), allCss)
  await fs.writeFile(path.join(outputDir, 'page-data.json'), JSON.stringify({ ...pageData, externalCss, captured }, null, 2))
  await page.screenshot({ path: path.join(outputDir, 'runtime-screenshot.png'), fullPage: true })

  await browser.close()

  console.log(`Extracted runtime DOM, CSS and assets into ${outputDir}`)
  console.log(`Next: npm run migrate:clean-css && npm run migrate:convert`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
