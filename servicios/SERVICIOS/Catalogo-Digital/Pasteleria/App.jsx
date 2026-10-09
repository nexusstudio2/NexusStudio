import { useState } from "react";
import { categorias } from "./menu.js";
import {
  foto,
  negocio,
  waLink,
  hero,
  destacado,
  galeria,
  ficha,
  notas,
  cierre,
} from "./config.js";

function Carta() {
  const [activa, setActiva] = useState(categorias[0].id);
  const cat = categorias.find((c) => c.id === activa);

  return (
    <section className="wrap carta" id="carta">
      <div className="carta-lado">
        <h2>La carta</h2>
        <div className="carta-tabs">
          {categorias.map((c) => (
            <button
              key={c.id}
              type="button"
              className={activa === c.id ? "on" : ""}
              onClick={() => setActiva(c.id)}
            >
              {c.nombre}
            </button>
          ))}
        </div>
      </div>

      <div className="carta-lista">
        <ul>
          {cat.items.map((it) => (
            <li key={it.nombre}>
              <div className="fila">
                <h3>{it.nombre}</h3>
                <span className="guia"></span>
                <span className="precio">{it.precio}</span>
              </div>
              <p>{it.detalle}</p>
            </li>
          ))}
        </ul>
        <a
          className="enlace"
          href={waLink(`Hola, me interesa cotizar: ${cat.nombre}`)}
          target="_blank"
          rel="noopener"
        >
          Cotizar {cat.nombre.toLowerCase()}
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="barra">
        <a className="logo" href="#">
          {negocio.nombre}
        </a>
        <nav>
          <a href="#carta">Carta</a>
          <a href="#pedir">Cómo pedir</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-foto">
          <img src={hero.foto} alt={hero.altFoto} />
          <div className="hero-sello">
            <span>{destacado.etiqueta}</span>
            <strong>{destacado.titulo}</strong>
            <p>{destacado.texto}</p>
            <a
              href={waLink(destacado.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              {destacado.precio}, pedir este
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <h1>{hero.titulo}</h1>
          <p>{hero.texto}</p>
          <a
            className="enlace claro"
            href={waLink(hero.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </section>

      <Carta />

      <section className="galeria">
        <div className="wrap">
          <h2>{galeria.titulo}</h2>
          <div className="galeria-fila">
            {galeria.fotos.map((f) => (
              <figure key={f.id} className={f.forma}>
                <div className="marco">
                  <img src={foto(f.id, 700)} alt={f.alt} loading="lazy" />
                </div>
                <figcaption>{f.texto}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ficha" id="pedir">
        <div className="wrap ficha-grid">
          <img src={ficha.foto} alt={ficha.altFoto} loading="lazy" />
          <div>
            <h2>{ficha.titulo}</h2>
            <dl>
              {ficha.filas.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="wrap notas">
        <h2>{notas.titulo}</h2>
        <div className="notas-fila">
          {notas.lista.map((n) => (
            <figure key={n.autor}>
              <blockquote>{n.texto}</blockquote>
              <figcaption>{n.autor}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cierre">
        <div className="wrap cierre-grid">
          <div>
            <h2>{cierre.titulo}</h2>
            <p>{cierre.texto}</p>
          </div>
          <a
            className="boton"
            href={waLink(cierre.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            {cierre.boton}
          </a>
        </div>
      </section>

      <footer className="wrap pie">
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
        <span>Chihuahua, Chih.</span>
      </footer>
    </>
  );
}