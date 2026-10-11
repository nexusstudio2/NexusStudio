// Datos y textos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene reemplazarlas por las del café
// (idealmente descargadas a public/img/cafe/) cambiando foto().

export const foto = (id, ancho = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Café Raíz",
  texto: "Café de especialidad y panadería artesanal en Chihuahua.",
  whatsapp: "526143771797",
  wifi: "CafeRaiz2024",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const fotos = {
  portada: {
    id: "1650097364104-eef0e54af0da",
    alt: "Capuchino con un diseño de hoja en la espuma",
  },
  compartir: {
    id: "1511920170033-f8396924c348",
    alt: "Latte, café molido y granos de café vistos desde arriba",
  },
};

// Horario por día de la semana (0 domingo ... 6 sábado), en horas decimales.
export const horario = {
  semana: { abre: 7, cierra: 21, abreTxt: "7:00 AM", cierraTxt: "9:00 PM" },
  domingo: { abre: 8, cierra: 14, abreTxt: "8:00 AM", cierraTxt: "2:00 PM" },
};

export const horarioLineas = [
  ["Lun a Sáb", "7:00 AM a 9:00 PM"],
  ["Domingo", "8:00 AM a 2:00 PM"],
];

export const cierre = {
  frase: "El café que quieres tomarte dos veces.",
  boton: "Escribir por WhatsApp",
  mensajeWa: "Hola, vi el menú de Café Raíz y quiero preguntar algo",
};