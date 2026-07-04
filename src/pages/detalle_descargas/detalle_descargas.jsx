import React, { useState, useMemo } from 'react'
import './detalle.styles.css'

// Iconos simples en SVG (para no depender de librerías externas)
const IconRar = () => (
  <svg viewBox="0 0 24 24" className="icon icon-rar" aria-hidden="true">
    <rect x="3" y="2" width="18" height="20" rx="1.5" />
    <rect x="9" y="2" width="3" height="20" className="icon-stripe" />
  </svg>
)

const IconPdf = () => (
  <svg viewBox="0 0 24 24" className="icon icon-pdf" aria-hidden="true">
    <path d="M6 2h9l5 5v15H6z" />
    <text x="7.5" y="16" className="icon-label">
      PDF
    </text>
  </svg>
)

const IconVideo = () => (
  <svg viewBox="0 0 24 24" className="icon icon-video" aria-hidden="true">
    <rect x="2" y="5" width="14" height="14" rx="1.5" />
    <polygon points="17,9 22,6 22,18 17,15" />
  </svg>
)

const IconSync = () => (
  <svg viewBox="0 0 24 24" className="icon-sync" aria-hidden="true">
    <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8" />
    <path d="M20 4v4h-4" />
    <path d="M20 12a8 8 0 0 1-13.66 5.66L4 16" />
    <path d="M4 20v-4h4" />
  </svg>
)

// Datos de ejemplo de los recursos del módulo
const RECURSOS = [
  {
    id: 1,
    titulo: 'Instalador Inventarios Demo',
    archivo: 'INSTALADOR_INVENTARIOS.rar',
    tipo: 'rar'
  },
  {
    id: 2,
    titulo: 'Manual Inventarios 2017',
    archivo: 'Manual Inventarios 2017.pdf',
    tipo: 'pdf'
  },
  {
    id: 3,
    titulo: 'Video de Presentacion Inventarios',
    archivo: 'video_de_presentacion_inventarios.mp4',
    tipo: 'video'
  }
]

const ICONOS_POR_TIPO = {
  rar: IconRar,
  pdf: IconPdf,
  video: IconVideo
}

export default function ModuloInventario() {
  const [orden, setOrden] = useState('asc')
  const [porPagina, setPorPagina] = useState(20)

  const recursosOrdenados = useMemo(() => {
    const copia = [...RECURSOS]
    copia.sort((a, b) =>
      orden === 'asc' ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo)
    )
    return copia.slice(0, porPagina)
  }, [orden, porPagina])

  const handleDetalles = (recurso) => {
    console.log('Ver detalles de:', recurso.titulo)
  }

  const handleDescarga = (recurso) => {
    console.log('Descargar:', recurso.archivo)
  }

  return (
    <div className="modulo-inventario">
      <header className="modulo-header">
        <h2>MÓDULO DE INVENTARIO</h2>
        <IconSync />
      </header>

      <p className="modulo-descripcion">
        El Sistema de Inventarios permite el control y seguimiento físico valorado de los items o
        productos de un almacén. Los items son organizados en los siguientes niveles: Categoria,
        Subcategoria y producto (items). Por tal efecto el Sistema de Inventarios, le permite
        manipular su información en forma ordenada y minimizandole tiempo para el manejo y control
        de sus inventarios.
      </p>

      <ul className="lista-recursos">
        {recursosOrdenados.map((recurso) => {
          const Icono = ICONOS_POR_TIPO[recurso.tipo]
          return (
            <li key={recurso.id} className="recurso-item">
              <div className="recurso-info">
                <span className="recurso-titulo">{recurso.titulo}</span>
                <a href="#" className="recurso-archivo">
                  <Icono />
                  {recurso.archivo}
                </a>
              </div>

              <div className="recurso-acciones">
                <button
                  type="button"
                  className="btn btn-detalles"
                  onClick={() => handleDetalles(recurso)}
                >
                  DETALLES
                </button>
                <button
                  type="button"
                  className="btn btn-descarga"
                  onClick={() => handleDescarga(recurso)}
                >
                  DESCARGA
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="modulo-footer">
        <div className="control-grupo">
          <label htmlFor="ordering">Ordering</label>
          <select id="ordering" value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="asc">Órden Ascendente</option>
            <option value="desc">Órden Descendente</option>
          </select>
        </div>

        <div className="control-grupo">
          <label htmlFor="porPagina">Cantidad de ítems por página</label>
          <select
            id="porPagina"
            value={porPagina}
            onChange={(e) => setPorPagina(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  )
}
