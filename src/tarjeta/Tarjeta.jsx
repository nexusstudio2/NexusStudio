import logo from './logo-nexus.png'

const WHATSAPP = '526143771797'
const MENSAJE = 'Hola, vi tu tarjeta de Nexus Studio. Me interesa: '
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAJE)}`
const PORTAFOLIO_URL = 'https://nexus-studio-vert.vercel.app/?utm_source=tarjeta&utm_medium=qr'
const INSTAGRAM_URL = 'https://instagram.com/nexusstudio.mx'

export default function Tarjeta() {
  return (
    <main className="tarjeta">
      <img className="tarjeta-logo" src={logo} alt="Nexus Studio" width="96" />
      <div>
        <h1>Cómo quieres empezar</h1>
        <p className="tarjeta-lead">Elige una opción. Las dos son sin compromiso.</p>
      </div>
      <div className="tarjeta-opciones">
        <a className="tarjeta-btn tarjeta-btn--primario" href={WHATSAPP_URL}>
          <strong>Escribirme por WhatsApp</strong>
          <span>Cuéntame qué necesitas</span>
        </a>
        <a className="tarjeta-btn" href={PORTAFOLIO_URL}>
          <strong>Ver el portafolio</strong>
          <span>Ejemplos de páginas, invitaciones y menús</span>
        </a>
      </div>
      <p className="tarjeta-pie">
        Nexus Studio, Chihuahua. Instagram <a href={INSTAGRAM_URL}>@nexusstudio.mx</a>
      </p>
    </main>
  )
}
