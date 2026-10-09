// Textos y fotos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene descargarlas a public/img/pasteleria/
// y cambiar foto() para que apunte ahí.

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Horno de Alba",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  titulo: "Pasteles hechos a mano, para los días que quieres recordar",
  texto:
    "Pasteles de boda, XV años y postres para eventos en Chihuahua. Cada pedido se hornea fresco, según tu fecha.",
  mensajeWa:
    "Hola, vi el catálogo de Horno de Alba y me interesa cotizar un pastel",
  foto: foto("1623428454614-abaf00244e52", 1200),
  altFoto: "Pastel blanco con fresas frescas y flores",
};

export const destacado = {
  etiqueta: "Pastel del mes",
  titulo: "Naked cake de frutos rojos",
  texto: "Tres pisos, relleno de queso crema. Rinde para 20 porciones.",
  precio: "$1,800",
  mensajeWa: "Hola, me interesa el Naked Cake de Frutos Rojos",
};

export const galeria = {
  titulo: "Entregas recientes",
  fotos: [
    {
      id: "1525257831700-183b9b8bf5c4",
      texto: "Boda de Karla y Santiago",
      alt: "Pastel blanco de cuatro pisos con flores",
      forma: "alto",
    },
    {
      id: "1535141192574-5d4897c12636",
      texto: "XV años de Camila",
      alt: "Pastel de vainilla de tres pisos con frutos rojos",
      forma: "cuadro",
    },
    {
      id: "1565661834013-d196ca46e14e",
      texto: "Boda de Ana y Rodrigo",
      alt: "Pastel de tres pisos con higos",
      forma: "alto",
    },
    {
      id: "1542007920-992d2c424d09",
      texto: "Cumpleaños de la familia Flores",
      alt: "Pastel blanco con flores encima",
      forma: "cuadro",
    },
  ],
};

export const ficha = {
  titulo: "Cómo pedir",
  foto: foto("1519654793190-2e8a4806f1f2", 1000),
  altFoto: "Pastel de tres capas con flores",
  filas: [
    [
      "Anticipación",
      "5 días para pasteles de boda o XV, 48 horas para postres individuales.",
    ],
    ["Anticipo", "50% al confirmar el pedido, el resto contra entrega."],
    [
      "Prueba de sabor",
      "Con cita previa, sin costo para pedidos de boda.",
    ],
    ["Entrega", "A domicilio en Chihuahua o recoger en punto de entrega."],
  ],
};

export const notas = {
  titulo: "Lo que nos han escrito",
  lista: [
    {
      texto:
        "El pastel llegó impecable y el sabor sorprendió hasta a mi suegra, que es difícil de convencer.",
      autor: "Karla, boda",
    },
    {
      texto:
        "Hicimos la prueba de sabor tres semanas antes. Eso nos quitó todo el nervio.",
      autor: "Familia Flores",
    },
    {
      texto: "Pedimos algo sin azúcar para mi papá y nadie notó la diferencia.",
      autor: "Ana, XV años",
    },
  ],
};

export const cierre = {
  titulo: "¿Ya tienes fecha?",
  texto:
    "Escríbenos con la fecha de tu evento y el número de invitados, y te armamos una propuesta.",
  boton: "Escribir por WhatsApp",
  mensajeWa: "Hola, me interesa cotizar un pastel para mi evento",
};