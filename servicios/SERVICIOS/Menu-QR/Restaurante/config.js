// Datos y textos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene reemplazarlas por las del restaurante
// (idealmente descargadas a public/img/restaurante/) cambiando foto().

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  linea1: "Fonda",
  linea2: "El Nogal",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  texto:
    "Comida mexicana tradicional, como la de casa, en el centro de Chihuahua.",
  foto: foto("1599974579688-8dbdd335c77f", 1400),
  alt: "Tres tacos de res con cebolla y cilantro",
};

// Índice = día de la semana (0 domingo ... 6 sábado)
export const dias = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export const especiales = [
  { nombre: "Pozole rojo", precio: 140 },
  { nombre: "Mole poblano", precio: 180 },
  { nombre: "Enchiladas suizas", precio: 150 },
  { nombre: "Chiles rellenos", precio: 160 },
  { nombre: "Costillas BBQ", precio: 210 },
  { nombre: "Chiles en nogada", precio: 220 },
  { nombre: "Parrillada familiar", precio: 390 },
];

export const reservar = {
  titulo: "Reserva tu mesa",
  texto:
    "Déjanos tus datos y te confirmamos la disponibilidad por WhatsApp.",
  personas: ["2", "3", "4", "5", "6+"],
  horas: ["1:00 PM", "2:00 PM", "3:00 PM", "7:00 PM", "8:00 PM"],
  boton: "Reservar mesa",
};

export const info = {
  horario: "1:00 PM a 10:00 PM, todos los días",
  direccion: "Av. Universidad 1420, Chihuahua",
  mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Universidad+1420+Chihuahua",
};