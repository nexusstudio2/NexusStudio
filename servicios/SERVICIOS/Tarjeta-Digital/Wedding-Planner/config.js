// Datos y textos de la tarjeta. Fotos: Unsplash (licencia libre).
// Para entregar a una clienta, conviene reemplazarlas por sus eventos reales
// (idealmente descargadas a public/img/wedding-planner/) cambiando foto().

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Amara Duarte",
  rol: "Wedding & Event Planner · Chihuahua",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  foto: foto("1607861884586-c7cfaed16290", 1400),
  alt: "Pasillo de boda al aire libre con luces entre filas de sillas blancas",
  texto:
    "Coordino bodas y eventos para que tú disfrutes tu propia fiesta, no la organices desde adentro.",
  mensajeWa: "Hola Amara, me interesa platicar sobre mi evento",
};

export const paquetes = {
  titulo: "Tres formas de acompañarte",
  lista: [
    {
      nombre: "Coordinación del día",
      precio: "Desde $6,500",
      texto:
        "Para parejas que ya lo planearon todo y solo necesitan que alguien más lo ejecute el día del evento.",
      incluye: [
        "Cronograma final del día",
        "Coordinación con todos los proveedores",
        "Supervisión de montaje y desmontaje",
        "Resolución de imprevistos en sitio",
      ],
    },
    {
      nombre: "Planeación parcial",
      precio: "Desde $12,000",
      texto:
        "Para quienes ya avanzaron con lo esencial pero necesitan ayuda con los últimos meses antes del evento.",
      incluye: [
        "Apoyo en proveedores faltantes",
        "Cronograma de los últimos 3 meses",
        "Todo lo incluido en Coordinación del día",
      ],
    },
    {
      nombre: "Planeación integral",
      precio: "Desde $22,000",
      texto:
        "Acompañamiento desde cero: presupuesto, proveedores, diseño y logística completa del evento.",
      incluye: [
        "Diseño conceptual del evento",
        "Negociación con proveedores",
        "Seguimiento de presupuesto",
        "Todo lo incluido en los paquetes anteriores",
      ],
    },
  ],
};

export const tiempo = {
  titulo: "Línea de tiempo, mes a mes",
  intro: "Cómo se planea una boda",
  pasos: [
    {
      cuando: "12",
      unidad: "meses antes",
      texto: "Definir presupuesto, estilo del evento y reservar el lugar.",
    },
    {
      cuando: "6",
      unidad: "meses antes",
      texto: "Contratar proveedores clave: fotografía, banquete, música.",
    },
    {
      cuando: "3",
      unidad: "meses antes",
      texto: "Enviar invitaciones y confirmar detalles de decoración.",
    },
    {
      cuando: "1",
      unidad: "mes antes",
      texto: "Ensayo, confirmaciones finales y cronograma del gran día.",
    },
    {
      cuando: "Día",
      unidad: "del evento",
      texto: "Coordinación total en sitio. Tú solo disfrutas.",
    },
  ],
};

export const eventos = {
  titulo: "Algunos eventos recientes",
  lista: [
    {
      nombre: "Boda de Valeria y Diego",
      estilo: "Otoño rústico · Jardín Botánico",
      foto: "1712068534065-f56c36e21759",
      alt: "Montaje de boda en medio de un parque",
      paleta: ["#c77b5a", "#8a9a6f", "#f0e6d2"],
    },
    {
      nombre: "XV de Camila",
      estilo: "Jardín pastel · Salón Los Cerezos",
      foto: "1727081203667-4792c134061a",
      alt: "Ceremonia en un parque con flores blancas y rosas",
      paleta: ["#e8c4c4", "#a8b89a", "#d9b276"],
    },
    {
      nombre: "Boda destino · Karla y Santiago",
      estilo: "Mediterráneo · Terraza Vista Real",
      foto: "1670529776180-60e4132ab90c",
      alt: "Arco floral blanco sobre un pasillo con sillas doradas",
      paleta: ["#7c93a3", "#f5f1ea", "#c77b5a"],
    },
    {
      nombre: "Aniversario, familia Flores",
      estilo: "Elegante nocturno · Hacienda San Isidro",
      foto: "1737682599438-319b61711b5f",
      alt: "Mesa larga con un candil colgando del techo",
      paleta: ["#2e2a24", "#c9cee0", "#b8916b"],
    },
  ],
};

export const testimonios = {
  titulo: "Parejas que ya vivieron el día",
  lista: [
    {
      texto:
        "Amara pensó en detalles que ni sabíamos que existían. El día se sintió sin esfuerzo.",
      autor: "Valeria y Diego",
    },
    {
      texto:
        "Llegamos a nuestra propia boda sin una sola preocupación en la cabeza.",
      autor: "Camila, XV años de su hija",
    },
    {
      texto:
        "Coordinó proveedores de tres ciudades distintas sin un solo problema.",
      autor: "Karla y Santiago",
    },
  ],
};

export const cierre = {
  titulo: "¿Ya tienes fecha?",
  texto:
    "Cuéntame de tu evento y platicamos qué paquete se ajusta mejor a lo que necesitas.",
  mensajeWa: "Hola Amara, quiero platicar sobre mi evento",
};

export const guardar = {
  boton: "Descargar contacto",
  archivo: "Amara-Duarte.vcf",
  vcard: [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Duarte;Amara;;;",
    "FN:Amara Duarte",
    "TITLE:Wedding & Event Planner",
    "TEL;TYPE=CELL:+526143771797",
    "EMAIL:contacto@amaraduarte.mx",
    "ADR:;;Chihuahua;Chihuahua;;;México",
    "URL:https://wa.me/526143771797",
    "END:VCARD",
  ].join("\n"),
};