// Datos y textos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene reemplazarlas por las del gimnasio
// (idealmente descargadas a public/img/gimnasio/) cambiando foto().

export const foto = (id, ancho = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "NUDO.FITNESS",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const fotos = {
  hero: {
    id: "1680022550327-84d2a39c9328",
    alt: "Dos hombres de pie en un gimnasio",
  },
  boxeo: {
    id: "1615117972428-28de67cda58e",
    alt: "Hombre con guantes de boxeo negros y rojos",
  },
};

export const hero = {
  etiqueta: "Clase de prueba gratis",
  titulo: "Entrena distinto. Resultados reales.",
  texto:
    "Entrenamiento funcional, fuerza y boxeo en un box pensado para que no dejes de ir. Tres sedes en Chihuahua.",
  mensajeWa: "Hola Nudo Fitness, quiero agendar mi clase de prueba",
};

export const stats = [
  { num: "500+", label: "Miembros activos" },
  { num: "12", label: "Clases por semana" },
  { num: "3", label: "Sedes en Chihuahua" },
  { num: "8", label: "Años entrenando gente" },
];

export const programas = [
  {
    tag: "Funcional",
    nombre: "WOD funcional",
    texto: "Circuitos de alta intensidad que cambian todos los días.",
  },
  {
    tag: "Fuerza",
    nombre: "Fuerza y levantamiento",
    texto: "Progresión de fuerza con seguimiento personal de cargas.",
  },
  {
    tag: "Boxeo",
    nombre: "Boxeo funcional",
    texto: "Técnica de boxeo combinada con acondicionamiento físico.",
  },
  {
    tag: "Movilidad",
    nombre: "Yoga y movilidad",
    texto: "Recuperación activa para complementar tus otros entrenamientos.",
  },
];

// dias = días de la semana que cubre (0 domingo ... 6 sábado)
export const horarios = [
  {
    nombre: "Lun a Vie",
    dias: [1, 2, 3, 4, 5],
    manana: ["6:00 AM", "7:00 AM"],
    mediodia: ["1:00 PM"],
    tarde: ["6:00 PM", "7:00 PM", "8:00 PM"],
  },
  {
    nombre: "Sábado",
    dias: [6],
    manana: ["8:00 AM", "9:00 AM"],
    mediodia: [],
    tarde: [],
  },
  {
    nombre: "Domingo",
    dias: [0],
    cerrado: true,
  },
];

export const resultados = [
  {
    cifra: "−12 kg",
    detalle: "en 6 meses",
    texto:
      "Llevo 6 meses y bajé 12 kilos sin dejar de disfrutar el entrenamiento.",
    nombre: "Miriam R.",
  },
  {
    cifra: "+18 kg",
    detalle: "en press banca",
    texto:
      "Los coaches corrigen tu técnica todo el tiempo, no solo te dejan solo.",
    nombre: "David L.",
  },
  {
    cifra: "1 año",
    detalle: "de asistencia constante",
    texto: "El horario de las 6 AM me cambió la rutina completa del día.",
    nombre: "Paola G.",
  },
];

export const planes = [
  {
    nombre: "Mensual",
    precio: "$650",
    periodo: "MXN al mes",
    incluye: [
      "Acceso a todas las clases",
      "1 sede de tu elección",
      "Sin permanencia forzosa",
    ],
  },
  {
    nombre: "Trimestral",
    precio: "$1,700",
    periodo: "MXN cada 3 meses",
    destacado: true,
    incluye: [
      "Acceso a todas las sedes",
      "1 clase de nutrición incluida",
      "Congelamiento de 1 semana",
    ],
  },
  {
    nombre: "Anual",
    precio: "$6,000",
    periodo: "MXN al año",
    incluye: [
      "Acceso a todas las sedes",
      "2 clases de nutrición incluidas",
      "Congelamiento de hasta 3 semanas",
    ],
  },
];

export const contacto = {
  titulo: "Tu primera clase va por nosotros",
  texto:
    "Déjanos tus datos y te contactamos para agendar tu clase de prueba sin costo.",
  intereses: ["Funcional", "Fuerza", "Boxeo", "No estoy seguro/a"],
  boton: "Agendar mi clase de prueba",
};