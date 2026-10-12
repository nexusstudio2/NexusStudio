import { useState } from "react";
import {
  foto,
  negocio,
  waLink,
  fotos,
  hero,
  stats,
  programas,
  horarios,
  resultados,
  planes,
  contacto,
} from "./config.js";

const num = (i) => String(i + 1).padStart(2, "0");

function Horarios() {
  const [hoy] = useState(() => new Date().getDay());

  return (
    <section className="horarios" id="horarios">
      <div className="wrap">
        <h2>Encuentra tu horario</h2>
        <div className="h-tabla">
          {horarios.map((h) => {
            const esHoy = h.dias.includes(hoy);
            return (
              <div className={"h-fila" + (esHoy ? " hoy" : "")} key={h.nombre}>
                <div className="h-dia">
                  <span>{h.nombre}</span>
                  {esHoy && <em>Hoy</em>}
                </div>
                {h.cerrado ? (
                  <p className="h-cerrado">Cerrado</p>
                ) : (
                  <>
                    {[
                      ["Mañana", h.manana],
                      ["Mediodía", h.mediodia],
                      ["Tarde y noche", h.tarde],
                    ].map(([nombre, horas]) => (
                      <div className="h-bloque" key={nombre}>
                        <span className="h-t">{nombre}</span>
                        <div className="h-horas">
                          {horas.length ? (
                            horas.map((x) => <b key={x}>{x}</b>)
                          ) : (
                            <i>Sin clase</i>
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [f, setF] = useState({ nombre: "", telefono: "", interes: "" });
  const cambia = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const msg =
      "Hola Nudo Fitness, quiero agendar mi clase de prueba\n\n" +
      `Nombre: ${f.nombre}\n` +
      `Teléfono: ${f.telefono}\n` +
      `Me interesa: ${f.interes || "No especificado"}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="contacto" id="contacto">
      <div className="wrap contacto-in">
        <div>
          <h2>{contacto.titulo}</h2>
          <p>{contacto.texto}</p>
        </div>
        <form onSubmit={enviar}>
          <label>
            Tu nombre
            <input name="nombre" value={f.nombre} onChange={cambia} required />
          </label>
          <label>
            Tu teléfono
            <input
              name="telefono"
              type="tel"
              value={f.telefono}
              onChange={cambia}
              required
            />
          </label>
          <label>
            ¿Qué te interesa?
            <select name="interes" value={f.interes} onChange={cambia}>
              <option value="">Elige una opción</option>
              {contacto.intereses.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </label>
          <button type="submit">{contacto.boton}</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="hero">
        <div className="wrap barra">
          <span className="logo">{negocio.nombre}</span>
          <a
            className="boton negro"
            href={waLink(hero.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>

        <div className="wrap hero-in">
          <div className="hero-texto">
            <span className="etiqueta">{hero.etiqueta}</span>
            <h1>{hero.titulo}</h1>
            <p>{hero.texto}</p>
            <div className="acciones">
              <a className="boton negro" href="#contacto">
                Agenda tu clase de prueba
              </a>
              <a className="enlace" href="#planes">
                Ver planes
              </a>
            </div>
          </div>
          <img
            className="hero-foto"
            src={foto(fotos.hero.id, 1200)}
            alt={fotos.hero.alt}
          />
        </div>
      </header>

      <section className="stats">
        <div className="wrap stats-in">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="s-num">{s.num}</p>
              <p className="s-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="programas" id="programas">
        {programas.map((p, i) => (
          <article className={"prog prog-" + (i + 1)} key={p.nombre}>
            <div className="prog-cab">
              <span className="prog-n">{num(i)}</span>
              <span className="prog-tag">{p.tag}</span>
            </div>
            <h3>{p.nombre}</h3>
            <p>{p.texto}</p>
          </article>
        ))}
      </section>

      <div className="duo">
        <img
          src={foto(fotos.boxeo.id, 1600)}
          alt={fotos.boxeo.alt}
          loading="lazy"
        />
      </div>

      <Horarios />

      <section className="resultados">
        <div className="wrap">
          <h2>Lo que dice nuestra comunidad</h2>
          <div className="r-rejilla">
            {resultados.map((r) => (
              <figure key={r.nombre}>
                <p className="r-cifra">{r.cifra}</p>
                <p className="r-detalle">{r.detalle}</p>
                <blockquote>{r.texto}</blockquote>
                <figcaption>{r.nombre}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="planes" id="planes">
        <div className="wrap">
          <h2>Elige tu plan</h2>
          <div className="pl-rejilla">
            {planes.map((p) => (
              <article
                className={"plan" + (p.destacado ? " destacado" : "")}
                key={p.nombre}
              >
                {p.destacado && <span className="insignia">Más elegido</span>}
                <h3>{p.nombre}</h3>
                <p className="pl-precio">{p.precio}</p>
                <p className="pl-periodo">{p.periodo}</p>
                <ul>
                  {p.incluye.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <a
                  className="boton"
                  href={waLink(
                    `Hola, me interesa el plan ${p.nombre} de Nudo Fitness`,
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Quiero este
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contacto />

      <footer className="pie">
        <div className="wrap pie-in">
          <span>Chihuahua, México</span>
          <a href={negocio.volverA}>Volver a Nexus Studio</a>
        </div>
      </footer>
    </>
  );
}