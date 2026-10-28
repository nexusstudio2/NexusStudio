import { useState } from "react";
import {
  foto,
  negocio,
  nav,
  hero,
  servicios,
  resultados,
  equipo,
  testimonios,
  faq,
  contacto,
  cierre,
} from "./config.js";

const num = (i) => String(i + 1).padStart(2, "0");

function Sonrisa({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 26"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M5 5 C 60 30, 140 30, 195 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Preguntas() {
  const [abierta, setAbierta] = useState(0);

  return (
    <div className="q-lista">
      {faq.lista.map((q, i) => {
        const on = abierta === i;
        return (
          <div className={"q" + (on ? " on" : "")} key={q.p}>
            <button
              type="button"
              className="q-cab"
              aria-expanded={on}
              onClick={() => setAbierta(on ? -1 : i)}
            >
              <span>{q.p}</span>
              <span className="q-signo" aria-hidden="true"></span>
            </button>
            <div className="q-cuerpo">
              <p>{q.r}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [f, setF] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const cambia = (e) => {
    setEnviado(false);
    setF({ ...f, [e.target.name]: e.target.value });
  };

  const opciones = [
    ...servicios.lista.map((s) => s.nombre),
    servicios.opcionExtra,
  ];

  const enviar = (e) => {
    e.preventDefault();
    setEnviado(true);
    setF({ nombre: "", telefono: "", servicio: "", mensaje: "" });
  };

  return (
    <>
      <header className="cab">
        <div className="wrap cab-in">
          <a className="marca" href="#inicio" onClick={() => setMenu(false)}>
            <Sonrisa className="marca-s" />
            <span>{negocio.nombre}</span>
          </a>

          <nav className={"nav" + (menu ? " abierto" : "")}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenu(false)}>
                {n.texto}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#contacto"
              onClick={() => setMenu(false)}
            >
              Agendar cita
            </a>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Cerrar" : "Menú"}
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="wrap hero">
          <div className="hero-texto">
            <p className="etiqueta">{hero.etiqueta}</p>
            <h1>{hero.titulo}</h1>
            <Sonrisa className="hero-s" />
            <p className="hero-p">{hero.texto}</p>
            <div className="acciones">
              <a className="boton sol" href="#contacto">
                Agendar cita
              </a>
              <a className="enlace" href="#servicios">
                Ver servicios
              </a>
            </div>
            <ul className="confianza">
              {hero.confianza.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="hero-foto">
            <span className="disco" aria-hidden="true"></span>
            <img src={foto(hero.foto, 1000)} alt={hero.alt} />
          </div>
        </section>

        <section className="servicios" id="servicios">
          <div className="wrap">
            <div className="encab">
              <p className="etiqueta">{servicios.etiqueta}</p>
              <h2>{servicios.titulo}</h2>
              <p>{servicios.texto}</p>
            </div>
            <div className="s-rejilla">
              {servicios.lista.map((s, i) => (
                <article className={"s-bloque s-" + (i + 1)} key={s.nombre}>
                  <span className="s-num">{num(i)}</span>
                  <h3>{s.nombre}</h3>
                  <p>{s.texto}</p>
                  <a
                    href="#contacto"
                    onClick={() => {
                      setEnviado(false);
                      setF((x) => ({ ...x, servicio: s.nombre }));
                    }}
                  >
                    Preguntar por este servicio
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap resultados" id="resultados">
          <div className="r-texto">
            <p className="etiqueta">{resultados.etiqueta}</p>
            <h2>{resultados.titulo}</h2>
            <p>{resultados.texto}</p>
            <a className="enlace" href="#contacto">
              Quiero mi valoración
            </a>
          </div>
          <div className="r-fotos">
            <figure>
              <img
                src={foto(resultados.antes.id, 800)}
                alt={resultados.antes.alt}
                loading="lazy"
              />
              <figcaption>Antes</figcaption>
            </figure>
            <figure>
              <img
                src={foto(resultados.despues.id, 800)}
                alt={resultados.despues.alt}
                loading="lazy"
              />
              <figcaption>Después</figcaption>
            </figure>
            <p className="r-nota">{resultados.nota}</p>
          </div>
        </section>

        <section className="equipo" id="equipo">
          <div className="wrap">
            <div className="encab">
              <p className="etiqueta">{equipo.etiqueta}</p>
              <h2>{equipo.titulo}</h2>
              <p>{equipo.texto}</p>
            </div>
            <div className="e-rejilla">
              {equipo.lista.map((e) => (
                <article key={e.nombre}>
                  <img src={foto(e.foto, 500)} alt={e.nombre} loading="lazy" />
                  <h3>{e.nombre}</h3>
                  <p>{e.area}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap voces" id="testimonios">
          <div className="encab">
            <p className="etiqueta">{testimonios.etiqueta}</p>
            <h2>{testimonios.titulo}</h2>
          </div>
          <div className="v-rejilla">
            {testimonios.lista.map((t) => (
              <blockquote key={t.autor}>
                <p className="v-nota">5/5</p>
                <p>{t.texto}</p>
                <cite>{t.autor}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="wrap faq-in">
            <div className="encab">
              <p className="etiqueta">{faq.etiqueta}</p>
              <h2>{faq.titulo}</h2>
            </div>
            <Preguntas />
          </div>
        </section>

        <section className="wrap contacto" id="contacto">
          <div className="c-info">
            <p className="etiqueta">{contacto.etiqueta}</p>
            <h2>{contacto.titulo}</h2>
            <p>{contacto.texto}</p>
            <dl>
              <div>
                <dt>Teléfono</dt>
                <dd>{negocio.telefono}</dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>{negocio.horario}</dd>
              </div>
              <div>
                <dt>Dirección</dt>
                <dd>{negocio.direccion}</dd>
              </div>
            </dl>
          </div>

          <form className="form" onSubmit={enviar}>
            <label>
              Nombre completo
              <input
                name="nombre"
                value={f.nombre}
                onChange={cambia}
                placeholder="Tu nombre"
                required
              />
            </label>
            <label>
              Teléfono
              <input
                name="telefono"
                type="tel"
                value={f.telefono}
                onChange={cambia}
                placeholder="55 0000 0000"
                required
              />
            </label>
            <label>
              Servicio de interés
              <select
                name="servicio"
                value={f.servicio}
                onChange={cambia}
                required
              >
                <option value="">Selecciona una opción</option>
                {opciones.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                name="mensaje"
                rows="4"
                value={f.mensaje}
                onChange={cambia}
                placeholder="Cuéntanos qué necesitas"
              />
            </label>
            <button type="submit" className="boton sol">
              Enviar solicitud
            </button>
            {enviado && (
              <p className="gracias" role="status">
                {contacto.gracias}
              </p>
            )}
          </form>
        </section>

        <section className="cierre">
          <div className="wrap cierre-in">
            <div>
              <p className="etiqueta">{cierre.etiqueta}</p>
              <h2>{cierre.titulo}</h2>
            </div>
            <a className="boton sol" href="#contacto">
              {cierre.boton}
            </a>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="wrap pie-in">
          <p>{negocio.nombre}</p>
          <p>Demo UX/UI para generar citas dentales.</p>
        </div>
      </footer>
    </>
  );
}