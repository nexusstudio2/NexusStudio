import {
  foto,
  negocio,
  waLink,
  hero,
  intro,
  servicios,
  estilo,
  portafolio,
  testimonios,
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

const num = (i) => String(i + 1).padStart(2, "0");

export default function App() {
  return (
    <>
      <header className="portada">
        <img className="portada-foto" src={hero.foto} alt={hero.alt} />
        <div className="portada-vel"></div>
        <div className="portada-in">
          <p className="meta">
            {negocio.rol} · {negocio.ciudad}
          </p>
          <h1>{negocio.nombre}</h1>
          <nav className="acciones" aria-label="Contacto">
            <a
              className="accion principal"
              href={waLink(hero.mensajeWa)}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
            <a
              className="accion"
              href={negocio.instagram}
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
            <a className="accion" href={`mailto:${negocio.correo}`}>
              Correo
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="wrap intro">
          <p>{intro}</p>
        </section>

        <section className="wrap servicios">
          <h2>{servicios.titulo}</h2>
          <ol>
            {servicios.lista.map((s, i) => (
              <li key={s.nombre}>
                <span className="meta">{num(i)}</span>
                <div>
                  <h3>{s.nombre}</h3>
                  <p>{s.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="estilo">
          <div className="wrap">
            <h2>{estilo.titulo}</h2>
          </div>
          <div className="estilo-tira">
            {estilo.puntos.map((p, i) => (
              <article key={p.titulo}>
                <img src={foto(p.foto, 700)} alt={p.alt} loading="lazy" />
                <span className="meta">{num(i)}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hoja">
          <div className="wrap">
            <h2>{portafolio.titulo}</h2>
            <div className="hoja-rejilla">
              {portafolio.fotos.map((f, i) => (
                <figure key={f.id}>
                  <img src={foto(f.id, 600)} alt={f.alt} loading="lazy" />
                  <figcaption>
                    <span className="meta">{num(i)}</span>
                    <strong>{f.pareja}</strong>
                    <em>{f.lugar}</em>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap voces">
          <h2>{testimonios.titulo}</h2>
          {testimonios.lista.map((t) => (
            <blockquote key={t.autor}>
              <p>{t.texto}</p>
              <cite>
                {t.autor}
                {t.nota ? `, ${t.nota}` : ""}
              </cite>
            </blockquote>
          ))}
        </section>

        <section className="wrap guardar">
          <div>
            <h3>{guardar.titulo}</h3>
            <p>{guardar.texto}</p>
          </div>
          <button type="button" onClick={descargarVcard}>
            {guardar.boton}
          </button>
        </section>
      </main>

      <footer className="wrap pie">
        <span>{negocio.ciudad}</span>
        <a href={negocio.volverA}>Volver a Nexus Studio</a>
      </footer>
    </>
  );
}