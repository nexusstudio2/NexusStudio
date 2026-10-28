import { useEffect, useState } from "react";
import {
  foto,
  negocio,
  waLink,
  nav,
  hero,
  servicios,
  galeria,
  nosotros,
  testimonios,
  horarios,
  ubicacion,
  cierre,
} from "./config.js";

const num = (i) => String(i + 1).padStart(2, "0");

function Corona() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="corona">
      <path
        fill="currentColor"
        d="M3 19h18v2H3zM3 7l4.5 4L12 4l4.5 7L21 7l-2 10H5z"
      />
    </svg>
  );
}

function useAparicion() {
  useEffect(() => {
    const items = document.querySelectorAll(".aparece");
    const reducido = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducido || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visto"));
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visto");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useAparicion();

  useEffect(() => {
    const alScroll = () => setScroll(window.scrollY > 20);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header className={"cab" + (scroll ? " fija" : "") + (menu ? " abierta" : "")}>
        <div className="wrap cab-in">
          <a className="marca" href="#inicio" onClick={() => setMenu(false)}>
            <Corona />
            <span>
              {negocio.nombre} <em>{negocio.apellido}</em>
            </span>
          </a>

          <nav className="nav" aria-label="Navegación principal">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.texto}
              </a>
            ))}
            <a
              className="nav-res"
              href={waLink(hero.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              Reservar
            </a>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={menu}
            aria-controls="menu-movil"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Cerrar" : "Menú"}
          </button>
        </div>

        <div className={"menu-movil" + (menu ? " on" : "")} id="menu-movil">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenu(false)}>
              {n.texto}
            </a>
          ))}
          <a
            href={waLink(hero.mensajeWa)}
            target="_blank"
            rel="noopener"
            onClick={() => setMenu(false)}
          >
            Reservar
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <img
            className="hero-foto"
            src={foto(hero.foto, 1800)}
            alt={hero.alt}
          />
          <div className="hero-vel"></div>
          <div className="wrap hero-in">
            <h1>{hero.titulo}</h1>
            <div className="hero-fila">
              <p>{hero.texto}</p>
              <a
                className="boton claro"
                href={waLink(hero.mensajeWa)}
                target="_blank"
                rel="noopener"
              >
                Reservar cita
              </a>
            </div>
            <dl className="hero-datos">
              {hero.datos.map(([n, t]) => (
                <div key={t}>
                  <dt>{n}</dt>
                  <dd>{t}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="servicios" id="servicios">
          <div className="wrap">
            <div className="encab aparece">
              <h2>{servicios.titulo}</h2>
              <p>{servicios.texto}</p>
            </div>
            <ul className="s-lista">
              {servicios.lista.map((s, i) => (
                <li className="aparece" key={s.nombre}>
                  <span className="s-num">{num(i)}</span>
                  <div className="s-cuerpo">
                    <h3>{s.nombre}</h3>
                    <p>{s.texto}</p>
                  </div>
                  <div className="s-lado">
                    <span className="s-precio">{s.precio}</span>
                    <a
                      href={waLink(s.mensajeWa)}
                      target="_blank"
                      rel="noopener"
                    >
                      Reservar
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="galeria" id="galeria">
          <div className="wrap">
            <h2 className="aparece">{galeria.titulo}</h2>
            <div className="g-rejilla">
              {galeria.fotos.map((f) => (
                <figure className={"aparece " + f.forma} key={f.id}>
                  <img src={foto(f.id, 1000)} alt={f.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="nosotros" id="nosotros">
          <div className="wrap n-in">
            <figure className="aparece">
              <img
                src={foto(nosotros.foto, 1000)}
                alt={nosotros.alt}
                loading="lazy"
              />
            </figure>
            <div className="aparece">
              <h2>{nosotros.titulo}</h2>
              <p>{nosotros.texto}</p>
              <ul>
                {nosotros.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="voces">
          <div className="wrap">
            <h2 className="aparece">{testimonios.titulo}</h2>
            <div className="v-rejilla">
              {testimonios.lista.map((t) => (
                <blockquote className="aparece" key={t.autor}>
                  <p>{t.texto}</p>
                  <cite>{t.autor}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="donde" id="horarios">
          <div className="wrap d-in">
            <div className="aparece">
              <h2>{horarios.titulo}</h2>
              <ul className="h-lista">
                {horarios.lista.map(([dia, horas]) => (
                  <li key={dia}>
                    <span>{dia}</span>
                    <strong>{horas}</strong>
                  </li>
                ))}
              </ul>
              <a
                className="boton claro"
                href={waLink(horarios.mensajeWa)}
                target="_blank"
                rel="noopener"
              >
                {horarios.boton}
              </a>
            </div>

            <div className="aparece" id="ubicacion">
              <h2>{ubicacion.titulo}</h2>
              <p>{ubicacion.texto}</p>
              <p className="direccion">{negocio.direccion}</p>
              <a
                className="enlace"
                href={negocio.mapa}
                target="_blank"
                rel="noopener"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </section>

        <section className="cierre">
          <img
            src={foto(cierre.foto, 1600)}
            alt=""
            loading="lazy"
            className="cierre-foto"
          />
          <div className="cierre-vel"></div>
          <div className="wrap cierre-in aparece">
            <h2>{cierre.titulo}</h2>
            <p>{cierre.texto}</p>
            <a
              className="boton claro"
              href={waLink(cierre.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              {cierre.boton}
            </a>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="wrap pie-in">
          <a className="marca" href="#inicio">
            <Corona />
            <span>
              {negocio.nombre} <em>{negocio.apellido}</em>
            </span>
          </a>
          <a className="pie-demo" href={negocio.volverA}>
            Demo premium para portafolio de Nexus Studio.
          </a>
          <a
            href={waLink("Hola Black Crown Barber")}
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
      </footer>

      <a
        className="flota"
        href={waLink("Hola Black Crown Barber, quiero reservar")}
        target="_blank"
        rel="noopener"
        aria-label="Reservar por WhatsApp"
      >
        Reservar
      </a>
    </>
  );
}