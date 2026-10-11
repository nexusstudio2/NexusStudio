// Datos y textos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene reemplazarlas por las del bar
// (idealmente descargadas a public/img/bar/) cambiando foto().

export const foto = (id, ancho = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  linea1: "La",
  linea2: "Guarida",
  texto: "Cocteles de autor y buena música, en el centro de Chihuahua.",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const fotos = {
  barra: {
    id: "1633151676350-31e5e8fd3409",
    alt: "Persona sirviendo una bebida en un vaso",
  },
  mesa: {
    id: "1681641093028-cf29d0fc9f2a",
    alt: "Grupo de personas sentadas en una mesa con bebidas",
  },
};

// Happy hour: lunes a viernes, de 6:00 PM a 8:00 PM (hora del navegador).
export const happy = {
  dias: [1, 2, 3, 4, 5],
  desde: 18,
  hasta: 20,
  activo: "Happy hour activo ahora, 2x1 hasta las 8:00 PM",
  inactivo: "Happy hour de lunes a viernes, 6:00 a 8:00 PM",
};

// dia = día de la semana (0 domingo ... 6 sábado)
export const agenda = [
  { dia: 3, nombre: "Miércoles", evento: "Trivia Night" },
  { dia: 4, nombre: "Jueves", evento: "Noche de jazz en vivo" },
  { dia: 5, nombre: "Viernes", evento: "DJ set, Sonidos Nocturnos" },
  { dia: 6, nombre: "Sábado", evento: "Karaoke" },
];

export const cierre = {
  titulo: "¿Nos vemos hoy?",
  texto: "Reserva tu mesa o pregúntanos por eventos privados.",
  reservar: "Reservar mesa",
  privado: "Evento privado",
  mensajeReservar: "Hola La Guarida, quiero reservar una mesa",
  mensajePrivado: "Hola La Guarida, quiero preguntar por un evento privado",
};