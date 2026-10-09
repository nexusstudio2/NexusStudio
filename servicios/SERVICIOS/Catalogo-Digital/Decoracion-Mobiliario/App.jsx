import { useState } from "react";
import { categorias } from "./catalogo.js";
import {
  foto,
  negocio,
  waLink,
  hero,
  proceso,
  eventos,
  testimonios,
  cotizacion,
} from "./config.js";

const todas = categorias.flatMap((c) => c.items);

export default function App() {
  const [sel, setSel] = useState([]);
  const [datos, setDatos] = useState("");

  const alternar = (id) =>
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const elegidas = todas.filter((i) => sel.includes(i.id));

  const mensaje = elegidas.length
    ? `Hola, quiero cotizar para mi evento:\n` +
      elegidas.map((i) => `- ${i.nombre} (${i.precio} ${i.unidad})`).join("\n") +
      (datos.trim() ? `\n\nDatos del evento: ${datos.trim()}` : "")
    : cotizacion.mensajeBase +
      (datos.trim() ? `\n\nDatos del evento: ${datos.trim()}` : "");

  return (
    <>
      <header className="barra">
        <div className="wrap barra-in">
          <a className="logo" href="#">
            {negocio.nombre}
          </a>
          <a className="btn-cot" href="#cotizacion">
            Mi cotización ({sel.length})
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg">
          <img src={hero.foto} alt={hero.alt} />
        </div>
        <div className="wrap hero-in">
          <div className="hero-texto">
            <h1>
              {hero.linea1} <em>{hero.linea2}</em>
            </h1>
            <p>{hero.texto}</p>
            <div className="hero-links">
              <a className="enlace" href="#catalogo">
                Armar mi cotización
              </a>
              <a
                className="enlace sec"
                href={waLink(hero.mensajeWa)}
                target="_blank"
                rel="noopener"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
          <nav className="hero-indice" aria-label="Categorías">
            {categorias.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.nombre}
                <span>{c.items.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="wrap catalogo" id="catalogo">
        <div className="catalogo-cab">
          <h2>Catálogo de renta</h2>
          <p>
            Precios por pieza o por evento. Pulsa Agregar para sumarlo a tu
            cotización.
          </p>
        </div>

        {categorias.map((c) => (
          <div className="grupo" id={c.id} key={c.id}>
            <div className="grupo-cab">
              <h3>{c.nombre}</h3>
              <span>{c.items.length} piezas</span>
            </div>
            {c.items.map((it) => {
              const on = sel.includes(it.id);
              return (
                <article className="item" key={it.id}>
                  <div className="item-foto">
                    <img src={foto(it.foto, 400)} alt={it.alt} loading="lazy" />
                  </div>
                  <div className="item-info">
                    <h4>{it.nombre}</h4>
                    <p>{it.detalle}</p>
                  </div>
                  <div className="item-precio">
                    <strong>{it.precio}</strong>
                    <small>{it.unidad}</small>
                  </div>
                  <button
                    type="button"
                    className={"agregar" + (on ? " on" : "")}
                    onClick={() => alternar(it.id)}
                    aria-pressed={on}
                  >
                    {on ? "Agregado" : "Agregar"}
                  </button>
                </article>
              );
            })}
          </div>
        ))}
      </section>

      <section className="proceso">
        <div className="wrap proceso-in">
          <h2>{proceso.titulo}</h2>
          <ol>
            {proceso.pasos.map((p) => (
              <li key={p.titulo}>
                <span className="cuando">{p.cuando}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="eventos">
        <div className="wrap">
          <h2>{eventos.titulo}</h2>
        </div>
        <div className="tira">
          {eventos.lista.map((e) => (
            <figure key={e.nombre}>
              <img src={foto(e.foto, 640)} alt={e.alt} loading="lazy" />
              <figcaption>
                <strong>{e.nombre}</strong>
                <span>{e.lugar}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap voces">
        <h2>{testimonios.titulo}</h2>
        <div className="voces-grid">
          {testimonios.lista.map((t) => (
            <blockquote key={t.autor}>
              <p>{t.texto}</p>
              <cite>{t.autor}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cotiza" id="cotizacion">
        <div className="wrap cotiza-in">
          <div>
            <h2>{cotizacion.titulo}</h2>
            <p>{cotizacion.texto}</p>
          </div>
          <div className="cotiza-panel">
            {elegidas.length ? (
              <ul>
                {elegidas.map((i) => (
                  <li key={i.id}>
                    <span>{i.nombre}</span>
                    <button type="button" onClick={() => alternar(i.id)}>
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="vacio">{cotizacion.vacio}</p>
            )}
            <label>
              {cotizacion.campo}
              <textarea
                rows="3"
                value={datos}
                onChange={(e) => setDatos(e.target.value)}
                placeholder="Ej. 15 de marzo, Rancho Los Encinos, 120 invitados"
              />
            </label>
            <a
              className="boton"
              href={waLink(mensaje)}
              target="_blank"
              rel="noopener"
            >
              {cotizacion.boton}
            </a>
          </div>
        </div>
      </section>

      <footer className="wrap pie">
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
        <span>Chihuahua, Chih.</span>
      </footer>

      {sel.length > 0 && (
        <a className="barra-mov" href="#cotizacion">
          Ver cotización · {sel.length} {sel.length === 1 ? "pieza" : "piezas"}
        </a>
      )}
    </>
  );
}