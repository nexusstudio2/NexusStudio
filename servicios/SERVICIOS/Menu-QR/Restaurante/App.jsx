import { useEffect, useState } from "react";
import { categorias } from "./menu.js";
import {
  foto,
  negocio,
  waLink,
  hero,
  dias,
  especiales,
  reservar,
  info,
} from "./config.js";

function hoyISO() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

function Reservacion() {
  const [f, setF] = useState({
    nombre: "",
    telefono: "",
    personas: reservar.personas[0],
    fecha: "",
    hora: reservar.horas[0],
  });

  const cambia = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const msg =
      "Hola Fonda El Nogal, quiero hacer una reservación\n\n" +
      `Nombre: ${f.nombre}\n` +
      `Teléfono: ${f.telefono}\n` +
      `Personas: ${f.personas}\n` +
      `Fecha: ${f.fecha}\n` +
      `Hora: ${f.hora}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="reserva" id="reservar">
      <div className="wrap reserva-in">
        <div>
          <h2>{reservar.titulo}</h2>
          <p>{reservar.texto}</p>
        </div>
        <form onSubmit={enviar}>
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
          <div className="fila-2">
            <label>
              Personas
              <select name="personas" value={f.personas} onChange={cambia}>
                {reservar.personas.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label>
              Hora
              <select name="hora" value={f.hora} onChange={cambia}>
                {reservar.horas.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Fecha
            <input
              name="fecha"
              type="date"
              min={hoyISO()}
              value={f.fecha}
              onChange={cambia}
              required
            />
          </label>
          <button type="submit">{reservar.boton}</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const [activa, setActiva] = useState(categorias[0].id);
  const [hoy] = useState(() => new Date().getDay());
  const especial = especiales[hoy];

  useEffect(() => {
    const secciones = categorias
      .map((c) => document.getElementById(c.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setActiva(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    secciones.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header className="portada">
        <div className="wrap">
          <h1>
            {negocio.linea1}
            <br />
            {negocio.linea2}
          </h1>
          <p>{hero.texto}</p>
        </div>
        <img className="portada-foto" src={hero.foto} alt={hero.alt} />
      </header>

      <section className="especial">
        <div className="wrap especial-in">
          <div>
            <p className="especial-dia">Especial de hoy, {dias[hoy]}</p>
            <p className="especial-nombre">{especial.nombre}</p>
          </div>
          <p className="especial-precio">${especial.precio}</p>
        </div>
      </section>

      <nav className="nav" aria-label="Categorías del menú">
        <div className="nav-in">
          {categorias.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={activa === c.id ? "on" : ""}
            >
              {c.nombre}
            </a>
          ))}
          <a href="#reservar" className="nav-res">
            Reservar
          </a>
        </div>
      </nav>

      <main>
        {categorias.map((c) => (
          <section className="cat" id={c.id} key={c.id}>
            <div className="wrap cat-in">
              <div className="cat-lado">
                <h2>{c.nombre}</h2>
                {c.foto && (
                  <img
                    src={foto(c.foto.id, 800)}
                    alt={c.foto.alt}
                    loading="lazy"
                  />
                )}
              </div>
              <ul>
                {c.items.map((it) => (
                  <li key={it.nombre}>
                    <div>
                      <h3>{it.nombre}</h3>
                      <p>{it.detalle}</p>
                    </div>
                    <span className="precio">${it.precio}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>

      <Reservacion />

      <section className="wrap datos">
        <div>
          <p className="dato-t">Horario</p>
          <p>{info.horario}</p>
        </div>
        <div>
          <p className="dato-t">Ubicación</p>
          <p>{info.direccion}</p>
          <a href={info.mapa} target="_blank" rel="noopener">
            Cómo llegar
          </a>
        </div>
      </section>

      <footer className="wrap pie">
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
      </footer>
    </>
  );
}