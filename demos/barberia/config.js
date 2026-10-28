// Datos y textos de la página. Las fotos son las mismas de la versión anterior
// (Unsplash, licencia libre). Para entregar a un cliente, conviene
// reemplazarlas por las de la barbería (idealmente en public/img/barberia/).

export const foto = (id, ancho = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=85`;

export const negocio = {
  nombre: "Black Crown",
  apellido: "Barber",
  whatsapp: "5215512345678",
  direccion: "Calle Orizaba 128, Roma Norte, CDMX",
  mapa: "https://www.google.com/maps/search/?api=1&query=Calle+Orizaba+128+Roma+Norte+CDMX",
  volverA: "../../index.html",
};

export const waLink = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const nav = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#galeria", texto: "Galería" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#horarios", texto: "Horarios" },
  { href: "#ubicacion", texto: "Ubicación" },
];

export const hero = {
  foto: "1622286342621-4bd786c2447c",
  alt: "Barbero profesional trabajando en un corte moderno",
  titulo: "Corte fino, barba limpia y una corona bien puesta.",
  texto:
    "Una experiencia sobria, precisa y moderna para hombres que cuidan cada detalle. Agenda tu lugar por WhatsApp y llega directo a la silla.",
  mensajeWa: "Hola Black Crown Barber, quiero reservar una cita",
  datos: [
    ["12+", "años de técnica"],
    ["4.9", "calificación local"],
    ["35 min", "cita promedio"],
  ],
};

export const servicios = {
  titulo: "Lo esencial, hecho con calma y precisión.",
  texto:
    "Precios claros, acabados limpios y una rutina pensada para que salgas listo.",
  lista: [
    {
      nombre: "Corte",
      texto:
        "Degradado, clásico, texturizado o ejecutivo. Incluye lavado ligero, styling y revisión final.",
      precio: "$280",
      mensajeWa: "Hola, quiero reservar un corte",
    },
    {
      nombre: "Barba",
      texto:
        "Perfilado con navaja, toalla caliente, hidratación y acabado con aceite aromático.",
      precio: "$220",
      mensajeWa: "Hola, quiero reservar servicio de barba",
    },
    {
      nombre: "Corte + barba",
      texto:
        "Servicio completo para renovar imagen: corte, barba, cejas, styling y bebida de cortesía.",
      precio: "$430",
      mensajeWa: "Hola, quiero reservar corte y barba",
    },
  ],
};

export const galeria = {
  titulo: "Acabados que se notan de cerca.",
  fotos: [
    {
      id: "1621605815971-fbc98d665033",
      alt: "Barbero perfilando un corte con máquina",
      forma: "alta",
    },
    {
      id: "1599351431202-1e0f0137899a",
      alt: "Cliente en silla de barbería moderna",
      forma: "normal",
    },
    {
      id: "1503951914875-452162b0f3f1",
      alt: "Herramientas de barbería sobre mesa negra",
      forma: "normal",
    },
    {
      id: "1517832606299-7ae9b720a186",
      alt: "Interior elegante de barbería con sillas clásicas",
      forma: "ancha",
    },
  ],
};

export const nosotros = {
  foto: "1622288432450-277d0fef5ed6",
  alt: "Barbero concentrado preparando herramientas",
  titulo: "Un espacio oscuro, cómodo y sin prisas.",
  texto:
    "Black Crown Barber nace para clientes que quieren un servicio consistente, una conversación tranquila y un resultado que aguante toda la semana. Trabajamos con agenda para cuidar el tiempo de cada persona.",
  puntos: [
    "Asesoría según rostro, estilo de cabello y rutina diaria.",
    "Herramientas sanitizadas, productos premium y técnica precisa.",
    "Ambiente privado con música suave, café y atención directa.",
  ],
};

export const testimonios = {
  titulo: "Clientes que vuelven por el detalle.",
  lista: [
    {
      texto:
        "El degradado quedó exacto. Me gustó que preguntaran antes de tocar el largo de arriba.",
      autor: "Daniel R.",
    },
    {
      texto:
        "Servicio puntual, limpio y con buena vibra. La barba quedó muy natural.",
      autor: "Marco A.",
    },
    {
      texto:
        "Se siente premium sin ser incómodo. Ya es mi lugar fijo para corte y barba.",
      autor: "Iván M.",
    },
  ],
};

export const horarios = {
  titulo: "Agenda abierta toda la semana.",
  lista: [
    ["Lunes a viernes", "10:00 a 20:00"],
    ["Sábado", "09:00 a 18:00"],
    ["Domingo", "11:00 a 15:00"],
  ],
  boton: "Consultar disponibilidad",
  mensajeWa: "Hola, quiero ver horarios disponibles",
};

export const ubicacion = {
  titulo: "Colonia Roma Norte, CDMX.",
  texto:
    "Calle Orizaba 128, a dos calles de Álvaro Obregón. Acceso fácil en auto, bici o transporte.",
};

export const cierre = {
  foto: "1521590832167-7bcbfaa6381f",
  titulo: "Reserva hoy y llega con tu horario confirmado.",
  texto:
    "Envía un mensaje por WhatsApp, elige servicio y recibe confirmación directa del equipo.",
  boton: "Reservar por WhatsApp",
  mensajeWa: "Hola Black Crown Barber, quiero agendar mi cita hoy",
};