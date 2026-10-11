// Para cambiar precios o productos, solo se edita este archivo.
// favorito: true muestra el sello "Favorito" junto al nombre.

export const categorias = [
  {
    id: "calientes",
    nombre: "Bebidas calientes",
    items: [
      {
        nombre: "Americano",
        detalle: "Espresso doble con agua caliente.",
        precio: 38,
      },
      {
        nombre: "Capuchino",
        detalle: "Espresso, leche vaporizada y espuma cremosa.",
        precio: 48,
      },
      {
        nombre: "Latte de vainilla",
        detalle: "Espresso, leche y jarabe de vainilla natural.",
        precio: 55,
        favorito: true,
      },
      {
        nombre: "Chocolate caliente",
        detalle: "Chocolate semi amargo derretido con leche entera.",
        precio: 50,
      },
    ],
  },
  {
    id: "frias",
    nombre: "Bebidas frías",
    items: [
      {
        nombre: "Cold brew",
        detalle: "Extracción en frío por 18 horas, servido con hielo.",
        precio: 52,
      },
      {
        nombre: "Frappé de caramelo",
        detalle: "Café frío licuado con caramelo y crema batida.",
        precio: 58,
      },
      {
        nombre: "Limonada de romero",
        detalle: "Limonada natural infusionada con romero fresco.",
        precio: 45,
      },
    ],
  },
  {
    id: "panaderia",
    nombre: "Panadería",
    items: [
      {
        nombre: "Concha de café",
        detalle: "Horneada todas las mañanas, ideal para acompañar tu café.",
        precio: 28,
      },
      {
        nombre: "Croissant de almendra",
        detalle: "Relleno de crema de almendra, hojaldrado en casa.",
        precio: 42,
      },
      {
        nombre: "Pan de elote",
        detalle: "Receta casera, húmedo y ligeramente dulce.",
        precio: 35,
      },
    ],
  },
  {
    id: "postres",
    nombre: "Postres",
    items: [
      {
        nombre: "Pastel de zanahoria",
        detalle: "Con betún de queso crema, rebanada individual.",
        precio: 55,
      },
      {
        nombre: "Cheesecake de maracuyá",
        detalle: "Base de galleta, relleno cremoso con toque tropical.",
        precio: 60,
      },
    ],
  },
  {
    id: "compartir",
    nombre: "Para compartir",
    items: [
      {
        nombre: "Tabla de quesos",
        detalle: "Selección de quesos locales, nueces y mermelada artesanal.",
        precio: 180,
      },
      {
        nombre: "Hummus con pan artesanal",
        detalle: "Hummus casero con pan horneado del día.",
        precio: 95,
      },
    ],
  },
];