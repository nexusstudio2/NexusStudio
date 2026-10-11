import { useEffect, useState } from "react";
import { cocteles, etiquetas } from "./menu.js";
import {
  foto,
  negocio,
  waLink,
  fotos,
  happy,
  agenda,
  cierre,
} from "./config.js";

const nombreTag = Object.fromEntries(etiquetas.map((t) => [t.id, t.nombre]));

function esHappyHour(ahora) {
  const hora = ahora.getHours() + ahora.getMinutes() / 60;
  return (
    happy.dias.includes(ahora.getDay()) && hora >= happy.desde && hora < happy.hasta
  );
}

function Banda({ imagen }) {
  return (
    <div className="duo">
      <img src={foto(imagen.id, 1600)} alt={imagen.alt} loading="lazy" />
    </div>
  );
}

export default function App() {
  const [ahora, setAhora] = useState(() => new Date());
  const [sel, setSel] = useState([]);
  const [elegido, setElegido] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const activo = esHappyHour(ahora);
  const hoy = ahora.getDay();

  const visibles = cocteles.filter(
    (c) => sel.length === 0 || c.tags.some((t) => sel.includes(t)),
  );

  const alternar = (id) => {
    setElegido(null);
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const elegirPorMi = () => {
    if (visibles.length === 0) return;
    const pick = visibles[Math.floor(Math.random() * visibles.length)];
    setElegido(pick.id);
    requestAnimationFrame(() => {
      document
        .getElementById(pick.id)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  return (
    <>
      <header className="barra">
        <div className="wrap barra-in">
          <span className="marca">La Guarida</span>
          <a href="#reservar">Reservar</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <h1>
            <span className="l1">{negocio.linea1}</span>
            <span className="l2">{negocio.linea2}</span>
          </h1>
          <p>{negocio.texto}</p>
        </div>
      </section>

      <div className={"happy " + (activo ? "on" : "off")} role="status">
        <div className="wrap">
          {activo && <span className="punto" aria-hidden="true"></span>}
          {activo ? happy.activo : happy.inactivo}
        </div>
      </div>

      <Banda imagen={fotos.barra} />

      <section className="wrap carta" id="carta">
        <h2>Cocteles</h2>
        <p className="sub">De la casa</p>

        <div className="filtros">
          <span className="filtros-t">Filtra por sabor</span>
          <div className="filtros-fila">
            {etiquetas.map((t) => (
              <button
                key={t.id}
                type="button"
                className={sel.includes(t.id) ? "on" : ""}
                aria-pressed={sel.includes(t.id)}
                onClick={() => alternar(t.id)}
              >
                {t.nombre}
              </button>
            ))}
            {sel.length > 0 && (
              <button
                type="button"
                className="limpiar"
                onClick={() => {
                  setSel([]);
                  setElegido(null);
                }}
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        <button type="button" className="elige" onClick={elegirPorMi}>
          ¿No sabes qué pedir? Elige por mí
        </button>

        <ol className="lista">
          {visibles.map((c) => (
            <li
              key={c.id}
              id={c.id}
              className={elegido === c.id ? "elegido" : ""}
            >
              <span className="num">
                {String(cocteles.indexOf(c) + 1).padStart(2, "0")}
              </span>
              <div className="cuerpo">
                <h3>{c.nombre}</h3>
                <p>{c.detalle}</p>
                <span className="tags">
                  {c.tags.map((t) => nombreTag[t]).join(" / ")}
                </span>
              </div>
              <span className="precio">${c.precio}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="agenda">
        <div className="wrap">
          <h2>Esta semana</h2>
          <ul>
            {agenda.map((a) => (
              <li key={a.dia} className={a.dia === hoy ? "hoy" : ""}>
                <span className="dia">{a.nombre}</span>
                <span className="evento">{a.evento}</span>
                {a.dia === hoy && <span className="marca-hoy">Hoy</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Banda imagen={fotos.mesa} />

      <section className="cierre" id="reservar">
        <div className="wrap">
          <h2>{cierre.titulo}</h2>
          <p>{cierre.texto}</p>
          <div className="acciones">
            <a
              className="boton solido"
              href={waLink(cierre.mensajeReservar)}
              target="_blank"
              rel="noopener"
            >
              {cierre.reservar}
            </a>
            <a
              className="boton borde"
              href={waLink(cierre.mensajePrivado)}
              target="_blank"
              rel="noopener"
            >
              {cierre.privado}
            </a>
          </div>
        </div>
      </section>

      <footer className="wrap pie">
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
      </footer>
    </>
  );
}