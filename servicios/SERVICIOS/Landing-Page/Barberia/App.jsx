import { useState } from "react";
import {
  foto,
  negocio,
  waLink,
  fotos,
  precios,
  estilos,
  reserva,
  equipo,
  testimonios,
  cierre,
} from "./config.js";

const num = (i) => String(i + 1).padStart(2, "0");

export default function App() {
  const [servicio, setServicio] = useState(null);
  const [dia, setDia] = useState(null);
  const [hora, setHora] = useState(null);

  const listo = dia && hora;

  const mensaje =
    "Hola Cuervo Barbería, quiero reservar una cita\n\n" +
    (servicio ? `Servicio: ${servicio}\n` : "") +
    `Día: ${dia}\n` +
    `Hora: ${hora}`;

  const cinta = [...testimonios, ...testimonios];

  return (
    <>
      <div className="poste" aria-hidden="true"></div>

      <header className="hero">
        <div className="wrap hero-in">
          <div className="hero-texto">
            <p className="etiqueta">{negocio.etiqueta}</p>
            <h1>
              <span className="nombre">{negocio.nombre}</span>
              <span className="apellido">{negocio.apellido}</span>
            </h1>
            <p className="hero-p">{negocio.texto}</p>
            <div className="acciones">
              <a className="boton laton" href="#reserva">
                Reservar cita
              </a>
              <a className="enlace" href="#precios">
                Ver precios
              </a>
            </div>
          </div>
          <img
            className="hero-foto"
            src={foto(fotos.hero.id, 1000)}
            alt={fotos.hero.alt}
          />
        </div>
      </header>

      <section className="wrap precios" id="precios">
        <h2>Menú de precios</h2>
        <p className="ayuda">Toca un servicio para incluirlo en tu reserva.</p>
        <ul>
          {precios.map((p) => (
            <li key={p.nombre}>
              <button
                type="button"
                className={servicio === p.nombre ? "on" : ""}
                aria-pressed={servicio === p.nombre}
                onClick={() =>
                  setServicio(servicio === p.nombre ? null : p.nombre)
                }
              >
                <span className="p-nombre">{p.nombre}</span>
                <span className="p-precio">${p.precio}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="estilos">
        <div className="wrap estilos-in">
          <div>
            <h2>Estilos disponibles</h2>
            <ol>
              {estilos.map((e, i) => (
                <li key={e}>
                  <span className="n">{num(i)}</span>
                  <span className="e">{e}</span>
                </li>
              ))}
            </ol>
          </div>
          <img
            src={foto(fotos.estilos.id, 900)}
            alt={fotos.estilos.alt}
            loading="lazy"
          />
        </div>
      </section>

      <section className="reserva" id="reserva">
        <div className="wrap">
          <h2>Elige tu horario</h2>

          <div className="grupo">
            <p className="grupo-t">Día</p>
            <div className="opciones">
              {reserva.dias.map((d) => (
                <button
                  key={d.largo}
                  type="button"
                  className={dia === d.largo ? "on" : ""}
                  aria-pressed={dia === d.largo}
                  onClick={() => setDia(d.largo)}
                >
                  {d.corto}
                </button>
              ))}
            </div>
          </div>

          <div className="grupo">
            <p className="grupo-t">Horario</p>
            <div className="opciones">
              {reserva.horas.map((h) => (
                <button
                  key={h}
                  type="button"
                  className={hora === h ? "on" : ""}
                  aria-pressed={hora === h}
                  onClick={() => setHora(h)}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          <p className="resumen" aria-live="polite">
            {listo ? (
              <>
                {servicio ? <strong>{servicio}</strong> : "Tu cita"}, el{" "}
                <strong>{dia}</strong> a las <strong>{hora}</strong>
              </>
            ) : (
              "Elige un día y un horario para continuar"
            )}
          </p>

          {listo ? (
            <a
              className="boton laton"
              href={waLink(mensaje)}
              target="_blank"
              rel="noopener"
            >
              Reservar por WhatsApp
            </a>
          ) : (
            <button type="button" className="boton laton" disabled>
              Reservar por WhatsApp
            </button>
          )}
        </div>
      </section>

      <section className="wrap equipo">
        <h2>Nuestros barberos</h2>
        <ul>
          {equipo.map((b) => (
            <li key={b.nombre}>
              <span className="b-nombre">{b.nombre}</span>
              <span className="b-oficio">{b.oficio}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="cinta" aria-label="Opiniones de clientes">
        <div className="cinta-pista">
          {cinta.map((t, i) => (
            <p key={i}>
              <b>5/5</b> “{t.texto}”, {t.autor}
            </p>
          ))}
        </div>
      </div>

      <section className="cierre">
        <img
          className="cierre-foto"
          src={foto(fotos.cierre.id, 1600)}
          alt={fotos.cierre.alt}
          loading="lazy"
        />
        <div className="cierre-vel"></div>
        <div className="wrap cierre-in">
          <h2>{cierre.titulo}</h2>
          <p>{cierre.texto}</p>
          <a
            className="boton laton"
            href={waLink(cierre.mensajeWa)}
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