import { useState, useEffect, useRef } from 'react'
import './Inicio.css'
import {
  Settings,
  Puzzle,
  TrendingUp,
  DollarSign,
  Calculator,
  Boxes,
  Building2,
  UserRound,
  FileText,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from 'lucide-react'
import CustomHeader from '../../components/header/header.jsx'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = ['Inicio', 'Descargas', 'Productos', 'Clientes', 'Distribuidores', 'Contactos']

const INFO_CARDS = [
  {
    icon: Settings,
    title: 'REQUERIMIENTO',
    text: 'El hardware requerido para la instalación del Sistema de Contabilidad SIC - JAC, deberá contar con las siguientes características (COMO MINIMO).'
  },
  {
    icon: Puzzle,
    title: 'SOPORTE TÉCNICO',
    text: 'La asistencia técnica se puede dar por distintos medios, incluyendo el correo electrónico, chat, conexión remota, teléfono o de forma presencial.'
  },
  {
    icon: TrendingUp,
    title: 'ADQUISICIÓN',
    text: 'La adquisición del Software Contable "SIC-JAC" incluye la entrega de material para que pueda absolver sus dudas o consultas de manera inmediata.'
  },
  {
    icon: DollarSign,
    title: 'MÉTODOS DE PAGO',
    text: 'El Usuario podrá elegir entre varios métodos de pago, para que de esa forma la entrega del material y la instalación se realice de manera inmediata. solo esta información.'
  }
]

const PERIODOS = [
  'Comercial (Enero a Diciembre)',
  'Industrial (Abril a Marzo)',
  'Agropecuaria (Julio a Junio)',
  'y Minera (Octubre a Septiembre)'
]

const CARACTERISTICAS = [
  'Multiempresa puede manejar hasta 99 empresas por cada instalación y crear gestiones sin límite.',
  'Multiusuario permite personalizar a los usuarios (nivel de usuario).',
  'Exporta datos a formato Excel.',
  'Bimonetaria, moneda nacional (Bs.) y moneda extranjera (US$).',
  'Plan contable definible por el usuario.',
  'Consolidación de empresas.',
  'Respaldo de la información (Backup).',
  'Proporciona diversos reportes y documentos de trabajo.',
  'Niveles de seguridad por usuario.',
  'Amigable',
  'Fácil de usar.',
  'Funcionamiento total en red local (multiusuario)',
  'No requiere computadoras de alta capacidad.'
]

const OBJETIVOS = [
  'Optimizar los procesos contables.',
  'Procesar y mantener actualizada la información contable',
  'Brindar asesoramiento permanentemente al cliente para obtener mayor rendimiento del software.',
  'Seguir con mejoras al software, para que nuestros módulos sean estables y óptimos.'
]

const MODULOS = [
  {
    icon: Calculator,
    title: 'MÓDULO DE CONTABILIDAD',
    price: 'US$ 600.-',
    items: ['Plan de Cuentas', 'Comprobantes', 'Libros']
  },
  {
    icon: Boxes,
    title: 'MÓDULO DE INVENTARIOS',
    price: 'US$ 600.-',
    items: ['Administración', 'Items', 'Reportes']
  },
  {
    icon: Building2,
    title: 'MÓDULO DE ACTIVOS FIJOS',
    price: 'US$ 600.-',
    items: ['Altas - Bajas', 'Ubicación', 'Reportes Mensuales']
  },
  {
    icon: UserRound,
    title: 'MÓDULO DE PLANILLA DE SUELDOS',
    price: 'US$ 600.-',
    items: ['Parametrización', 'Proceso Mensual', 'Reportes Anuales']
  },
  {
    icon: FileText,
    title: 'MÓDULO DE FACTURACIÓN COMPUTARIZADA',
    price: 'US$ 1,500.-',
    items: ['Facturacion', 'Libro de ventas', 'Apertura Cierre']
  },
  {
    icon: FileText,
    title: 'MÓDULO DE FACTURACIÓN COMPUTARIZADA E INVENTARIOS (INTEGRADO)',
    price: 'US$ 2,000.-',
    items: ['Control De Inventario', 'Facturación', 'Reportes']
  },
  {
    icon: FileText,
    title: 'MÓDULO DE FACTURACIÓN, INVENTARIOS Y CONTABILIDAD (INTEGRADO)',
    price: 'US$ 3,000.-',
    items: ['Control De Inventario', 'Facturación', 'Comprobantes']
  }
]

const CLIENTES = [
  'DEPARTAMENTAL LICIA LA PAZ',
  'CABOCO',
  'FAPELSA S.A.',
  'FENCOMIN',
  "ANDY'S",
  'INSTITUTO FRANCO BOLIVIANO',
  'HBDERM S.R.L.',
  'U. NUESTRA SEÑORA DE LA PAZ',
  'UNIFRANZ',
  'MASTERLINE',
  'ABYA YALA',
  'PDVSA BOLIVIA'
]

const SUCURSALES = [
  {
    ciudad: 'OFICINA CENTRAL',
    contactos: [
      'Telf. Of.: +591 22204200  +591 22201962',
      'Cel.: +591 71965001  +591 71575862',
      'WhatsApp: +591 68069736',
      'Email: javieralcon@sic-jac.com'
    ]
  },
  {
    ciudad: 'SUCURSAL SANTA CRUZ',
    contactos: [
      'Telf. Of.: +591 3-3243814',
      'Cel.: +591 72188189',
      'WhatsApp: +591 73119333',
      'Email: sucursal_santacruz@sic-jac.com'
    ]
  },
  {
    ciudad: 'POTOSI',
    contactos: [
      'Lic. Waldir Serrano Bedoya — Móvil: 724-11143 — potosi_2@sic-jac.com',
      'Lic. Danila Serrano Flores — Móvil: 723-89611 — potosi_3@sic-jac.com',
      'Lic. Renan Arismendi Chumacero — Móvil: 72501698 — potosi_1@sic-jac.com'
    ]
  },
  {
    ciudad: 'CHUQUISACA – SUCRE',
    contactos: [
      'Lic. Jose Luis Atahuachi — Móvil: 72898882 — sucre_1@sic-jac.com',
      'Lic. Mario Gamarra — Móvil: 72883344 — sucre_2@sic-jac.com'
    ]
  },
  {
    ciudad: 'POTOSI-TUPIZA',
    contactos: ['Lic. Freddy Marca Aguilar — Móvil: 73332946 / 73589753 — tupiza_1@sic-jac.com']
  },
  {
    ciudad: 'ORURO',
    contactos: [
      'Lic. Julio M. Hidalgo Soria — Móvil: 718-45396 — oruro_1@sic-jac.com',
      'Lic. Gabriel Pérez Peláez — Móvil: 723-23857 — oruro_2@sic-jac.com'
    ]
  },
  {
    ciudad: 'BENI',
    contactos: ['Lic. William Chao Rivero — Móvil: 79214200 — beni_1@sic-jac.com']
  }
]

const HERO_SLIDES = [
  {
    id: 'contabilidad',
    image: '/images/hero-contabilidad.jpg',
    title: 'MÓDULO DE CONTABILIDAD',
    text: 'EL SISTEMA DE CONTABILIDAD LE PERMITE REGISTRAR COMPROBANTES, GENERAR LIBROS Y MANEJAR SU PLAN DE CUENTAS DE FORMA ORDENADA Y CONFIABLE, CUMPLIENDO CON LA NORMATIVA VIGENTE.'
  },
  {
    id: 'inventarios',
    image: '/images/hero-inventarios.jpg',
    title: 'MÓDULO DE INVENTARIOS',
    text: 'EL SISTEMA DE INVENTARIOS, REALIZA UN EFICIENTE CONTROL FISICO – VALORADO DE SUS PRODUCTOS A PARTIR DE LOS REGISTROS DE ENTRADAS Y SALIDAS DE ALMACÉN. SU AMIGABLE DISEÑO LO HACE DE FÁCIL MANEJO Y RÁPIDA IMPLEMENTACIÓN.'
  },
  {
    id: 'activos-fijos',
    image: '/images/hero-activos-fijos.jpg',
    title: 'MÓDULO DE ACTIVOS FIJOS',
    text: 'CONTROLE LAS ALTAS Y BAJAS DE SUS ACTIVOS, SU UBICACIÓN Y GENERE REPORTES MENSUALES PARA UNA GESTIÓN PATRIMONIAL TRANSPARENTE Y ACTUALIZADA.'
  },
  {
    id: 'planilla',
    image: '/images/hero-planilla.jpg',
    title: 'MÓDULO DE PLANILLA DE SUELDOS',
    text: 'AUTOMATICE EL PROCESO MENSUAL DE SUELDOS, LA PARAMETRIZACIÓN DE SUS EMPLEADOS Y LA GENERACIÓN DE REPORTES ANUALES SIN COMPLICACIONES.'
  },
  {
    id: 'facturacion',
    image: '/images/hero-facturacion.jpg',
    title: 'MÓDULO DE FACTURACIÓN COMPUTARIZADA',
    text: 'EMITA FACTURAS, LLEVE SU LIBRO DE VENTAS Y GESTIONE LA APERTURA Y CIERRE DE SUS PERIODOS FISCALES DESDE UN SOLO LUGAR.'
  },
  {
    id: 'integrado',
    image: '/images/hero-integrado.jpg',
    title: 'FACTURACIÓN, INVENTARIOS Y CONTABILIDAD',
    text: 'LA SOLUCIÓN INTEGRADA QUE UNE CONTROL DE INVENTARIO, FACTURACIÓN Y COMPROBANTES CONTABLES EN UN SOLO SISTEMA PARA SU EMPRESA.'
  }
]

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function SicJacSite() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slideCount = HERO_SLIDES.length

  const goToSlide = (index) => {
    setActiveSlide((index + slideCount) % slideCount)
  }
  const nextSlide = () => goToSlide(activeSlide + 1)
  const prevSlide = () => goToSlide(activeSlide - 1)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, slideCount])

  return (
    <div className="sj-root">
      {/* TOP SOCIAL BAR */}
      <div className="sj-topbar">
        <span className="sj-icon-fb">f</span>
        <span className="sj-icon-google">G</span>
        <span className="sj-icon-twitter">t</span>
        <span className="sj-icon-youtube">▶</span>
        <span className="sj-icon-linkedin">in</span>
      </div>

      {/* HEADER */}
      <CustomHeader />

      {/* HERO CARRUSEL */}
      <section
        className="sj-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`sj-hero-slide${i === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={i !== activeSlide}
          >
            <div className="sj-hero-panel">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button className="sj-btn-clay">DETALLES</button>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="sj-hero-arrow sj-hero-arrow-left"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          className="sj-hero-arrow sj-hero-arrow-right"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <ChevronRight size={22} />
        </button>

        <div className="sj-dots">
          {HERO_SLIDES.map((slide, i) => (
            <span
              key={slide.id}
              className={i === activeSlide ? 'active' : ''}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="sj-info-grid">
        {INFO_CARDS.map(({ icon: Icon, title, text }) => (
          <div className="sj-info-card" key={title}>
            <div className="sj-icon-circle">
              <Icon size={26} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#">LEER MÁS...</a>
          </div>
        ))}
      </section>

      {/* BIENVENIDO */}
      <section className="sj-welcome">
        <div className="sj-boxes">
          {['ACTIVOS FIJOS', 'INVENTARIOS', 'PLANILLA DE SUELDOS', 'CONTABILIDAD'].map((b) => (
            <div className="sj-box" key={b}>
              SIC-JAC
              <br />
              {b}
            </div>
          ))}
        </div>
        <div className="sj-welcome-text">
          <h2>BIENVENIDO A SIC-JAC</h2>
          <p>
            El Software contable SIC-JAC es un sistema de gestión de información administrativa y
            contable diseñado para responder a sus necesidades en cuanto al manejo de la información
            contable, sistematiza, mecaniza y simplifica al máximo el trabajo diario, con la
            inserción de información correcta el software registra y procesa esta información. Su
            diseño amplio y su flexibilidad le permiten aplicar al proceso contable a diferentes
            tipos de empresas en cuanto a inicio y cierre de periodos:
          </p>
          <ul>
            {PERIODOS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="sj-senapi">
            <h3>REGISTRO EN SENAPI</h3>
            <p>
              El Sistema de Información Contable "SIC-JAC", está registrado en el Servicio Nacional
              de Propiedad Intelectual (SENAPI) con el número R.A. No. 6-560.
            </p>
          </div>
        </div>
      </section>

      {/* CARACTERISTICAS / OBJETIVOS / ASESORIA */}
      <section className="sj-features">
        <div>
          <h2>ALGUNAS DE NUESTRAS CARACTERÍSTICAS</h2>
          <div className="sj-underline" />
          <p className="sj-caract-intro">
            Automatiza los procesos de las empresas, favoreciendo la correcta toma de decisiones de
            manera sencilla, eficiente y productiva.
          </p>
          <ul>
            {CARACTERISTICAS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="sj-obj-block">
            <div className="sj-obj-header">
              <div className="sj-icon-circle">
                <TrendingUp size={22} />
              </div>
              <h3>OBJETIVOS</h3>
            </div>
            <ul>
              {OBJETIVOS.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className="sj-obj-block">
            <div className="sj-obj-header">
              <div className="sj-icon-circle">
                <UserRound size={22} />
              </div>
              <h3>ASESORÍA Y CAPACITACIÓN</h3>
            </div>
            <p className="sj-asesoria-text">
              Ofrecemos <strong className="sj-highlight">capacitación</strong> ilimitada en el
              manejo operativo de nuestros módulos con videos tutoriales que permiten su consulta en
              cualquier momento, además le ofrecemos asesoría vía teléfono, en el caso de no poder
              solucionar su consulta vía teléfono, realizamos una visita para solucionar el
              problema. Brindamos nuestro mejor esfuerzo en contestar sus preguntas de las más
              sencillas hasta ayudarlos con los problemas más complejos.
            </p>
          </div>
        </div>
      </section>

      {/* MODULOS Y PRECIOS */}
      <section className="sj-modulos">
        <div className="sj-modulos-grid">
          {MODULOS.map(({ icon: Icon, title, price, items }) => (
            <div className="sj-mod-card" key={title}>
              <div className="sj-mod-icon">
                <Icon size={30} />
              </div>
              <h4>{title}</h4>
              <div className="sj-mod-price">{price}</div>
              <ul>
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <button className="sj-mod-btn">DETALLES</button>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTES */}
      <section className="sj-clientes">
        <h2>NUESTROS CLIENTES</h2>
        <div className="sj-logos">
          {CLIENTES.map((c) => (
            <div className="sj-logo-chip" key={c}>
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* SUCURSALES Y DISTRIBUIDORES */}
      <section className="sj-sucursales">
        <h2>SUCURSALES Y DISTRIBUIDORES</h2>
        <div className="sj-suc-grid">
          {SUCURSALES.map(({ ciudad, contactos }) => (
            <div className="sj-suc-card" key={ciudad}>
              <h3>{ciudad}</h3>
              {contactos.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <button className="sj-mas-detalles">MAS DETALLES</button>
      </section>

      {/* FLOATING BUTTONS */}
      <button className="sj-fab-up" aria-label="Subir">
        <ChevronUp size={20} />
      </button>
      <button className="sj-fab-chat">
        <MessageCircle size={16} /> Chat
      </button>
    </div>
  )
}
