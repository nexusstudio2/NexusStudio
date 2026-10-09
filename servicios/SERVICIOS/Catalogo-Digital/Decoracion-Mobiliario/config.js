// Textos y fotos de la página. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene descargarlas a public/img/encinar/
// y cambiar foto() para que apunte ahí.

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Encinar Eventos",
  whatsapp: "526143771797",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  linea1: "Montamos tu evento.",
  linea2: "Tú solo llegas.",
  texto:
    "Rentamos mesas, sillas, carpas, iluminación y decoración para bodas y XV años en Chihuahua. Llevamos, montamos y recogemos.",
  foto: foto("1772127822525-7eda37383b9f", 1800),
  alt: "Recepción al aire libre con dosel y mesas",
  mensajeWa:
    "Hola, vi el catálogo de Encinar Eventos y me interesa cotizar",
};

export const proceso = {
  titulo: "Cómo trabajamos",
  pasos: [
    {
      cuando: "Semanas antes",
      titulo: "Cotización",
      texto: "Nos cuentas la fecha, el lugar y cuántos invitados esperas.",
    },
    {
      cuando: "Antes de confirmar",
      titulo: "Visita técnica",
      texto: "Si el evento lo requiere, revisamos el espacio.",
    },
    {
      cuando: "Horas antes del evento",
      titulo: "Montaje",
      texto:
        "Llegamos horas antes y armamos todo para que solo llegues a disfrutar.",
    },
    {
      cuando: "Al terminar",
      titulo: "Recolección",
      texto: "Nosotros recogemos. Tú no te preocupas por nada.",
    },
  ],
};

export const eventos = {
  titulo: "Montajes de este año",
  lista: [
    {
      nombre: "Boda de Renata e Iván",
      lugar: "Rancho Los Encinos",
      foto: "1759124650320-d629a3d73d9f",
      alt: "Mesas con arreglos florales de colores",
    },
    {
      nombre: "XV años de Camila",
      lugar: "Salón Los Cerezos",
      foto: "1653821355736-0c2598d0a63e",
      alt: "Mesa con velas y flores para una fiesta",
    },
    {
      nombre: "Aniversario de los Flores",
      lugar: "Terraza Vista Real",
      foto: "1653821355226-6def361cc7ab",
      alt: "Mesa puesta para una cena formal",
    },
    {
      nombre: "Boda de Fernanda y Bruno",
      lugar: "Hacienda San Isidro",
      foto: "1599757628564-db10729b97f1",
      alt: "Mesa con mantel blanco",
    },
    {
      nombre: "Boda de Karla y Santiago",
      lugar: "Jardín Botánico",
      foto: "1625076019815-b1a5f7e5ef1e",
      alt: "Copas de vino sobre una mesa",
    },
  ],
};

export const testimonios = {
  titulo: "Lo que dicen quienes ya montaron con nosotros",
  lista: [
    {
      texto:
        "Llegaron tres horas antes y para cuando llegaron los invitados ya no quedaba ni una caja a la vista.",
      autor: "Renata, boda en Rancho Los Encinos",
    },
    {
      texto:
        "Nos ayudaron a decidir entre dos carpas distintas según el clima del día. Se nota que conocen el oficio.",
      autor: "Familia Flores, aniversario",
    },
    {
      texto: "El backdrop de madera quedó mejor de lo que imaginamos en las fotos.",
      autor: "Karla, XV años de su hija",
    },
    {
      texto:
        "Coordinaron todo directo con el salón, nosotros solo tuvimos que aprobar el diseño.",
      autor: "Fernanda y Bruno, boda",
    },
  ],
};

export const cotizacion = {
  titulo: "Arma tu cotización",
  texto:
    "Suma las piezas que te interesan y cuéntanos la fecha, el lugar y el número de invitados. Te respondemos con una propuesta a tu medida.",
  vacio:
    "Aún no agregas piezas. Elígelas arriba en el catálogo, o escríbenos directo y te ayudamos a decidir.",
  campo: "Fecha, lugar e invitados",
  boton: "Enviar por WhatsApp",
  mensajeBase: "Hola, me interesa cotizar decoración y mobiliario para mi evento",
};