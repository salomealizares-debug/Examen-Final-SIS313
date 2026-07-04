export function buildPath(path) {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}

export function getRouterPath() {
  const base = import.meta.env.BASE_URL || '/'
  const pathname = window.location.pathname

  console.log('[SITEPATHS] base:', base)
  console.log('[SITEPATHS] pathname:', pathname)

  // Revisar si hay ruta guardada desde 404.html
  const ghPagesPath = localStorage.getItem('__ghPagesPath')
  console.log('[SITEPATHS] ghPagesPath from localStorage:', ghPagesPath)

  if (ghPagesPath) {
    localStorage.removeItem('__ghPagesPath')

    // ghPagesPath es /Examen-Final-SIS313/descargas, base es /Examen-Final-SIS313/
    if (ghPagesPath.startsWith(base)) {
      const relativePath = ghPagesPath.slice(base.length)
      const result = relativePath ? '/' + relativePath : '/'
      console.log('[SITEPATHS] Extracted from 404:', result)
      return result
    }
    console.log('[SITEPATHS] Returning ghPagesPath as-is:', ghPagesPath)
    return ghPagesPath
  }

  // Lógica normal usando window.location.pathname
  if (base === '/' || base === './') {
    console.log('[SITEPATHS] Base is root, returning pathname:', pathname)
    return pathname
  }

  if (pathname.startsWith(base)) {
    const relativePath = pathname.slice(base.length)
    const result = relativePath ? '/' + relativePath : '/'
    console.log('[SITEPATHS] Extracted from pathname:', result)
    return result
  }

  console.log('[SITEPATHS] Returning pathname as-is:', pathname)
  return pathname
}
