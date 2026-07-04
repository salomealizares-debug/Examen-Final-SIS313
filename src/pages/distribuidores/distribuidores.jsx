import React, { useEffect, useState } from 'react'
import { buildPath } from '../../utils/sitePaths.js'
import './distribuidores.css'

/* -------------------------------------------------------------------
   Iconos SVG inline (no requieren instalar ninguna librería aparte)
------------------------------------------------------------------- */

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="#25D366">
    <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8a13 13 0 0 0 6 1.5c7 0 12.7-5.6 12.7-12.5S23 3 16 3zm0 22.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a10.2 10.2 0 0 1-1.7-5.7c0-5.7 4.6-10.3 10.4-10.3S26.4 9.8 26.4 15.5 21.8 25.7 16 25.7zm5.7-7.7c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.4 8.4 0 0 1-2.5-1.5 9.1 9.1 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.4a.5.5 0 0 0 0-.5c-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6c0 1.5 1.1 3 1.3 3.2.1.2 2.2 3.4 5.4 4.7a17.9 17.9 0 0 0 1.8.7 4.3 4.3 0 0 0 2 .1 3.3 3.3 0 0 0 2.1-1.5c.3-.5.3-1 .2-1.1s-.3-.2-.6-.3z" />
  </svg>
)

const ArrowBulletIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" className="sj-arrow">
    <circle cx="12" cy="12" r="11" fill="#ffffff" stroke="#3b93d6" strokeWidth="1.5" />
    <path
      d="M10 8l4 4-4 4"
      fill="none"
      stroke="#3b93d6"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChatIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
    <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4H12a8.3 8.3 0 0 1-3.8-.9L3 21l1.9-5.7a8.3 8.3 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3H13a8.4 8.4 0 0 1 8 8v.5Z" />
  </svg>
)

const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
    <polyline points="18 15 12 9 6 15" />
  </svg>
)

/* -------------------------------------------------------------------
   Datos extraídos de la página "Distribuidores" de SIC-JAC
------------------------------------------------------------------- */

const OFICINA_CENTRAL = {
  direccion: 'Calle Loayza Esq. Camacho Edif. Mariscal de Ayacucho P.6 Of. 603',
  telfOf: ['(+591) 2 2204200', '+591 2 2201962'],
  celOf: ['(+591) 68057784', '+591 68057785', '+591 73205627'],
  cel: ['(+591) 71965001', '+591 71575862'],
  whatsapp: '(+591) 68069736',
  emails: ['javieralconc@hotmail.com', 'javieralconc@gmail.com', 'javieralcon@sic-jac.com']
}

const SUCURSAL_SANTA_CRUZ = {
  direccion: 'Plaza 24 de Septiembre Edif. Shopping Bolivar P.3 Of. 309-A',
  telfOf: ['(+591) 3-3243814'],
  celOf: ['(+591) 72188189'],
  whatsapp: '(+ 591) 73119333',
  emails: ['sucursal_santacruz@sic-jac.com']
}

/* Cada "entry" es un distribuidor. logoLabel es solo un texto
   placeholder — reemplaza <img src="..."> donde corresponda con
   la imagen/logo real del distribuidor. */

