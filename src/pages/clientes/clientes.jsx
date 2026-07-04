import { useState } from "react";
import "./clientes.css";

import aduanasLogos from "../../assets/aduanas-logos.png";
import medicosLogos from "../../assets/medicos-logos.png";
import comercioLogos from "../../assets/comercio-logos.png";
const CATEGORIES = [
  {
    id: "aduanas",
    code: "R-01",
    title: "Agencias Aduaneras y Logística",
    accent: "teal",
    image: aduanasLogos,
    count: 13,
  },
  {
    id: "medicos",
    code: "R-02",
    title: "Insumos Médicos y Laboratorio",
    accent: "blue",
    image: medicosLogos,
    count: 14,
  },
  {
    id: "comercio",
    code: "R-03",
    title: "Importación · Exportación · Comercialización",
    accent: "rust",
    image: comercioLogos,
    count: 48,
    extra: [
      "Asiagro International S.R.L.",
      "Bolivian Golden Grain",
      "Borsche International Trading S.R.L.",
      "Edgar Fernando Juárez",
      "Empresa de Servicios de Distribución S.R.L.",
      "Gerardo Cartagena Espinoza",
      "Importadora Imrepo – Ricardo Dávila",
      "Importaciones Omalum S.R.L.",
      "Import-Export M.J.A. S.R.L.",
      "Lidia Sirpa – Ferretería La Casita",
      "Luface S.R.L.",
      "Maralto Corporación S.R.L.",
      "Mentoring S.R.L.",
      "Petroal S.R.L.",
      "Windsor Nina",
    ],
  },
];

function ExtraRow({ name, index }) {
  return (
    <li className="ledger-row">
      <span className="ledger-row__index">
        {String(index).padStart(3, "0")}
      </span>
      <span className="ledger-row__name">{name}</span>
    </li>
  );
}

function Rubro({ code, title, accent, image, count, extra, query }) {
  const total = count + (extra ? extra.length : 0);

  const filteredExtra = extra
    ? extra.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className={`rubro rubro--${accent}`}>
      <header className="rubro__tab">
        <span className="rubro__code">{code}</span>
        <h3 className="rubro__title">{title}</h3>
        <span className="rubro__count">{total} registradas</span>
      </header>

      <div className="rubro__image-wrap" tabIndex={0}>
        <img
          className="rubro__image"
          src={image}
          alt={`Logotipos de empresas del rubro ${title}`}
          loading="lazy"
        />
      </div>

      {extra && (
        <div className="rubro__extra">
          <p className="rubro__extra-label">Sin logotipo registrado</p>

          {filteredExtra.length > 0 ? (
            <ul className="ledger-list">
              {filteredExtra.map((name) => (
                <ExtraRow
                  key={name}
                  name={name}
                  index={extra.indexOf(name) + count + 1}
                />
              ))}
            </ul>
          ) : (
            <p className="rubro__extra-empty">
              Sin coincidencias para "{query}".
            </p>
          )}
        </div>
      )}
    </section>
  );
}

function clientes() {
  const [query, setQuery] = useState("");

  const totalEmpresas = CATEGORIES.reduce(
    (sum, cat) => sum + cat.count + (cat.extra ? cat.extra.length : 0),
    0
  );

  return (
    <div className="clientes-directory">
      <header className="clientes-directory__header">
        <span className="clientes-directory__eyebrow">
          Directorio · Actualizado 2026
        </span>

        <h2 className="clientes-directory__title">
          Empresas Clientes
        </h2>

        <p className="clientes-directory__lead">
          {CATEGORIES.length} rubros · {totalEmpresas} empresas registradas
        </p>

        <input
          type="text"
          className="clientes-directory__search"
          placeholder="Buscar empresa sin logotipo…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      {CATEGORIES.map((cat) => (
        <Rubro key={cat.id} {...cat} query={query} />
      ))}
    </div>
  );
}

export default clientes;