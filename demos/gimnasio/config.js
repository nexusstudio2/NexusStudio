// Datos y textos de la página. Las fotos son las mismas de la versión anterior
// (Unsplash, licencia libre). Para entregar a un cliente, conviene
// reemplazarlas por las del gimnasio (idealmente en public/img/titan/).

export const foto = (id, ancho = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=80`;

export const negocio = {
  nombre: "Titan",
  apellido: "Fitness",
  direccion: "Av. Energía 120, Ciudad Deportiva",
  horario: "Lun a Sáb 6:00 a 22:00",
};

export const nav = [
  { href: "#planes", texto: "Planes" },
  { href: "#entrenadores", texto: "Entrenadores" },
  { href: "#instalaciones", texto: "Instalaciones" },
  { href: "#horarios", texto: "Horarios" },
];

export const hero = {
  foto: "1571019613454-1cb2f99b2d8b",
  alt: "Persona entrenando con pesas en un gimnasio",
  etiqueta: "Abre tu mejor versión",
  titulo: "Titan Fitness",
  texto:
    "Entrena fuerte, mejora tu energía y consigue resultados reales con planes flexibles, coaches expertos y un ambiente que te empuja a avanzar.",
};

export const planes = {
  etiqueta: "Membresías",
  titulo: "Planes para empezar hoy",
  lista: [
    {
      nombre: "Básico",
      precio: "$499",
      incluye: ["Acceso general", "Área de pesas", "Casilleros"],
    },
    {
      nombre: "Pro",
      precio: "$799",
      destacado: true,
      incluye: ["Acceso ilimitado", "Clases grupales", "Evaluación mensual"],
    },
    {
      nombre: "Élite",
      precio: "$1,199",
      incluye: ["Coach personal", "Plan nutricional", "Acceso VIP"],
    },
  ],
};

export const entrenadores = {
  etiqueta: "Equipo Titan",
  titulo: "Entrenadores que te guían",
  lista: [
    {
      nombre: "Valeria Cruz",
      area: "Fuerza y técnica",
      foto: "1594381898411-846e7d193883",
      alt: "Entrenadora de fuerza",
    },
    {
      nombre: "Marco León",
      area: "Funcional y HIIT",
      foto: "1582109249233-17955f4e46f2",
      alt: "Entrenador funcional",
    },
    {
      nombre: "Andrea Solís",
      area: "Movilidad y cardio",
      foto: "1518611012118-696072aa579a",
      alt: "Entrenadora de movilidad",
    },
  ],
};

export const instalaciones = {
  etiqueta: "Espacios",
  titulo: "Instalaciones de alto rendimiento",
  fotos: [
    {
      id: "1534438327276-14e5300c3a48",
      alt: "Área de gimnasio con equipo moderno",
      grande: true,
    },
    {
      id: "1593079831268-3381b0db4a77",
      alt: "Área de entrenamiento funcional",
    },
    { id: "1576678927484-cc907957088c", alt: "Pesas y mancuernas" },
  ],
};

export const testimonios = {
  etiqueta: "Resultados",
  titulo: "Historias de miembros",
  lista: [
    {
      texto:
        "En tres meses subí mi fuerza y me siento con más energía todos los días.",
      autor: "Daniela M.",
    },
    {
      texto:
        "Los coaches corrigen mi técnica y el ambiente te motiva desde que entras.",
      autor: "Carlos R.",
    },
    {
      texto: "El plan Pro fue perfecto para crear rutina sin sentirme perdido.",
      autor: "Paola G.",
    },
  ],
};

// dia = día de la semana (0 domingo ... 6 sábado). "Libre" no cuenta como clase.
export const horario = {
  etiqueta: "Clases",
  titulo: "Horarios semanales",
  dias: [
    {
      dia: 1,
      nombre: "Lunes",
      clases: [
        ["06:00", "HIIT"],
        ["12:00", "Funcional"],
        ["19:00", "Fuerza"],
      ],
    },
    {
      dia: 3,
      nombre: "Miércoles",
      clases: [
        ["06:00", "Fuerza"],
        ["12:00", "Movilidad"],
        ["19:00", "Box fit"],
      ],
    },
    {
      dia: 5,
      nombre: "Viernes",
      clases: [
        ["06:00", "HIIT"],
        ["12:00", "Funcional"],
        ["19:00", "Fuerza"],
      ],
    },
    {
      dia: 6,
      nombre: "Sábado",
      clases: [
        ["06:00", "Cardio"],
        ["12:00", "Libre"],
        ["19:00", "Bootcamp"],
      ],
    },
  ],
};

export const cta = {
  etiqueta: "Oferta de apertura",
  titulo: "Inscríbete y paga 0 cuota inicial",
  texto:
    "Deja tus datos y nuestro equipo te contactará para activar tu membresía Titan.",
  boton: "Quiero entrenar",
  opciones: ["Básico", "Pro", "Élite", "Aún no sé"],
};