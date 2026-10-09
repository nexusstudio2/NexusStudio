import {
  foto,
  negocio,
  waLink,
  hero,
  servicios,
  looks,
  trabajo,
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

export default function App() {
  return (
    <>
      <header className="portada">
        <img className="portada-foto" src={hero.foto} alt={hero.alt} />
        <div className="portada-panel">
          <p className="rol">{negocio.rol}</p>
          <h1>{negocio.nombre}</h1>
          <p className="portada-texto">{hero.texto}</p>
          <div className="acciones">
            <a
              className="boton claro"
              href={waLink(hero.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              Agendar por WhatsApp
            </a>
            <a className="boton borde" href="#trabajo">
              Ver trabajo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="precios">
          <div className="wrap">
            <h2>{servicios.titulo}</h2>
            <ul>
              {servicios.lista.map((s) => (
                <li key={s.nombre}>
                  <div className="precio">
                    <span className="monto">${s.precio}</span>
                    <span className="mxn">MXN</span>
                  </div>
                  <div className="precio-info">
                    <h3>{s.nombre}</h3>
                    <p>{s.texto}</p>
                  </div>
                  <a
                    className="agendar"
                    href={waLink(`Hola Renata, me interesa agendar: ${s.nombre}`)}
                    target="_blank"
                    rel="noopener"
                  >
                    Agendar
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap looks">
          <h2>{looks.titulo}</h2>
          <div className="looks-rejilla">
            {looks.lista.map((l) => (
              <figure key={l.nombre}>
                <img src={foto(l.foto, 700)} alt={l.alt} loading="lazy" />
                <figcaption>
                  <strong>{l.nombre}</strong>
                  <span>{l.texto}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="trabajo" id="trabajo">
          <div className="wrap">
            <h2>{trabajo.titulo}</h2>
          </div>
          <div className="trabajo-rejilla">
            {trabajo.fotos.map((f) => (
              <figure key={f.id}>
                <img src={foto(f.id, 600)} alt={f.alt} loading="lazy" />
                <figcaption>{f.pie}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="voces">
          <div className="wrap">
            <h2>{testimonios.titulo}</h2>
            <div className="voces-rejilla">
              {testimonios.lista.map((t) => (
                <blockquote key={t.autor}>
                  <p>{t.texto}</p>
                  <cite>{t.autor}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="cierre">
          <div className="wrap">
            <h2>{cierre.titulo}</h2>
            <p>{cierre.texto}</p>
            <div className="acciones">
              <a
                className="boton solido"
                href={waLink(cierre.mensajeWa)}
                target="_blank"
                rel="noopener"
              >
                Escribir por WhatsApp
              </a>
              <button
                type="button"
                className="boton borde-osc"
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