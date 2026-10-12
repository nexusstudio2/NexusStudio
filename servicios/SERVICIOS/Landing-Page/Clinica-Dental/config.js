// Datos y textos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a una clínica, conviene reemplazarlas por las propias
// (idealmente descargadas a public/img/dental/) cambiando foto().

export const foto = (id, ancho = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Dental",
  apellido: "Norte",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  aviso: "Citas disponibles esta semana",
  titulo: "Cuidado dental integral, cerca de ti",
  texto:
    "Limpieza, ortodoncia, implantes y urgencias dentales en Chihuahua, con equipo certificado y atención personalizada.",
  puntos: [
    "Atención de urgencias el mismo día",
    "Planes de pago para tratamientos largos",
    "Aceptamos la mayoría de seguros dentales",
  ],
  mensajeWa: "Hola Dental Norte, quiero agendar una cita",
  banda: {
    id: "1629909613654-28e377c37b09",
    alt: "Consultorio dental moderno con sillón y equipo",
  },
};

export const confianza = [
  { num: "15", label: "años de experiencia" },
  { num: "+8,000", label: "pacientes atendidos" },
  { num: "Seguros", label: "Aceptamos la mayoría de seguros dentales" },
];

export const servicios = [
  {
    corto: "Limpieza dental",
    nombre: "Limpieza dental",
    texto: "Profilaxis completa con revisión general.",
    precio: "Desde $450 MXN",
    foto: "1606811971618-4486d14f3f99",
    alt: "Revisión dental con espejo e instrumento",
  },
  {
    corto: "Blanqueamiento",
    nombre: "Blanqueamiento",
    texto: "Blanqueamiento profesional en consultorio.",
    precio: "Desde $1,800 MXN",
    foto: "1677026010083-78ec7f1b84ed",
    alt: "Primer plano de una sonrisa con dientes blancos",
  },
  {
    corto: "Ortodoncia",
    nombre: "Ortodoncia",
    texto: "Brackets metálicos o estéticos, con planes de pago.",
    precio: "Desde $12,000 MXN",
    foto: "1564420228450-d9a5bc8d6565",
    alt: "Manos sosteniendo alineadores dentales transparentes",
  },
  {
    corto: "Implantes",
    nombre: "Implantes dentales",
    texto: "Implante de titanio con corona incluida.",
    precio: "Desde $8,500 MXN",
    foto: "1593022356769-11f762e25ed9",
    alt: "Modelo de implante dental con dientes",
  },
  {
    corto: "Urgencia dental",
    nombre: "Urgencias dentales",
    texto: "Atención el mismo día para dolor o emergencias.",
    precio: "Desde $600 MXN",
    foto: "1588776814546-daab30f310ce",
    alt: "Dos dentistas con equipo de protección realizando un procedimiento",
  },
];

export const comparador = {
  titulo: "Desliza para ver la diferencia",
  foto: "1677026010083-78ec7f1b84ed",
  alt: "Sonrisa con dientes blancos",
  nota: "Imagen de ejemplo. Aquí van las fotos reales de tus pacientes.",
};

export const equipo = {
  titulo: "Quién te va a atender",
  lista: [
    { nombre: "Dr. Emilio Rangel", area: "Odontología general" },
    { nombre: "Dra. Paulina Solís", area: "Ortodoncia" },
    { nombre: "Dr. Iván Márquez", area: "Implantología" },
  ],
};

export const faq = {
  titulo: "Antes de agendar",
  lista: [
    {
      p: "¿Aceptan seguros dentales?",
      r: "Trabajamos con la mayoría de las aseguradoras dentales en México. Escríbenos con el nombre de tu aseguradora para confirmar cobertura antes de tu cita.",
    },
    {
      p: "¿Manejan urgencias el mismo día?",
      r: "Sí, reservamos espacios diarios para urgencias. Llama o escribe por WhatsApp y te damos el primer horario disponible.",
    },
    {
      p: "¿Tienen planes de pago para ortodoncia?",
      r: "Sí, dividimos el tratamiento en mensualidades sin intereses durante todo el proceso de ortodoncia.",
    },
    {
      p: "¿Cuánto dura una limpieza dental?",
      r: "Entre 30 y 45 minutos, incluyendo revisión general y recomendaciones de cuidado.",
    },
  ],
};

export const cierre = {
  titulo: "Tu sonrisa no debería esperar",
  texto: "Agenda tu cita hoy y te confirmamos el mismo día por WhatsApp.",
  boton: "Agendar por WhatsApp",
};