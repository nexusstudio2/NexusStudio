// Datos y textos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene reemplazarlas por las de la barbería
// (idealmente descargadas a public/img/barberia/) cambiando foto().

export const foto = (id, ancho = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Cuervo",
  apellido: "Barbería",
  etiqueta: "Barbería tradicional · Chihuahua",
  texto:
    "Cortes clásicos, afeitado a navaja y buena plática. Sin cita previa forzosa, aunque tu horario favorito se llena rápido.",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const fotos = {
  hero: {
    id: "1672642150228-3fcd5826ec26",
    alt: "Barbero cortando el cabello a un cliente",
  },
  estilos: {
    id: "1621645582931-d1d3e6564943",
    alt: "Sillón de barbero negro y plateado",
  },
  cierre: {
    id: "1702865272115-5afdbae975af",
    alt: "Barbería con un sillón de cuero y un espejo",
  },
};

export const precios = [
  { nombre: "Corte clásico", precio: 150 },
  { nombre: "Corte y barba", precio: 220 },
  { nombre: "Afeitado tradicional", precio: 180 },
  { nombre: "Diseño de barba", precio: 150 },
  { nombre: "Corte niño", precio: 120 },
  { nombre: "Coloración", precio: 350 },
];

export const estilos = [
  "Fade clásico",
  "Pompadour",
  "Buzz cut",
  "Undercut",
  "Barba completa",
  "Crew cut",
];

export const reserva = {
  dias: [
    { corto: "Lun", largo: "Lunes" },
    { corto: "Mar", largo: "Martes" },
    { corto: "Mié", largo: "Miércoles" },
    { corto: "Jue", largo: "Jueves" },
    { corto: "Vie", largo: "Viernes" },
    { corto: "Sáb", largo: "Sábado" },
  ],
  horas: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
};

export const equipo = [
  { nombre: "Toño Cuervo", oficio: "Fades y diseños" },
  { nombre: "Beto Salas", oficio: "Barba y afeitado tradicional" },
  { nombre: "Iker Vega", oficio: "Cortes clásicos" },
];

export const testimonios = [
  { texto: "El mejor fade que me han hecho en Chihuahua", autor: "Raúl M." },
  { texto: "Toño se toma su tiempo, no batalla", autor: "Iván C." },
  { texto: "El afeitado tradicional es otro nivel", autor: "Diego F." },
  { texto: "Ambiente relajado, buena música", autor: "Sergio T." },
];

export const cierre = {
  titulo: "Se te está creciendo",
  texto: "Reserva tu corte antes de que se llenen los horarios de esta semana.",
  boton: "Reservar por WhatsApp",
  mensajeWa: "Hola Cuervo Barbería, quiero reservar una cita",
};