const DEPARTAMENTOS = [
  {
    nombre: 'POTOSI',
    entries: [
      {
        contacto: 'Renan Arismendi Chumacero',
        direccion: 'c/ periodista n° 137 entre c/ la paz y millares frente supermercado súper sur',
        celular: '(+591) -72501698',
        email: 'potosi_1@sic-jac.com'
      }
    ]
  },
  {
    nombre: 'POTOSI',
    razonSocial: '"sermag" auditores & consultores',
    direccion: 'calle tarija n° 15 (interior)',
    telefono: '62-25339',
    logoLabel: 'SERMAG',
    entries: [
      {
        contacto: 'Waldir Serrano Bedoya',
        celular: '(+591) -72411143',
        email: 'potosi_2@sic-jac.com'
      },
      {
        contacto: 'Daniela Maya Serrano Flores',
        celular: '(+591) -72389611',
        email: 'potosi_3@sic-jac.com'
      }
    ]
  },
  {
    nombre: 'POTOSI – TUPIZA',
    entries: [
      {
        contacto: 'Lic. Freddy Marca Aguilar',
        direccion: 'Barrio San Antonio Calle Antonio Pizarro S/N',
        celularOf: '(+591) 73332946 - (+591) 73589753',
        email: 'tupiza_1@sic-jac.com'
      }
    ]
  },
  {
    nombre: 'BENI',
    razonSocial: 'exipro consultores',
    logoLabel: 'EXIPRO',
    entries: [
      {
        contacto: 'Lic. William Chao Rivero',
        direccion: 'Plaza Ballivián acera este s/n. edificio durán 2do. piso. of. nº 1',
        telefonoOf: '(+591) – 34629803',
        celularOf: '(+591) - 79214200',
        email: 'beni_1@sic-jac.com',
        facebook: 'https://www.facebook.com/exiproconsultores'
      }
    ]
  },
  {
    nombre: 'CHUQUISACA- BOLIVIA',
    photoLabel: 'FOTO',
    entries: [
      {
        contacto: 'Lic. Mario Gamarra Paz',
        direccion: 'Calle Loa #565 (Zona Central)',
        telefonoOf: '(+591) – 6451781',
        celularOf: '(+591) - 76115888  -  (+591) -72883344',
        email: 'sucre_2@sic-jac.com'
      }
    ]
  },
  {
    nombre: 'CHUQUISACA- BOLIVIA',
    razonSocial: 'Vadian Asesores & Consultores Srl',
    logoLabel: 'VADIAN',
    entries: [
      {
        contacto: 'Lic. Lic. Jose Luis Atahuachi',
        direccion: 'Calle Cotagaita Nº 3 Zona San Cristobal (Zona Central)',
        celularOf: '(+591) - 72898882',
        email: 'sucre_1@sic-jac.com'
      }
    ]
  },
  {
    nombre: 'ORURO – BOLIVIA',
    razonSocial: 'Hidalgo – Auditores Consultores',
    entries: [
      {
        contacto: 'Lic. Julio M. Hidalgo Soria',
        direccion: 'Urbanización Pedro Ferrari Manzano 830, Lote: 13-A',
        telefonoOf: '(+591-2) 5277211',
        celularOf: '(+591) 718-45396 - (+591) 786-14009',
        email: 'oruro_1@sic-jac.com'
      }
    ]
  },
  {
    nombre: 'ORURO – BOLIVIA',
    razonSocial: 'Consultora Asicont',
    entries: [
      {
        contacto: 'Lic. Gabriel Pérez Peláez',
        direccion: 'Av. Del Ejercito No 1070 Entre Antofagasta Y Magallanes',
        telefonoOf: '(+591) 2-5276748',
        celularOf: '(+591) - 72323857',
        email: 'oruro_2@sic-jac.com'
      }
    ]
  }
]

/* -------------------------------------------------------------------
   Bloques reutilizables
------------------------------------------------------------------- */

