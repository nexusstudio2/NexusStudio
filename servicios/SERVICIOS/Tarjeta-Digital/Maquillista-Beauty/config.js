// Datos y textos de la tarjeta. Fotos: Unsplash (licencia libre).
// Para entregar a una clienta, conviene reemplazarlas por su trabajo real
// (idealmente descargadas a public/img/maquillista/) cambiando foto().

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Renata Cobos",
  rol: "Maquillista de eventos · Chihuahua",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  foto: foto("1630084775816-7abb7383ded5", 1400),
  alt: "Mujer con labial rosa y camisa blanca",
  texto:
    "Maquillaje para novias, XV años e invitadas que quieren verse como ellas, pero en su mejor versión, no como alguien más.",
  mensajeWa:
    "Hola Renata, me interesa agendar maquillaje para mi evento",
};

export const servicios = {
  titulo: "Maquillaje para tu ocasión",
  lista: [
    {
      nombre: "Novia, prueba y día del evento",
      texto:
        "Incluye sesión de prueba semanas antes, para llegar sin sorpresas el día de la boda.",
      precio: "2,800",
    },
    {
      nombre: "XV años",
      texto: "Look adaptado al tema de la fiesta, duradero para toda la noche.",
      precio: "1,200",
    },
    {
      nombre: "Invitada",
      texto:
        "Maquillaje profesional para acompañar a alguien especial en su gran día.",
      precio: "650",
    },
    {
      nombre: "Sesión fotográfica o editorial",
      texto: "Para sesiones de compromiso, book personal o contenido de marca.",
      precio: "900",
    },
  ],
};

export const looks = {
  titulo: "Tres looks, tres ocasiones",
  lista: [
    {
      nombre: "Novia de día de campo",
      texto: "Look natural con pestañas de acento.",
      foto: "1613966802194-d46a163af70d",
      alt: "Mujer con labial rosa y maquillaje natural",
    },
    {
      nombre: "Para fotografía",
      texto: "Piel base auto-ajustable con contorno suave.",
      foto: "1709477542149-f4e0e21d590b",
      alt: "Mujer recibiendo maquillaje con una brocha",
    },
    {
      nombre: "XV años de noche",
      texto: "Ojo ahumado en tonos cobre.",
      foto: "1622336889416-8d790ad807d7",
      alt: "Primer plano de un lápiz de maquillaje en la mano",
    },
  ],
};

export const trabajo = {
  titulo: "Algunos looks del último mes",
  fotos: [
    {
      pie: "Boda de Ana · Look natural",
      id: "1709477542170-f11ee7d471a0",
      alt: "Mujer maquillándose el rostro",
    },
    {
      pie: "XV de Camila · Ojo ahumado",
      id: "1638959882708-9503b1cd595f",
      alt: "Mujer aplicándose maquillaje",
    },
    {
      pie: "Sesión editorial · Piel luminosa",
      id: "1596704017254-9b121068fb31",
      alt: "Persona sosteniendo una paleta de maquillaje y un lápiz",
    },
    {
      pie: "Boda de Fernanda · Look clásico",
      id: "1619749623747-c256b910961a",
      alt: "Mujer cubriéndose el rostro con una tela gris",
    },
    {
      pie: "Invitada · Boda de Karla",
      id: "1602910344008-22f323cc1817",
      alt: "Mujer con camisa azul y roja",
    },
    {
      pie: "XV de Renata · Look glam",
      id: "1583784561105-a674080f391e",
      alt: "Brochas de maquillaje de colores",
    },
  ],
};

export const testimonios = {
  titulo: "Novias e invitadas satisfechas",
  lista: [
    {
      texto:
        "Duró toda la boda, hasta las 2 de la mañana bailando y seguía intacto.",
      autor: "Ana, novia",
    },
    {
      texto: "Me hizo sentir yo misma, solo que más despierta. Nada exagerado.",
      autor: "Camila, XV años",
    },
    {
      texto: "La prueba antes de la boda me quitó todo el estrés del día.",
      autor: "Fernanda, novia",
    },
    {
      texto:
        "Llegó puntual con todo listo, muy profesional de principio a fin.",
      autor: "Karla, invitada",
    },
  ],
};

export const cierre = {
  titulo: "Agenda limitada en temporada de bodas",
  texto:
    "Los sábados se agendan con hasta 2 meses de anticipación. Escríbeme para apartar tu fecha.",
  mensajeWa: "Hola Renata, quiero apartar mi fecha",
};

export const guardar = {
  boton: "Descargar contacto",
  archivo: "Renata-Cobos.vcf",
  vcard: [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Cobos;Renata;;;",
    "FN:Renata Cobos",
    "TITLE:Maquillista de eventos",
    "TEL;TYPE=CELL:+526143771797",
    "EMAIL:contacto@renatacobos.mx",
    "ADR:;;Chihuahua;Chihuahua;;;México",
    "URL:https://wa.me/526143771797",
    "END:VCARD",
  ].join("\n"),
};