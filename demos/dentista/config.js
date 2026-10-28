// Datos y textos de la página. Fotos: Unsplash (licencia libre). Las de
// antes/después y equipo son las mismas de la versión anterior. Para entregar
// a una clínica, conviene reemplazarlas por las propias (public/img/sonrisa/).

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=80`;

export const negocio = {
  nombre: "Clínica Dental Sonrisa",
  telefono: "(55) 1234 5678",
  horario: "Lun a Sáb, 9:00 a 19:00",
  direccion: "Av. Sonrisa 120, Ciudad de México",
};

export const nav = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#resultados", texto: "Antes y después" },
  { href: "#equipo", texto: "Equipo" },
  { href: "#faq", texto: "Preguntas" },
];

export const hero = {
  foto: "1489278353717-f64c6ee8a4d2",
  alt: "Mujer sonriendo de cerca",
  etiqueta: "Atención dental moderna y cercana",
  titulo: "Sonrisas sanas con trato claro, amable y profesional",
  texto:
    "Agenda tu valoración en Clínica Dental Sonrisa. Te explicamos cada paso, resolvemos tus dudas y cuidamos tu salud dental con calma.",
  confianza: ["+8 años de experiencia", "Pagos flexibles", "Emergencias dentales"],
};

export const servicios = {
  etiqueta: "Servicios",
  titulo: "Tratamientos para cuidar tu sonrisa",
  texto:
    "Opciones claras para pacientes nuevos, familias y personas que buscan mejorar su salud dental.",
  lista: [
    {
      nombre: "Limpieza dental",
      texto:
        "Eliminación de placa, revisión general y recomendaciones para prevenir molestias.",
    },
    {
      nombre: "Ortodoncia",
      texto: "Valoración para brackets o alineadores con seguimiento personalizado.",
    },
    {
      nombre: "Blanqueamiento",
      texto:
        "Mejora el tono de tus dientes con un tratamiento seguro y supervisado.",
    },
    {
      nombre: "Implantes",
      texto:
        "Soluciones para recuperar piezas dentales con evaluación previa completa.",
    },
  ],
  opcionExtra: "Emergencia dental",
};

export const resultados = {
  etiqueta: "Antes y después",
  titulo: "Resultados visibles, explicados con honestidad",
  texto:
    "Cada caso es diferente. En consulta te mostramos posibilidades reales según tu salud dental, presupuesto y objetivo.",
  antes: {
    id: "1606811842243-9c4b8d868a57",
    alt: "Revisión dental antes del tratamiento",
  },
  despues: {
    id: "1606811971618-4486d14f3f99",
    alt: "Sonrisa después del tratamiento dental",
  },
  nota: "Imágenes de ejemplo. Aquí van las fotos reales de tus pacientes.",
};

export const equipo = {
  etiqueta: "Equipo",
  titulo: "Personas que te escuchan primero",
  texto:
    "Nuestro equipo combina experiencia, explicaciones sencillas y un ambiente tranquilo.",
  lista: [
    {
      nombre: "Dra. Laura Méndez",
      area: "Odontología general",
      foto: "1559839734-2b71ea197ec2",
    },
    {
      nombre: "Dr. Carlos Rivera",
      area: "Ortodoncia",
      foto: "1622253692010-333f2da6031d",
    },
    {
      nombre: "Ana Torres",
      area: "Atención al paciente",
      foto: "1589296778879-1a6f9529f4d3",
    },
  ],
};

export const testimonios = {
  etiqueta: "Testimonios",
  titulo: "Pacientes que ya confiaron en nosotros",
  lista: [
    {
      texto:
        "Me explicaron todo sin prisas. La limpieza fue muy tranquila y salí con plan claro.",
      autor: "Mariana G.",
    },
    {
      texto:
        "Tenía miedo de ir al dentista, pero el trato fue amable desde la recepción.",
      autor: "Jorge L.",
    },
    {
      texto: "Agendé por WhatsApp y me atendieron rápido. Muy buena experiencia.",
      autor: "Paola R.",
    },
  ],
};

export const faq = {
  etiqueta: "Preguntas frecuentes",
  titulo: "Lo que suelen preguntar antes de venir",
  lista: [
    {
      p: "¿La primera valoración tiene costo?",
      r: "La valoración inicial tiene costo accesible e incluye revisión y explicación del plan sugerido.",
    },
    {
      p: "¿Atienden emergencias dentales?",
      r: "Sí. Puedes escribirnos por WhatsApp para revisar disponibilidad el mismo día.",
    },
    {
      p: "¿Aceptan pagos con tarjeta?",
      r: "Aceptamos efectivo, tarjeta y opciones de pago por tratamiento según el caso.",
    },
  ],
};

export const contacto = {
  etiqueta: "Contacto",
  titulo: "Agenda tu cita hoy",
  texto:
    "Completa el formulario y te contactaremos para confirmar horario. También puedes escribirnos por WhatsApp.",
  gracias:
    "Gracias. Recibimos tu solicitud y te contactaremos para confirmar tu cita.",
};

export const cierre = {
  etiqueta: "Tu sonrisa puede empezar aquí",
  titulo: "Reserva una valoración y recibe un plan dental claro.",
  boton: "Agendar ahora",
};