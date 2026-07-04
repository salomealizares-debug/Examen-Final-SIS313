import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './pages/principal/Inicio.jsx'
import Distribucion from './pages/distribuidores/distribuidores.jsx'
import OficinaCentral from './pages/contactos/PaginaDeContactos.jsx'
import Descargas from './pages/descargas/descargas.jsx'
import Clientes from './pages/clientes/clientes.jsx'
import Productos from './pages/productos/productos.jsx'
import { getRouterPath } from './utils/sitePaths.js'

// Router muy simple: como el proyecto no usa react-router, elegimos
// que componente mostrar segun la ruta (pathname) que tenga el navegador.
// Cuando alguien hace click en un <a href="/distribuidores">, el navegador
// recarga la pagina en esa ruta; Vite sirve el mismo index.html, este
// archivo se vuelve a ejecutar y aqui decidimos que pagina mostrar.
function paginaSegunRuta() {
  const routePath = getRouterPath()
  console.log('[ROUTER] Current path:', routePath)

  switch (routePath) {
    case '/distribuidores':
      console.log('[ROUTER] Rendering Distribucion')
      return <Distribucion />
    case '/contactos':
      console.log('[ROUTER] Rendering OficinaCentral')
      return <OficinaCentral />
    case '/descargas':
      console.log('[ROUTER] Rendering Descargas')
      return <Descargas />
    case '/clientes':
      console.log('[ROUTER] Rendering Clientes')
      return <Clientes />
    case '/productos':
    case '/productos/contable':
    case '/productos/nomina':
    case '/productos/facturacion':
      console.log('[ROUTER] Rendering Productos')
      return <Productos />
    default:
      console.log('[ROUTER] Rendering Inicio (default)')
      return <Inicio />
  }
}

createRoot(document.getElementById('root')).render(<StrictMode>{paginaSegunRuta()}</StrictMode>)
