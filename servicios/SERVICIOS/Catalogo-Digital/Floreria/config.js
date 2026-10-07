// Datos del negocio y textos de la página. Para otro cliente, se cambia este archivo.

export const negocio = {
  nombre: "Musgo & Flor",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  titulo: "Arreglos florales que dicen lo que las palabras no alcanzan",
  texto:
    "Ramos y arreglos para cada ocasión en Chihuahua, hechos el mismo día. Entrega a domicilio o recoge en tienda.",
  mensajeWa:
    "Hola, vi el catálogo de Musgo & Flor y me interesa un arreglo",
};

export const proceso = {
  etiqueta: "Cómo funciona",
  titulo: "De la idea al ramo en tus manos",
  pasos: [
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
  ],
};

export const historias = {
  etiqueta: "Historias detrás del ramo",
  titulo: "Algunos arreglos que nos han marcado",
  lista: [
    {
      emoji: "🌻",
      fondo: "linear-gradient(135deg, #f4d9b0, #e9b869)",
      titulo: "El ramo que cruzó la frontera",
      texto:
        "Una clienta en El Paso nos pidió un ramo de girasoles para su mamá en Chihuahua, por su aniversario de bodas número 25. Coordinamos la entrega para que llegara justo antes del desayuno. A veces lo más importante no es el arreglo, es la hora exacta en que toca la puerta.",
    },
    {
      emoji: "🌹",
      fondo: "linear-gradient(135deg, #f6d6d6, #e69a9a)",
      titulo: "Gracias, sin necesidad de decirlo",
      texto:
        'Un cliente nos pidió una caja de rosas para su compañera de trabajo, sin tarjeta ni mensaje. Solo dijo: "ella va a saber por qué es". A veces el ramo mismo es la carta.',
    },
    {
      emoji: "🤍",
      fondo: "linear-gradient(135deg, #eef0e8, #cdd3c2)",
      titulo: "Un arreglo para acompañar",
      texto:
        "Cuando una familia pierde a alguien, procuramos que el arreglo llegue con tiempo, sin prisas ni errores. Blanco, sencillo, y a tiempo — así preferimos hacerlo en esos días.",
    },
  ],
};

export const testimonios = {
  etiqueta: "Lo que nos dicen",
  titulo: "Clientes que ya recibieron su arreglo",
  lista: [
    {
      lado: "left",
      texto:
        "Llegó fresquísimo, justo a la hora que quedamos. Ni un pétalo fuera de lugar.",
      autor: "Lucía, aniversario",
    },
    {
      lado: "right",
      texto:
        "Les dije el presupuesto y armaron algo mucho más bonito de lo que imaginé.",
      autor: "Andrés, cumpleaños de su mamá",
    },
    {
      lado: "left",
      texto: "Coordinaron la entrega en otra ciudad sin ningún problema.",
      autor: "Fernanda, boda de su hermana",
    },
  ],
};

export const cierre = {
  titulo: "¿Buscas el arreglo correcto?",
  texto:
    "Cuéntanos la ocasión y el presupuesto, y te armamos algo a tu medida el mismo día.",
  mensajeWa: "Hola, me interesa pedir un arreglo floral",
};