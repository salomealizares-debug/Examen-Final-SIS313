import React, { useState } from "react";
import {
  Maximize2,
  Share2,
  Layers,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import "./PgDeCont.css";
import CustomHeader from "../../components/header/header.jsx";


export default function OficinaCentral() {
  const [contacto, setContacto] = useState("Oficina Central");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [recordarDatos, setRecordarDatos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="oc-page">
        <div>
            <CustomHeader/>
        </div>

      <div className="oc-container">
        {/* Título */}
        <h1 className="oc-title">OFICINA CENTRAL</h1>

        {/* Selector de contacto */}
        <div className="oc-select-wrap">
          <label className="oc-select-label">Seleccione un contacto</label>
          <select
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            className="oc-select"
          >
            <option>Oficina Central</option>
          </select>
        </div>

        {/* Tarjeta de mapa */}
        <div className="oc-map-card">
          <div className="oc-map-tag">
            <div>
              <div className="oc-map-tag-title">Loayza 233</div>
              <div className="oc-map-tag-address">
                Loayza 233, La Paz, Bolivia
              </div>
            </div>
            <div className="oc-map-tag-actions">
              <Maximize2 size={13} className="oc-map-tag-icon" />
              <Share2 size={13} className="oc-map-tag-icon" />
            </div>
          </div>

          <div className="oc-map-frame-wrap">
            <iframe
              title="mapa-oficina-central"
              className="oc-map-frame"
              src="https://www.google.com/maps?q=Calle+Loayza+233,+La+Paz,+Bolivia&output=embed"
              loading="lazy"
            />
          </div>

          <div className="oc-map-layers">
            <div className="oc-map-layer-btn">
              <Layers size={14} color="#666" />
            </div>
            <div className="oc-map-layer-btn" />
          </div>

          <div className="oc-map-fullscreen">
            <Maximize2 size={13} color="#666" />
          </div>
        </div>

        {/* Datos de contacto */}
        <div className="oc-contact-info">
          <p>
            <span className="oc-label-strong">Telf. Ofic.:</span> +591 2
            2204283 | +591 2 2201462
          </p>
          <p>
            <span className="oc-label-strong">Cel. Ofic.:</span> +591
            68597788 | +591 68597788 | +591 73208627
          </p>
          <p className="oc-whatsapp">
            <MessageCircle size={13} />
            WhatsApp: +591 68597788
          </p>

          <div className="oc-contact-row">
            <Mail size={14} className="oc-contact-icon" />
            <div className="oc-email-list">
              <p>jsantesban@hotmail.com</p>
              <p>jsantesban@gmail.com</p>
              <p>jsantesban@jsc.com</p>
            </div>
          </div>

          <div className="oc-contact-row">
            <MapPin size={14} className="oc-contact-icon" />
            <p>
              Calle Loayza #233, Casa/Of. Marcial de Aparicio #6 III piso, La
              Paz
            </p>
          </div>
        </div>

        <p className="oc-required-note">
          Rellene el campo obligatorio. Todos los campos con asterisco (*) son
          obligatorios.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="oc-form-grid">
            <div>
              <label className="oc-field-label">Nombre *</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="oc-input"
              />
            </div>
            <div>
              <label className="oc-field-label">Mensaje *</label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={5}
                className="oc-textarea"
              />
            </div>

            <div>
              <label className="oc-field-label">Correo electrónico *</label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="oc-input"
              />
            </div>

            <div>
              <label className="oc-field-label">Asunto *</label>
              <input
                type="text"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                className="oc-input"
              />
            </div>
          </div>

          {/* Captcha */}
          <div className="oc-captcha-wrap">
            <label className="oc-field-label">Captcha *</label>
            <div className="oc-captcha-box">
              ERROR para el propietario del sitio web: la clave del sitio web
              no es válida.
            </div>
          </div>

          {/* Checkbox + botón */}
          <div className="oc-actions-row">
            <label className="oc-checkbox-label">
              <input
                type="checkbox"
                checked={recordarDatos}
                onChange={(e) => setRecordarDatos(e.target.checked)}
                className="oc-checkbox"
              />
              Recordar mis datos
            </label>
            <button type="submit" className="oc-submit-btn">
              Enviar
            </button>
          </div>
        </form>

        {/* Enlaces */}
        <h2 className="oc-enlaces-title">ENLACES</h2>
      </div>

      {/* Footer */}
      <div className="oc-footer">POWERED BY CYBERCLOUDNET | ULP</div>
    </div>
  );
}
