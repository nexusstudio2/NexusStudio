import { useEffect, useState } from "react";
import {
  foto,
  negocio,
  nav,
  hero,
  planes,
  entrenadores,
  instalaciones,
  testimonios,
  horario,
  cta,
} from "./config.js";

const DIAS = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

function proximaClase(ahora) {
  const horaActual = ahora.getHours() * 60 + ahora.getMinutes();
  for (let salto = 0; salto <= 7; salto++) {
    const dia = (ahora.getDay() + salto) % 7;
    const entrada = horario.dias.find((d) => d.dia === dia);
    if (!entrada) continue;
    for (const [hora, clase] of entrada.clases) {
      if (clase === "Libre") continue;
      const [h, m] = hora.split(":").map(Number);
      if (salto === 0 && h * 60 + m <= horaActual) continue;
      const cuando =
        salto === 0
          ? "Hoy"
          : salto === 1
            ? "Mañana"
            : DIAS[dia][0].toUpperCase() + DIAS[dia].slice(1);
      return { clase, cuando, hora };
    }
  }
  return null;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [ahora, setAhora] = useState(() => new Date());
  const [plan, setPlan] = useState("");
  const [f, setF] = useState({ nombre: "", telefono: "" });
  const [enviado, setEnviado] = useState("");

  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const proxima = proximaClase(ahora);
  const hoy = ahora.getDay();

  const enviar = (e) => {
    e.preventDefault();
    setEnviado(
      `Gracias, ${f.nombre.trim()}. Te contactaremos para activar tu membresía` +
        (plan && plan !== "Aún no sé" ? ` ${plan}.` : "."),
    );
    setF({ nombre: "", telefono: "" });
    setPlan("");
  };

  return (
    <>
      <header className="cab">
        <div className="wrap cab-in">
          <a className="logo" href="#inicio" onClick={() => setMenu(false)}>
            {negocio.nombre}
            <b>{negocio.apellido}</b>
          </a>

          <nav className={"nav" + (menu ? " abierto" : "")}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenu(false)}>
                {n.texto}
              </a>
            ))}
            <a className="nav-cta" href="#cta" onClick={() => setMenu(false)}>
              Unirme
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
        <section className="hero">
          <img className="hero-foto" src={foto(hero.foto, 1800)} alt={hero.alt} />
          <div className="hero-vel"></div>
          <div className="wrap hero-in">
            <div className="hero-texto">
              <p className="etiqueta">{hero.etiqueta}</p>
              <h1>
                {negocio.nombre} <span>{negocio.apellido}</span>
              </h1>
              <p className="hero-p">{hero.texto}</p>
              <div className="acciones">
                <a className="boton naranja" href="#planes">
                  Ver membresías
                </a>
                <a className="boton borde" href="#horarios">
                  Ver horarios
                </a>
              </div>
            </div>

            {proxima && (
              <aside className="proxima" aria-live="polite">
                <p className="p-t">Próxima clase</p>
                <p className="p-clase">{proxima.clase}</p>
                <p className="p-cuando">
                  {proxima.cuando}, {proxima.hora}
                </p>
              </aside>
            )}
          </div>
        </section>

        <section className="bloque" id="planes">
          <div className="wrap">
            <div className="titulo">
              <p>{planes.etiqueta}</p>
              <h2>{planes.titulo}</h2>
            </div>
            <div className="planes">
              {planes.lista.map((p) => (
                <article
                  className={"plan" + (p.destacado ? " destacado" : "")}
                  key={p.nombre}
                >
                  {p.destacado && <span className="plan-sello">Más elegido</span>}
                  <h3>{p.nombre}</h3>
                  <p className="plan-precio">
                    {p.precio}
                    <small>/mes</small>
                  </p>
                  <ul>
                    {p.incluye.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <a
                    className="plan-boton"
                    href="#cta"
                    onClick={() => {
                      setPlan(p.nombre);
                      setEnviado("");
                    }}
                  >
                    Elegir plan
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bloque oscuro" id="entrenadores">
          <div className="wrap">
            <div className="titulo">
              <p>{entrenadores.etiqueta}</p>
              <h2>{entrenadores.titulo}</h2>
            </div>
            <div className="coaches">
              {entrenadores.lista.map((e) => (
                <article key={e.nombre}>
                  <img src={foto(e.foto, 900)} alt={e.alt} loading="lazy" />
                  <div>
                    <h3>{e.nombre}</h3>
                    <p>{e.area}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bloque" id="instalaciones">
          <div className="wrap">
            <div className="titulo">
              <p>{instalaciones.etiqueta}</p>
              <h2>{instalaciones.titulo}</h2>
            </div>
            <div className="espacios">
              {instalaciones.fotos.map((x) => (
                <figure className={x.grande ? "grande" : ""} key={x.id}>
                  <img src={foto(x.id, 1200)} alt={x.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bloque oscuro" id="testimonios">
          <div className="wrap">
            <div className="titulo">
              <p>{testimonios.etiqueta}</p>
              <h2>{testimonios.titulo}</h2>
            </div>
            <div className="voces">
              {testimonios.lista.map((t, i) => (
                <blockquote key={t.autor}>
                  <span className="v-n">{String(i + 1).padStart(2, "0")}</span>
                  <p>{t.texto}</p>
                  <cite>{t.autor}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bloque" id="horarios">
          <div className="wrap">
            <div className="titulo">
              <p>{horario.etiqueta}</p>
              <h2>{horario.titulo}</h2>
            </div>
            <div className="dias">
              {horario.dias.map((d) => (
                <div className={"dia" + (d.dia === hoy ? " hoy" : "")} key={d.nombre}>
                  <h3>
                    {d.nombre}
                    {d.dia === hoy && <em>Hoy</em>}
                  </h3>
                  <ul>
                    {d.clases.map(([hora, clase]) => (
                      <li key={hora}>
                        <span>{hora}</span>
                        <strong>{clase}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="cta">
          <div className="wrap cta-in">
            <div>
              <p className="cta-et">{cta.etiqueta}</p>
              <h2>{cta.titulo}</h2>
              <p className="cta-p">{cta.texto}</p>
            </div>

            <form onSubmit={enviar}>
              <label>
                Nombre
                <input
                  value={f.nombre}
                  onChange={(e) => setF({ ...f, nombre: e.target.value })}
                  required
                />
              </label>
              <label>
                Teléfono
                <input
                  type="tel"
                  value={f.telefono}
                  onChange={(e) => setF({ ...f, telefono: e.target.value })}
                  required
                />
              </label>
              <fieldset>
                <legend>Plan de interés</legend>
                <div className="fichas">
                  {cta.opciones.map((o) => (
                    <button
                      key={o}
                      type="button"
                      className={plan === o ? "on" : ""}
                      aria-pressed={plan === o}
                      onClick={() => setPlan(plan === o ? "" : o)}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button type="submit" className="enviar">
                {cta.boton}
              </button>
              {enviado && (
                <p className="gracias" role="status">
                  {enviado}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="wrap pie-in">
          <p className="logo">
            {negocio.nombre}
            <b>{negocio.apellido}</b>
          </p>
          <p>
            {negocio.direccion} | {negocio.horario}
          </p>
        </div>
      </footer>
    </>
  );
}