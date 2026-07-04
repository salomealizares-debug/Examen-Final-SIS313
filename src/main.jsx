import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inicio from './pages/principal/Inicio.jsx'
import Distribucion from './pages/distribuidores/distribuidores.jsx'
import OficinaCentral from './pages/contactos/PaginaDeContactos.jsx'
import Descargas from './pages/descargas/descargas.jsx'

// Router muy simple: como el proyecto no usa react-router, elegimos
// que componente mostrar segun la ruta (pathname) que tenga el navegador.
// Cuando alguien hace click en un <a href="/distribuidores">, el navegador
// recarga la pagina en esa ruta; Vite sirve el mismo index.html, este
// archivo se vuelve a ejecutar y aqui decidimos que pagina mostrar.
function paginaSegunRuta() {
  switch (window.location.pathname) {
    case '/distribuidores':
      return <Distribucion />;
    case '/contactos':
      return <OficinaCentral />;
    case '/descargas':
      return <Descargas />;
    // Aqui cada integrante puede agregar su propia ruta cuando tenga
    // su pagina lista, por ejemplo:
    // case '/productos':
    //   return <Productos />;
    default:
      return <Inicio />;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {paginaSegunRuta()}
  </StrictMode>,
)