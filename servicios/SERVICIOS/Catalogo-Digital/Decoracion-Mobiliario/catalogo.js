// Inventario de renta. Para cambiar precios o piezas, solo se edita este archivo.
// foto: id de Unsplash (la parte después de "photo-"). Algunas son aproximadas
// y se pueden cambiar por fotos reales del negocio.

export const categorias = [
  {
    id: "mobiliario",
    nombre: "Mobiliario",
    items: [
      {
        id: "mesas",
        nombre: "Mesas redondas para banquete",
        detalle: "Para 8 a 10 invitados, incluye mantelería básica.",
        precio: "Desde $150",
        unidad: "por mesa",
        foto: "1641996250159-9d2bbfb483fa",
        alt: "Mesas de recepción con manteles blancos",
      },
      {
        id: "sillas",
        nombre: "Sillas Tiffany doradas",
        detalle: "El acabado más solicitado para bodas y XV años.",
        precio: "Desde $25",
        unidad: "por silla",
        foto: "1653821355226-6def361cc7ab",
        alt: "Mesa de banquete lista para una cena formal",
      },
      {
        id: "lounge",
        nombre: "Sillones lounge para recepción",
        detalle: "Sets de sala para zona de fotos o coctel.",
        precio: "Desde $600",
        unidad: "por set",
        foto: "1595436790404-ae5494edcf00",
        alt: "Sillón de madera con asiento blanco",
      },
    ],
  },
  {
    id: "carpas",
    nombre: "Carpas",
    items: [
      {
        id: "pagoda",
        nombre: "Carpa tipo pagoda 6×6 m",
        detalle: "Cubre hasta 60 personas sentadas. Incluye armado.",
        precio: "Desde $3,500",
        unidad: "MXN",
        foto: "1772127822525-7eda37383b9f",
        alt: "Recepción al aire libre con dosel y mesas",
      },
      {
        id: "transparente",
        nombre: "Carpa transparente para jardín",
        detalle: "Ideal para bodas al aire libre, resistente a viento.",
        precio: "Desde $5,000",
        unidad: "MXN",
        foto: "1772127822514-682aeffcc0d3",
        alt: "Recepción de boda al aire libre con mesas decoradas",
      },
    ],
  },
  {
    id: "iluminacion",
    nombre: "Iluminación",
    items: [
      {
        id: "bistro",
        nombre: "Luces cálidas tipo bistro",
        detalle: "25 metros de guirnalda, ideal para carpas y jardines.",
        precio: "Desde $800",
        unidad: "MXN",
        foto: "1560494667-2fd47f82c9db",
        alt: "Focos encendidos en el techo",
      },
      {
        id: "candelabros",
        nombre: "Candelabros de piso",
        detalle: "Para pasillo de ceremonia o entrada al salón.",
        precio: "Desde $450",
        unidad: "por par",
        foto: "1729237261091-bae8eba0c60c",
        alt: "Espacio lleno de velas encendidas",
      },
    ],
  },
  {
    id: "decoracion",
    nombre: "Decoración",
    items: [
      {
        id: "arco",
        nombre: "Arco floral para ceremonia",
        detalle: "Base de madera con follaje y flores a elegir.",
        precio: "Desde $2,200",
        unidad: "MXN",
        foto: "1747115276395-607f2e5dc269",
        alt: "Arreglo floral en un montaje de evento al aire libre",
      },
      {
        id: "centros",
        nombre: "Centros de mesa rústicos con velas",
        detalle: "Madera, flor seca y velas led. Se cotizan por mesa.",
        precio: "Desde $180",
        unidad: "c/u",
        foto: "1653821355692-03666613499f",
        alt: "Mesa con florero y velas",
      },
      {
        id: "backdrop",
        nombre: "Backdrop de madera y flores secas",
        detalle: "Fondo para mesa de honor o zona de fotos.",
        precio: "Desde $1,800",
        unidad: "MXN",
        foto: "1653821355168-144695e5c0e6",
        alt: "Florero con flores moradas sobre una mesa",
      },
    ],
  },
];