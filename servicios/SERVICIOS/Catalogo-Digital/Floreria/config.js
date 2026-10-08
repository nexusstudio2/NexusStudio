// Textos y fotos de la página. Para otro cliente, se cambia este archivo.
// Fotos: Unsplash (licencia libre). Para entregar a un cliente, conviene
// descargarlas a public/img/floreria/ y cambiar foto() para que apunte ahí.

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Musgo & Flor",
  whatsapp: "526143771797",
  telefono: "614 377 1797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  linea1: "Flores que llegan el",
  linea2: "mismo día.",
  texto:
    "Ramos y arreglos para cada ocasión en Chihuahua. Armamos con flor fresca de temporada y entregamos a domicilio o en tienda.",
  foto: foto("1616369939022-b6e3e7a82295", 1100),
  pie: "Ramo de temporada, armado en taller",
  mensajeWa: "Hola, vi el catálogo de Musgo & Flor y me interesa un arreglo",
};

export const datos = [
  ["Entrega", "Mismo día en Chihuahua"],
  ["Pedidos", "Por WhatsApp, 9 a 19 h"],
  ["Desde", "$220 MXN"],
];

export const pasos = [
  {
    titulo: "Nos cuentas la ocasión",
    texto: "Por WhatsApp, con el presupuesto y los colores que te gustan.",
  },
  {
    titulo: "Armamos el arreglo",
    texto: "Con flor fresca del día, según lo que haya de temporada.",
  },
  {
    titulo: "Te lo entregamos",
    texto: "A domicilio en Chihuahua o listo para recoger en tienda.",
  },
];

export const historia = {
  foto: foto("1685293649290-7e20f1dcd4b8", 1000),
  cita: "A veces lo más importante no es el arreglo, es la hora exacta en que toca la puerta.",
  texto:
    "Una clienta en El Paso nos pidió un ramo para su mamá en Chihuahua, por su aniversario de bodas número 25. Coordinamos la entrega para que llegara justo antes del desayuno.",
};

export const testimonios = [
  {
    texto: "Llegó fresquísimo, justo a la hora que quedamos. Ni un pétalo fuera de lugar.",
    autor: "Lucía",
    nota: "Aniversario",
  },
  {
    texto: "Les dije el presupuesto y armaron algo mucho más bonito de lo que imaginé.",
    autor: "Andrés",
    nota: "Cumpleaños de su mamá",
  },
  {
    texto: "Coordinaron la entrega en otra ciudad sin ningún problema.",
    autor: "Fernanda",
    nota: "Boda de su hermana",
  },
];

export const cierre = {
  titulo: "¿Para cuándo lo necesitas?",
  texto: "Escríbenos la ocasión y el presupuesto. Te respondemos con una propuesta el mismo día.",
  mensajeWa: "Hola, me interesa pedir un arreglo floral",
};