function OficinaBlock({ title, data }) {
  return (
    <div className="sj-block">
      <h2>{title}</h2>
      <p className="sj-line">
        <strong>Dirección:</strong> {data.direccion}
      </p>
      {data.telfOf && (
        <p className="sj-line">
          <strong>Telf. Of.:</strong> {data.telfOf.join(' | ')}
        </p>
      )}
      {data.celOf && (
        <p className="sj-line">
          <strong>Cel. Of.:</strong> {data.celOf.join(' | ')}
        </p>
      )}
      {data.cel && (
        <p className="sj-line">
          <strong>Cel.:</strong> {data.cel.join(' | ')}
        </p>
      )}
      {data.whatsapp && (
        <div className="sj-line-with-icon">
          <strong>WhatsApp :</strong> {data.whatsapp}
          <a
            className="sj-whatsapp-btn"
            href={`https://wa.me/${data.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      )}
      {data.emails && (
        <p className="sj-line" style={{ marginTop: 8 }}>
          <strong>Email:</strong>
          <br />
          {data.emails.map((em) => (
            <React.Fragment key={em}>
              <a href={`mailto:${em}`}>{em}</a>
              <br />
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  )
}

function DetailBullets({ entry }) {
  return (
    <ul className="sj-bullets">
      {entry.contacto && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Contacto:</strong> {entry.contacto}
          </span>
        </li>
      )}
      {entry.direccion && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Dirección:</strong> {entry.direccion}
          </span>
        </li>
      )}
      {entry.telefono && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Teléfono:</strong> {entry.telefono}
          </span>
        </li>
      )}
      {entry.telefonoOf && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Teléfono Of.:</strong> {entry.telefonoOf}
          </span>
        </li>
      )}
      {entry.celularOf && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Celular Of.:</strong> {entry.celularOf}{' '}
            <a
              className="sj-whatsapp-btn"
              href={`https://wa.me/${entry.celularOf.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </span>
        </li>
      )}
      {entry.celular && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Celular:</strong> {entry.celular}{' '}
            <a
              className="sj-whatsapp-btn"
              href={`https://wa.me/${entry.celular.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </span>
        </li>
      )}
      {entry.email && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>E-mail:</strong> <a href={`mailto:${entry.email}`}>{entry.email}</a>
          </span>
        </li>
      )}
      {entry.facebook && (
        <li>
          <ArrowBulletIcon />
          <span>
            <strong>Facebook:</strong>{' '}
            <a href={entry.facebook} target="_blank" rel="noreferrer">
              {entry.facebook}
            </a>
          </span>
        </li>
      )}
    </ul>
  )
}

function DepartamentoBlock({ depto }) {
  return (
    <div className="sj-entry">
      {(depto.logoLabel || depto.photoLabel) && (
        <div className="sj-media">
          {/* Reemplaza este bloque con <img src="/ruta/al/logo.png" alt="..." />
              cuando tengas el archivo real del logo o foto */}
          <div className="sj-media-placeholder">{depto.logoLabel || depto.photoLabel}</div>
        </div>
      )}

      <h3>{depto.nombre}</h3>

      {depto.razonSocial && (
        <p className="sj-line">
          <strong>Nombre o Razón Social:</strong> {depto.razonSocial}
        </p>
      )}
      {depto.direccion && (
        <p className="sj-line">
          <strong>Dirección:</strong> {depto.direccion}
        </p>
      )}
      {depto.telefono && (
        <p className="sj-line">
          <strong>Teléfono:</strong> {depto.telefono}
        </p>
      )}

      {depto.entries.map((entry, i) => (
        <div className="sj-person-block" key={i}>
          <DetailBullets entry={entry} />
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------
   Componente principal
------------------------------------------------------------------- */

export default function Distribucion() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sj-page">
      {/* NAVBAR */}
      <header className="sj-navbar">
        <div className="sj-logo">
          <div className="sj-logo-box">
            SIC · JAC
            <span className="sj-red">CONTABILIDAD</span>
            SOFTWARE
          </div>
        </div>
        <nav>
          <ul className="sj-menu">
            <li>
              <a href={buildPath('/')}>Inicio</a>
            </li>
            <li>
              <a href={buildPath('/descargas')}>Descargas</a>
            </li>
            <li>
              <a href={buildPath('/productos')}>Productos</a>
            </li>
            <li>
              <a href={buildPath('/clientes')}>Clientes</a>
            </li>
            <li>
              <a href={buildPath('/distribuidores')} className="active">
                Distribuidores
              </a>
            </li>
            <li>
              <a href={buildPath('/contactos')}>Contactos</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO BANNER — reemplaza el fondo por tu imagen real si la tienes */}
      <div className="sj-hero" />

      {/* TITLE BOX */}
      <div className="sj-title-box">
        <h1>Distribuidores</h1>
      </div>

      {/* CONTENT */}
      <div className="sj-content">
        <OficinaBlock title="OFICINA CENTRAL" data={OFICINA_CENTRAL} />
        <OficinaBlock title="SUCURSAL SANTA CRUZ" data={SUCURSAL_SANTA_CRUZ} />

        <h2 className="sj-centered">DISTRIBUIDORES</h2>

        {DEPARTAMENTOS.map((depto, i) => (
          <DepartamentoBlock depto={depto} key={i} />
        ))}
      </div>

      {/* FOOTER */}
      <footer className="sj-footer">
        ENHANCED BY <a href="#">CYBERGLOBALNET</a> | V3.8
      </footer>

      {/* FLOATING BUTTONS */}
      <button className="sj-fab-chat" type="button">
        <ChatIcon /> Chat
      </button>
      {showTop && (
        <button
          className="sj-fab-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
        >
          <ChevronUpIcon />
        </button>
      )}
    </div>
  )
}
