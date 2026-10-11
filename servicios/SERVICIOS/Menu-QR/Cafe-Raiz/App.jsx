import { useEffect, useState } from "react";
import { categorias } from "./menu.js";
import {
  foto,
  negocio,
  waLink,
  fotos,
  horario,
  horarioLineas,
  cierre,
} from "./config.js";

function estadoAhora(ahora) {
  const dia = ahora.getDay();
  const hora = ahora.getHours() + ahora.getMinutes() / 60;
  const h = dia === 0 ? horario.domingo : horario.semana;
  const abierto = hora >= h.abre && hora < h.cierra;
  return {
    abierto,
    texto: abierto
      ? `Abierto ahora, cierra a las ${h.cierraTxt}`
      : `Cerrado, abrimos a las ${h.abreTxt}`,
  };
}

export default function App() {
  const [ahora, setAhora] = useState(() => new Date());
  const [activa, setActiva] = useState(categorias[0].id);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

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

  const estado = estadoAhora(ahora);
  const fecha = ahora.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const hora = ahora.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const copiarWifi = async () => {
    try {
      await navigator.clipboard.writeText(negocio.wifi);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (e) {
      // Sin permiso de portapapeles: la clave sigue visible para copiarla a mano.
    }
  };

  return (
    <>
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
        </div>
      </nav>

      <div className="mesa">
        <div className="ticket">
          <div className="zig zig-sup" aria-hidden="true"></div>

          <header className="cab">
            <h1>{negocio.nombre}</h1>
            <p>{negocio.texto}</p>
            <p className={"estado " + (estado.abierto ? "abierto" : "cerrado")}>
              {estado.texto}
            </p>
            <div className="fecha">
              <span>{fecha}</span>
              <span>{hora}</span>
            </div>
          </header>

          <figure className="termica">
            <img
              src={foto(fotos.portada.id, 800)}
              alt={fotos.portada.alt}
            />
          </figure>

          <main>
            {categorias.map((c) => (
              <section className="cat" id={c.id} key={c.id}>
                <h2>{c.nombre}</h2>
                <ul>
                  {c.items.map((it) => (
                    <li key={it.nombre}>
                      <div className="linea">
                        <span className="nombre">
                          {it.nombre}
                          {it.favorito && <em className="sello">Favorito</em>}
                        </span>
                        <span className="puntos" aria-hidden="true"></span>
                        <span className="precio">${it.precio}</span>
                      </div>
                      <p>{it.detalle}</p>
                    </li>
                  ))}
                </ul>
                {c.id === "postres" && (
                  <figure className="termica corta">
                    <img
                      src={foto(fotos.compartir.id, 800)}
                      alt={fotos.compartir.alt}
                      loading="lazy"
                    />
                  </figure>
                )}
              </section>
            ))}
          </main>

          <section className="datos">
            <h2>Datos</h2>
            <div className="linea">
              <span className="nombre">WiFi</span>
              <span className="puntos" aria-hidden="true"></span>
              <span className="precio">{negocio.wifi}</span>
            </div>
            <button type="button" className="copiar" onClick={copiarWifi}>
              {copiado ? "Copiada" : "Copiar clave"}
            </button>

            {horarioLineas.map(([dia, horas]) => (
              <div className="linea h" key={dia}>
                <span className="nombre">{dia}</span>
                <span className="puntos" aria-hidden="true"></span>
                <span>{horas}</span>
              </div>
            ))}
          </section>

          <section className="gracias">
            <p className="frase">{cierre.frase}</p>
            <a
              className="boton"
              href={waLink(cierre.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              {cierre.boton}
            </a>
            <div className="barras" aria-hidden="true"></div>
          </section>

          <div className="zig zig-inf" aria-hidden="true"></div>
        </div>

        <a className="volver" href={negocio.volverA}>
          Volver a Nexus Studio
        </a>
      </div>
    </>
  );
}