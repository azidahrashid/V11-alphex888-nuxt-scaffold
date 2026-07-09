export function useAssetUrl() {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app.baseURL || '/'

  return (path: string) => {
    if (!path) return ''
    if (/^(https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
      return path
    }

    const normalizedBase = baseURL === '/' ? '' : baseURL.replace(/\/$/, '')
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    return `${normalizedBase}${normalizedPath}`
  }
}
