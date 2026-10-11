// Para cambiar precios o cocteles, solo se edita este archivo.
// tags: dulce, amargo, citrico, ahumado, herbal

export const etiquetas = [
  { id: "dulce", nombre: "Dulce" },
  { id: "amargo", nombre: "Amargo" },
  { id: "citrico", nombre: "Cítrico" },
  { id: "ahumado", nombre: "Ahumado" },
  { id: "herbal", nombre: "Herbal" },
];

export const cocteles = [
  {
    id: "mezcal-sunset",
    nombre: "Mezcal Sunset",
    detalle: "Mezcal, toronja, chile y un toque de sal de gusano.",
    precio: 130,
    tags: ["ahumado", "citrico"],
  },
  {
    id: "paloma",
    nombre: "Paloma de la casa",
    detalle: "Tequila, toronja natural y sal de gusano en el borde.",
    precio: 110,
    tags: ["citrico", "dulce"],
  },
  {
    id: "negroni",
    nombre: "Negroni norteño",
    detalle: "Gin, Campari y vermut, con un toque de mezcal.",
    precio: 140,
    tags: ["amargo"],
  },
  {
    id: "margarita",
    nombre: "Margarita de jamaica",
    detalle: "Tequila, jamaica natural y un toque de agave.",
    precio: 120,
    tags: ["citrico", "dulce"],
  },
  {
    id: "old-fashioned",
    nombre: "Old fashioned ahumado",
    detalle: "Whisky, bitters de naranja y humo de mezquite.",
    precio: 150,
    tags: ["ahumado", "amargo"],
  },
  {
    id: "gin-tonic",
    nombre: "Gin tonic de romero",
    detalle: "Gin, tónica premium y romero fresco.",
    precio: 115,
    tags: ["herbal", "citrico"],
  },
  {
    id: "michelada",
    nombre: "Michelada de la Guarida",
    detalle: "Receta propia, con clamato y especias.",
    precio: 85,
    tags: ["amargo", "citrico"],
  },
  {
    id: "carajillo",
    nombre: "Carajillo",
    detalle: "Café espresso y licor 43, servido con hielo.",
    precio: 95,
    tags: ["dulce", "amargo"],
  },
];