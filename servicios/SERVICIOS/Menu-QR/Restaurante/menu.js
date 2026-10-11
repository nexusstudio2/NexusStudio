// Para cambiar precios o platillos, solo se edita este archivo.
// foto (opcional): id de Unsplash. Son fotos de referencia: conviene
// reemplazarlas por las del restaurante.

export const categorias = [
  {
    id: "entradas",
    nombre: "Entradas",
    foto: {
      id: "1711306722944-70b776bb4394",
      alt: "Mesa de madera con tacos y guacamole",
    },
    items: [
      {
        nombre: "Guacamole con totopos",
        detalle: "Preparado al momento en la mesa.",
        precio: 85,
      },
      {
        nombre: "Queso fundido",
        detalle: "Con chorizo y tortillas de harina hechas a mano.",
        precio: 95,
      },
      {
        nombre: "Sopa de tortilla",
        detalle: "Con aguacate, crema y queso panela.",
        precio: 75,
      },
    ],
  },
  {
    id: "fuertes",
    nombre: "Platos fuertes",
    items: [
      {
        nombre: "Chiles en nogada",
        detalle: "De temporada, receta tradicional poblana.",
        precio: 220,
      },
      {
        nombre: "Mole poblano",
        detalle: "Con pollo, arroz y tortillas de maíz.",
        precio: 180,
      },
      {
        nombre: "Costillas BBQ",
        detalle: "Costillas de cerdo bañadas en salsa BBQ casera.",
        precio: 210,
      },
      {
        nombre: "Enchiladas suizas",
        detalle: "Bañadas en salsa verde con crema y queso gratinado.",
        precio: 150,
      },
    ],
  },
  {
    id: "antojitos",
    nombre: "Antojitos",
    foto: {
      id: "1690874684451-92358e91b14c",
      alt: "Tres tacos en un plato con limones y cilantro",
    },
    items: [
      {
        nombre: "Tacos al pastor, orden",
        detalle: "Con piña, cebolla y cilantro.",
        precio: 95,
      },
      {
        nombre: "Quesadillas surtidas",
        detalle: "Flor de calabaza, champiñón y queso oaxaca.",
        precio: 85,
      },
      {
        nombre: "Sope trío",
        detalle: "Frijol, lechuga, crema y queso, con tu guiso a elegir.",
        precio: 80,
      },
    ],
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    foto: {
      id: "1615870216519-2f9fa575fa5c",
      alt: "Persona sosteniendo una taza de cerámica blanca",
    },
    items: [
      {
        nombre: "Agua de horchata",
        detalle: "Preparada en casa todos los días.",
        precio: 35,
      },
      {
        nombre: "Michelada",
        detalle: "Con cerveza clara y sal de gusano.",
        precio: 60,
      },
      {
        nombre: "Café de olla",
        detalle: "Con canela y piloncillo, servido caliente.",
        precio: 30,
      },
    ],
  },
  {
    id: "postres",
    nombre: "Postres",
    items: [
      {
        nombre: "Flan napolitano",
        detalle: "Receta de la casa, con caramelo.",
        precio: 55,
      },
      {
        nombre: "Pastel de tres leches",
        detalle: "Rebanada individual, con canela.",
        precio: 60,
      },
    ],
  },
];