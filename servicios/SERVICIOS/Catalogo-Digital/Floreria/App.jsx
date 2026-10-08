import { useState } from "react";
import { categorias, productos } from "./productos.js";
import {
  foto,
  negocio,
  waLink,
  hero,
  datos,
  pasos,
  historia,
  testimonios,
  cierre,
} from "./config.js";

function Catalogo() {
  const [activa, setActiva] = useState("todo");
  const visibles =
    activa === "todo"
      ? productos
      : productos.filter((p) => p.categoria === activa);

  return (
    <section className="catalogo" id="catalogo">
      <div className="wrap">
        <div className="catalogo-cab">
          <h2>Catálogo</h2>
          <div className="tabs" role="tablist">
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

        <div className="rejilla">
          {visibles.map((p) => (
            <a
              key={p.nombre}
              className="pieza"
              href={waLink(`Hola, me interesa el arreglo "${p.nombre}"`)}
              target="_blank"
              rel="noopener"
            >
              <div className="pieza-foto">
                <img src={foto(p.foto, 700)} alt={p.alt} loading="lazy" />
              </div>
              <div className="pieza-datos">
                <span className="pieza-nombre">{p.nombre}</span>
                <span className="pieza-precio">
                  ${p.precio.toLocaleString("es-MX")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <header className="wrap barra">
        <a className="logo" href="#">
          {negocio.nombre}
        </a>

        {/* Botón de hamburguesa para móviles */}
        <button
          className="menu-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú de navegación"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        <nav className={menuAbierto ? "abierto" : ""}>
          <a href="#catalogo" onClick={() => setMenuAbierto(false)}>Catálogo</a>
          <a href="#pedidos" onClick={() => setMenuAbierto(false)}>Cómo pedir</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
        </nav>
      </header>

      <section className="wrap hero">
        <div className="hero-texto">
          <h1>
            {hero.linea1} <em>{hero.linea2}</em>
          </h1>
          <p>{hero.texto}</p>
          <a
            className="enlace"
            href={waLink(hero.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            Pedir por WhatsApp
          </a>
        </div>
        <figure className="hero-foto">
          <img src={hero.foto} alt="Flores rosas y blancas de cerca" />
          <figcaption>{hero.pie}</figcaption>
        </figure>
      </section>

      <div className="wrap datos">
        {datos.map(([k, v]) => (
          <div key={k}>
            <span>{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
      </div>

      <Catalogo />

      <section className="wrap pedidos" id="pedidos">
        <h2>Cómo pedir</h2>
        <ol>
          {pasos.map((p, i) => (
            <li key={p.titulo}>
              <span className="num">0{i + 1}</span>
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="historia">
        <div className="wrap historia-grid">
          <img src={historia.foto} alt="Persona sosteniendo un ramo de flores" />
          <div>
            <blockquote>{historia.cita}</blockquote>
            <p>{historia.texto}</p>
          </div>
        </div>
      </section>

      <section className="wrap voces">
        {testimonios.map((t) => (
          <figure key={t.autor}>
            <blockquote>{t.texto}</blockquote>
            <figcaption>
              {t.autor}, <span>{t.nota}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="cierre" id="contacto">
        <div className="wrap cierre-grid">
          <div>
            <h2>{cierre.titulo}</h2>
            <p>{cierre.texto}</p>
          </div>
          <a
            className="cierre-tel"
            href={waLink(cierre.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            {negocio.telefono}
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