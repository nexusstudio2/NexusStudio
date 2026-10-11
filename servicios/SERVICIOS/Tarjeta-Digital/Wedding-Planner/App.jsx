import { useEffect, useState } from "react";
import {
  foto,
  negocio,
  waLink,
  hero,
  paquetes,
  tiempo,
  eventos,
  testimonios,
  cierre,
  guardar,
} from "./config.js";

function descargarVcard() {
  const blob = new Blob([guardar.vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = guardar.archivo;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(url);
}

function Paquetes() {
  const [abierto, setAbierto] = useState(0);

  return (
    <section className="wrap paquetes" id="paquetes">
      <h2>{paquetes.titulo}</h2>
      <div className="acordeon">
        {paquetes.lista.map((p, i) => {
          const on = abierto === i;
          return (
            <div className={"paq" + (on ? " on" : "")} key={p.nombre}>
              <button
                type="button"
                className="paq-cab"
                aria-expanded={on}
                onClick={() => setAbierto(on ? -1 : i)}
              >
                <span className="paq-nombre">{p.nombre}</span>
                <span className="paq-precio">{p.precio} MXN</span>
                <span className="paq-signo" aria-hidden="true"></span>
              </button>
              <div className="paq-cuerpo">
                <div className="paq-interior">
                  <p>{p.texto}</p>
                  <ul>
                    {p.incluye.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Voces() {
  const [i, setI] = useState(0);
  const total = testimonios.lista.length;

  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % total), 5500);
    return () => clearTimeout(t);
  }, [i, total]);

  const actual = testimonios.lista[i];

  return (
    <section className="voces">
      <div className="wrap">
        <h2>{testimonios.titulo}</h2>
        <blockquote key={i}>
          <p>{actual.texto}</p>
          <cite>{actual.autor}</cite>
        </blockquote>
        <div className="puntos">
          {testimonios.lista.map((t, n) => (
            <button
              key={t.autor}
              type="button"
              className={n === i ? "on" : ""}
              aria-label={`Testimonio ${n + 1}`}
              onClick={() => setI(n)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="portada">
        <div className="portada-texto">
          <p className="rol">{negocio.rol}</p>
          <h1>{negocio.nombre}</h1>
          <p className="portada-p">{hero.texto}</p>
          <div className="acciones">
            <a
              className="boton solido"
              href={waLink(hero.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              Platiquemos por WhatsApp
            </a>
            <a className="boton borde" href="#paquetes">
              Ver paquetes
            </a>
          </div>
        </div>
        <img className="portada-foto" src={hero.foto} alt={hero.alt} />
      </header>

      <main>
        <Paquetes />

        <section className="tiempo">
          <div className="wrap">
            <p className="meta">{tiempo.intro}</p>
            <h2>{tiempo.titulo}</h2>
            <ol className="regla">
              {tiempo.pasos.map((p) => (
                <li key={p.cuando}>
                  <span className="cuando">{p.cuando}</span>
                  <span className="unidad">{p.unidad}</span>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="wrap eventos">
          <h2>{eventos.titulo}</h2>
          <div className="eventos-rejilla">
            {eventos.lista.map((e) => (
              <article key={e.nombre}>
                <img src={foto(e.foto, 800)} alt={e.alt} loading="lazy" />
                <div className="paleta" aria-hidden="true">
                  {e.paleta.map((c) => (
                    <span key={c} style={{ background: c }}></span>
                  ))}
                </div>
                <h3>{e.nombre}</h3>
                <p>{e.estilo}</p>
              </article>
            ))}
          </div>
        </section>

        <Voces />

        <section className="cierre">
          <div className="wrap cierre-in">
            <div>
              <h2>{cierre.titulo}</h2>
              <p>{cierre.texto}</p>
            </div>
            <div className="acciones">
              <a
                className="boton durazno"
                href={waLink(cierre.mensajeWa)}
                target="_blank"
                rel="noopener"
              >
                Escribir por WhatsApp
              </a>
              <button
                type="button"
                className="boton borde"
                onClick={descargarVcard}
              >
                {guardar.boton}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap pie">
        <span>Chihuahua, Chih.</span>
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
      </footer>
    </>
  );
}