import { useState } from "react";
import {
  foto,
  negocio,
  waLink,
  hero,
  confianza,
  servicios,
  comparador,
  equipo,
  faq,
  cierre,
} from "./config.js";

function Cita() {
  const [f, setF] = useState({ nombre: "", telefono: "", servicio: "" });
  const cambia = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const msg =
      "Hola Dental Norte, quiero agendar una cita\n\n" +
      `Nombre: ${f.nombre}\n` +
      `Teléfono: ${f.telefono}\n` +
      `Servicio de interés: ${f.servicio || "No especificado"}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <form className="cita" onSubmit={enviar}>
      <h2>Agenda tu cita</h2>
      <p className="cita-sub">Te confirmamos por WhatsApp en minutos</p>

      <label>
        Nombre
        <input name="nombre" value={f.nombre} onChange={cambia} required />
      </label>
      <label>
        Teléfono
        <input
          name="telefono"
          type="tel"
          value={f.telefono}
          onChange={cambia}
          required
        />
      </label>

      <fieldset>
        <legend>Servicio de interés</legend>
        <div className="fichas">
          {servicios.map((s) => (
            <button
              key={s.corto}
              type="button"
              className={f.servicio === s.corto ? "on" : ""}
              aria-pressed={f.servicio === s.corto}
              onClick={() =>
                setF({ ...f, servicio: f.servicio === s.corto ? "" : s.corto })
              }
            >
              {s.corto}
            </button>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="enviar">
        Agendar mi cita
      </button>
    </form>
  );
}

function Tratamientos() {
  const [i, setI] = useState(0);
  const s = servicios[i];

  return (
    <section className="wrap trat" id="tratamientos">
      <h2>Tratamientos disponibles</h2>
      <div className="trat-in">
        <div className="trat-lista" role="tablist">
          {servicios.map((x, n) => (
            <button
              key={x.nombre}
              type="button"
              role="tab"
              aria-selected={n === i}
              className={n === i ? "on" : ""}
              onClick={() => setI(n)}
            >
              <span className="t-n">{x.nombre}</span>
              <span className="t-p">{x.precio}</span>
            </button>
          ))}
        </div>

        <div className="trat-panel" role="tabpanel">
          <img src={foto(s.foto, 900)} alt={s.alt} key={s.foto} />
          <div className="trat-datos">
            <h3>{s.nombre}</h3>
            <p>{s.texto}</p>
            <p className="trat-precio">{s.precio}</p>
            <a
              className="boton solido"
              href={waLink(
                `Hola Dental Norte, quiero agendar una cita para: ${s.nombre}`,
              )}
              target="_blank"
              rel="noopener"
            >
              Agendar este tratamiento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparador() {
  const [pos, setPos] = useState(50);

  return (
    <section className="comparador">
      <div className="wrap">
        <h2>{comparador.titulo}</h2>
        <div className="comp">
          <img
            className="comp-despues"
            src={foto(comparador.foto, 1200)}
            alt={comparador.alt}
            loading="lazy"
          />
          <div
            className="comp-antes"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img src={foto(comparador.foto, 1200)} alt="" loading="lazy" />
          </div>
          <span className="comp-linea" style={{ left: pos + "%" }}></span>
          <span className="comp-et izq">Antes</span>
          <span className="comp-et der">Después</span>
          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparar antes y después"
          />
        </div>
        <p className="comp-nota">{comparador.nota}</p>
      </div>
    </section>
  );
}

function Preguntas() {
  const [abierta, setAbierta] = useState(0);

  return (
    <section className="faq">
      <div className="wrap faq-in">
        <h2>{faq.titulo}</h2>
        <div>
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
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="barra">
        <div className="wrap barra-in">
          <span className="logo">
            {negocio.nombre}
            <b>{negocio.apellido}</b>
          </span>
          <a
            className="boton solido chico"
            href={waLink(hero.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            Agendar cita
          </a>
        </div>
      </header>

      <section className="wrap hero">
        <div className="hero-texto">
          <p className="aviso">
            <i aria-hidden="true"></i>
            {hero.aviso}
          </p>
          <h1>{hero.titulo}</h1>
          <p className="hero-p">{hero.texto}</p>
          <ul className="puntos">
            {hero.puntos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <Cita />
      </section>

      <div className="banda">
        <img
          src={foto(hero.banda.id, 1800)}
          alt={hero.banda.alt}
          loading="lazy"
        />
      </div>

      <section className="confianza">
        <div className="wrap confianza-in">
          {confianza.map((c) => (
            <div key={c.label}>
              <p className="c-num">{c.num}</p>
              <p className="c-label">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Tratamientos />
      <Comparador />

      <section className="wrap equipo">
        <h2>{equipo.titulo}</h2>
        <ul>
          {equipo.lista.map((m) => (
            <li key={m.nombre}>
              <span className="m-n">{m.nombre}</span>
              <span className="m-a">{m.area}</span>
            </li>
          ))}
        </ul>
      </section>

      <Preguntas />

      <section className="cierre">
        <div className="wrap cierre-in">
          <div>
            <h2>{cierre.titulo}</h2>
            <p>{cierre.texto}</p>
          </div>
          <a
            className="boton oscuro"
            href={waLink(hero.mensajeWa)}
            target="_blank"
            rel="noopener"
          >
            {cierre.boton}
          </a>
        </div>
      </section>

      <footer className="wrap pie">
        <span>Chihuahua, México</span>
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
      </footer>
    </>
  );
}