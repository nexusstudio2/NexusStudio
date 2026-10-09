// Datos y textos de la tarjeta. Fotos: Unsplash (licencia libre).
// Para entregar a un cliente, conviene descargarlas a public/img/fotografo/
// y cambiar foto() para que apunte ahí, o reemplazarlas por su trabajo real.

export const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=70`;

export const negocio = {
  nombre: "Bruno Aranda",
  rol: "Fotografía de bodas",
  ciudad: "Chihuahua, México",
  whatsapp: "526143771797",
  instagram: "https://instagram.com",
  correo: "contacto@brunoaranda.mx",
  volverA: "../../../index-servicios.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const hero = {
  foto: foto("1519741196428-6a2175fa2557", 1600),
  alt: "Novia con la mano sobre el pecho del novio",
  mensajeWa: "Hola Bruno, vi tu trabajo y quiero preguntar por disponibilidad",
};

export const intro =
  "Documento bodas desde hace nueve años, con un enfoque discreto y natural: lo que me interesa está entre los momentos planeados, no en ellos.";

export const servicios = {
  titulo: "En qué trabajo",
  lista: [
    {
      nombre: "Bodas",
      texto:
        "Cobertura completa del día, desde los preparativos hasta la última pieza de baile.",
    },
    {
      nombre: "Sesión de compromiso",
      texto:
        "Una sesión relajada, semanas antes de la boda, para soltarse frente a la cámara.",
    },
    {
      nombre: "XV años",
      texto:
        "El mismo cuidado documental, adaptado al ritmo de una celebración de XV.",
    },
    {
      nombre: "Familias",
      texto:
        "Retratos que no se sienten posados, para colgar en la pared, no solo guardar en el celular.",
    },
  ],
};

export const estilo = {
  titulo: "Documental, no posado",
  puntos: [
    {
      titulo: "Casi imperceptible",
      texto:
        "Documento el día disfrutándolo junto a ustedes, sin interrumpir ni dirigir cada momento.",
      foto: "1533091090875-1ff4acc497dd",
      alt: "Manos de una pareja con sus anillos",
    },
    {
      titulo: "La relación, no la pose",
      texto:
        "Me interesa lo que pasa entre ustedes y las personas que los acompañan ese día, más que la composición perfecta.",
      foto: "1550368566-f9cc32d7392d",
      alt: "Dos anillos de plata",
    },
    {
      titulo: "Con espacio para lo creativo",
      texto:
        "Si durante el día surge algo espontáneo, hay lugar para probarlo, sin restarle tiempo a la celebración.",
      foto: "1606216836549-f60d04e4a20b",
      alt: "Pareja caminando por un camino",
    },
  ],
};

export const portafolio = {
  titulo: "Algunas bodas que he documentado",
  fotos: [
    {
      pareja: "Ana y Rodrigo",
      lugar: "Hacienda San Isidro",
      id: "1617724975854-70b5d0cedb0a",
      alt: "Novios caminando en la playa",
    },
    {
      pareja: "Camila y Emiliano",
      lugar: "Quinta Cielo, San Juanito",
      id: "1612883833766-7930d960e16f",
      alt: "Novio y novia tomados de la mano",
    },
    {
      pareja: "Valeria y Diego",
      lugar: "Jardín Botánico, Chihuahua",
      id: "1622277430358-f4d134452e2e",
      alt: "Novia junto a una ventana",
    },
    {
      pareja: "Renata e Iván",
      lugar: "Rancho Los Encinos",
      id: "1532454781337-fc3edff34f91",
      alt: "Novia frente a un espejo, en blanco y negro",
    },
    {
      pareja: "Sofía y Mateo",
      lugar: "Catedral de Chihuahua",
      id: "1562826772-be179f321470",
      alt: "Pareja flotando en el agua",
    },
    {
      pareja: "Paola y Luis",
      lugar: "Bosque Nogales",
      id: "1624137924753-2bf0d5f9c469",
      alt: "Novio con una rosa blanca",
    },
    {
      pareja: "Fernanda y Bruno",
      lugar: "Terraza Vista Real",
      id: "1600164913117-2125c1f60b01",
      alt: "Novia junto al novio con traje gris",
    },
    {
      pareja: "Karla y Santiago",
      lugar: "Salón Los Cerezos",
      id: "1622277583249-4c1fad490804",
      alt: "Novia junto a unas plantas verdes",
    },
  ],
};

export const testimonios = {
  titulo: "Parejas que ya vivieron el día",
  lista: [
    {
      texto:
        "Bruno nos dejó ser nosotros. No hubo ni una foto forzada, y aun así quedaron mejor que cualquier pose armada.",
      autor: "Ana y Rodrigo",
      nota: "Hacienda San Isidro",
    },
    {
      texto:
        "Llegó dos horas antes solo para ver la luz del salón. Ese tipo de detalle se nota en las fotos.",
      autor: "Camila",
      nota: "novia",
    },
    {
      texto:
        "Meses después seguimos encontrando fotos que no habíamos visto y nos siguen sacando lágrimas.",
      autor: "Valeria y Diego",
      nota: "",
    },
  ],
};

export const guardar = {
  titulo: "Guarda mi contacto",
  texto: "Un archivo directo para tu celular, sin pasos de más.",
  boton: "Descargar contacto",
  archivo: "Bruno-Aranda.vcf",
  vcard: [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Aranda;Bruno;;;",
    "FN:Bruno Aranda",
    "TITLE:Fotógrafo de bodas",
    "TEL;TYPE=CELL:+526143771797",
    "EMAIL:contacto@brunoaranda.mx",
    "ADR:;;Chihuahua;Chihuahua;;;México",
    "URL:https://wa.me/526143771797",
    "END:VCARD",
  ].join("\n"),
};