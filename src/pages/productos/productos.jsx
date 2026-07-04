import React from "react";
import {
  Calendar,
  User,
  Eye,
  ArrowRight,
  Play,
  Share2,
  RotateCcw,
  ShieldCheck,
  Zap,
  Headphones,
} from "lucide-react";
import "./productos.css";

export default function ModuloProducto({ data }) {
  if (!data) return null;

  const {
    titulo,
    fecha,
    autor,
    vistas,
    intro,
    features,
    videoTitulo,
  } = data;

  // Divide la lista de características en dos columnas, como en el original
  const mitad = Math.ceil(features.length / 2);
  const columnaIzq = features.slice(0, mitad);
  const columnaDer = features.slice(mitad);

  return (
    <main className="pp-page">
      <div className="pp-container">
        {/* Barra de título */}
        <div className="pp-title-bar">
          <h1 className="pp-title">{titulo}</h1>
        </div>

        {/* Meta información */}
        <div className="pp-meta">
          <span className="pp-meta-item">
            <Calendar size={13} />
            {fecha}
          </span>
          <span className="pp-meta-sep">|</span>
          <span className="pp-meta-item">
            <User size={13} />
            posted by: {autor}
          </span>
          <span className="pp-meta-sep">|</span>
          <span className="pp-meta-item">
            <Eye size={13} />
            views: {vistas}
          </span>
        </div>

        {/* Imagen + introducción */}
        <div className="pp-intro-row">
          <div className="pp-intro-image">
            <div className="pp-intro-image-placeholder">
              <span>Imagen del módulo</span>
            </div>
          </div>
          <div className="pp-intro-text">
            {intro.map((parrafo, i) => (
              <p key={i}>{parrafo}</p>
            ))}
          </div>
        </div>

        {/* Lista de características en dos columnas */}
        <div className="pp-features-grid">
          <ul className="pp-features-col">
            {columnaIzq.map((f, i) => (
              <li key={i} className="pp-feature-item">
                <ArrowRight size={12} className="pp-feature-icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <ul className="pp-features-col">
            {columnaDer.map((f, i) => (
              <li key={i} className="pp-feature-item">
                <ArrowRight size={12} className="pp-feature-icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Llamado a la acción */}
        <p className="pp-cta-text">
          Solicite ahora mismo una demostración gratuita y descubra cómo este
          módulo puede adaptarse al flujo de trabajo de su empresa, sin
          compromiso y con acompañamiento de nuestro equipo técnico.
        </p>

        {/* Video de presentación */}
        <div className="pp-video-card">
          <div className="pp-video-header">{videoTitulo}</div>
          <div className="pp-video-body">
            <div className="pp-video-mockup">
              <div className="pp-video-mockup-window">
                <div className="pp-video-mockup-titlebar">
                  <span className="pp-dot pp-dot--red" />
                  <span className="pp-dot pp-dot--yellow" />
                  <span className="pp-dot pp-dot--green" />
                </div>
                <div className="pp-video-mockup-fields">
                  <div className="pp-video-mockup-field">
                    <span>Nombre</span>
                  </div>
                  <div className="pp-video-mockup-field">
                    <span>Apellido</span>
                  </div>
                  <div className="pp-video-mockup-radios">
                    <label>
                      <input type="radio" name="demo-radio" readOnly checked />{" "}
                      Sí
                    </label>
                    <label>
                      <input type="radio" name="demo-radio" readOnly /> No
                    </label>
                  </div>
                </div>
              </div>
              <button className="pp-play-btn" type="button" aria-label="Reproducir video">
                <Play size={22} fill="#ffffff" />
              </button>
            </div>
            <div className="pp-video-actions">
              <button className="pp-video-icon-btn" type="button">
                <Share2 size={14} />
              </button>
              <button className="pp-video-icon-btn" type="button">
                <RotateCcw size={14} />
              </button>
              <a
                className="pp-youtube-link"
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                Ver en YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="pp-benefits-row">
          <div className="pp-benefit">
            <ShieldCheck size={26} className="pp-benefit-icon" />
            <h3>El mejor plan mensual para su PYME</h3>
            <p>
              Acceda a todas las funcionalidades del sistema con un plan
              mensual accesible, sin inversión inicial en licencias.
            </p>
            <button className="pp-btn pp-btn--outline">Solicitar Demo</button>
          </div>
          <div className="pp-benefit">
            <Headphones size={26} className="pp-benefit-icon" />
            <h3>Soporte técnico incluido en su plan</h3>
            <p>
              Nuestro equipo lo acompaña en la implementación y resuelve sus
              dudas durante todo el proceso de adopción.
            </p>
            <button className="pp-btn pp-btn--outline">Solicitar Demo</button>
          </div>
          <div className="pp-benefit">
            <Zap size={26} className="pp-benefit-icon" />
            <h3>Actualizaciones automáticas y gratuitas</h3>
            <p>
              Reciba las nuevas versiones del sistema sin costo adicional,
              siempre alineadas a los cambios normativos vigentes.
            </p>
            <button className="pp-btn pp-btn--solid">Actualizar</button>
          </div>
        </div>
      </div>
    </main>
  );
}