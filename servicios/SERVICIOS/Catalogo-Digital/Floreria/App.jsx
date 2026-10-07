import CatalogoGrid from "../../../../src/catalogo/CatalogoGrid.jsx";
import { categorias, productos } from "./productos.js";
import {
  negocio,
  waLink,
  hero,
  proceso,
  historias,
  testimonios,
  cierre,
} from "./config.js";

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="mf-hero">
        <div className="container">
          <div className="mf-mark">
            <span></span> {negocio.nombre}
          </div>
          <h1>{hero.titulo}</h1>
          <p>{hero.texto}</p>
          <div className="mf-hero-actions">
            <a href="#catalogo" className="mf-btn mf-btn-primary">
              Ver arreglos ↓
            </a>
            <a
              href={waLink(hero.mensajeWa)}
              className="mf-btn mf-btn-ghost"
              target="_blank"
              rel="noopener"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FILTROS + MOSAICO */}
      <CatalogoGrid categorias={categorias} productos={productos} />

      {/* CÓMO PEDIR */}
      <section className="mf-process">
        <div className="container">
          <div className="mf-process-inner">
            <div className="mf-process-head">
              <span>{proceso.etiqueta}</span>
              <h2>{proceso.titulo}</h2>
            </div>
            <div className="mf-process-line">
              {proceso.pasos.map((paso) => (
                <div className="mf-process-step" key={paso.titulo}>
                  <div className="mf-process-dot"></div>
                  <div>
                    <h4>{paso.titulo}</h4>
                    <p>{paso.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="mf-editorial">
        <div className="container">
          <div className="mf-editorial-head">
            <span>{historias.etiqueta}</span>
            <h2>{historias.titulo}</h2>
          </div>

          {historias.lista.map((h) => (
            <div className="mf-story" key={h.titulo}>
              <div className="mf-story-visual" style={{ background: h.fondo }}>
                {h.emoji}
              </div>
              <div>
                <h3>{h.titulo}</h3>
                <p>{h.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mf-testimonials">
        <div className="container">
          <div className="mf-editorial-head">
            <span>{testimonios.etiqueta}</span>
            <h2>{testimonios.titulo}</h2>
          </div>

          {testimonios.lista.map((t) => (
            <div className={"mf-quote mf-quote-" + t.lado} key={t.autor}>
              <p>"{t.texto}"</p>
              <span>— {t.autor}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE */}
      <section className="mf-closing">
        <div className="container">
          <h2>{cierre.titulo}</h2>
          <p>{cierre.texto}</p>
          <a
            href={waLink(cierre.mensajeWa)}
            className="mf-btn mf-btn-primary"
            target="_blank"
            rel="noopener"
          >
            Pedir mi arreglo →
          </a>
        </div>
      </section>

      <div className="mf-back">
        <a href={negocio.volverA}>← Volver a Nexus Studio</a>
      </div>
    </>
  );
}