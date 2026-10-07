// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((e) => {
    if (e.isIntersecting) {
        e.target.classList.add("visible");
    }
    });
},
{ threshold: 0.08 },
);
reveals.forEach((r) => observer.observe(r));

// Smooth nav links (solo anclas internas)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
    e.preventDefault();
    t.scrollIntoView({ behavior: "smooth" });
    navMobile.classList.remove("open");
    }
});
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
if (navToggle && navMobile) {
navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
});
}

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq-question").forEach((b) => {
    b.setAttribute("aria-expanded", "false");
    const ans = b.nextElementSibling;
    if (ans) ans.classList.remove("open");
    });
    if (!expanded) {
    btn.setAttribute("aria-expanded", "true");
    const answer = btn.nextElementSibling;
    if (answer) answer.classList.add("open");
    }
});
});

// Contact form → WhatsApp redirect
const contactForm = document.getElementById("contactForm");
if (contactForm) {
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const evento = document.getElementById("evento").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const servicio = document.getElementById("servicio").value;

    const msg = encodeURIComponent(
    `Hola Nexus Studio, quiero cotizar un proyecto 🚀\n\n` +
        `Nombre: ${nombre}\n` +
        `Evento o negocio: ${evento}\n` +
        `WhatsApp: ${whatsapp}\n` +
        `Servicio: ${servicio || "Sin especificar"}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
});
}
// =====================================================================
// ASISTENTE VIRTUAL — bot de reglas (sin costo de API, sin backend)
// Para reutilizar en la página de un cliente: copiar este bloque completo
// y ajustar únicamente el objeto ASSIST_CONFIG con su información.
// =====================================================================
const ASSIST_CONFIG = {
  businessName: "Nexus Studio",
  whatsapp: "526143771797",
  greeting: "¡Hola! 👋 Soy el asistente de Nexus Studio. Puedo ayudarte con precios, servicios o tiempos de entrega. ¿Qué necesitas?",
  fallback: "No tengo esa respuesta a la mano, pero Angel te contesta directo por WhatsApp:",
  quickReplies: ["Precios", "Entrega", "Portafolio"],

  // Cada servicio tiene su propia respuesta a detalle.
  services: [
    {
      id: 1,
      name: "Invitación Digital",
      keywords: ["servicio 1", "invitación digital", "invitacion digital", "invitación", "xv años", "boda"],
      detail: "🎉 <b>Invitación Digital</b><br>Para XV años, bodas, cumpleaños y graduaciones. Con cuenta regresiva, RSVP y mapa.<br>💵 Desde $800 hasta $1,500 MXN · Entrega en 3–5 días."
    },
    {
      id: 2,
      name: "Menú QR",
      keywords: ["servicio 2", "menú qr", "menu qr", "menú digital"],
      detail: "📲 <b>Menú QR</b><br>Tu menú en un código QR, sin papel ni impresiones. Ideal para restaurantes y cafeterías.<br>💵 Desde $1,200 hasta $2,200 MXN · Entrega en 3–5 días."
    },
    {
      id: 3,
      name: "Landing Page",
      keywords: ["servicio 3", "landing page", "landing"],
      detail: "🚀 <b>Landing Page</b><br>Una página con un solo objetivo: que te llamen, te escriban o te compren.<br>💵 Desde $2,000 hasta $3,500 MXN · Entrega en 4–7 días."
    },
    {
      id: 4,
      name: "Tarjeta Digital",
      keywords: ["servicio 4", "tarjeta digital"],
      detail: "💳 <b>Tarjeta Digital</b><br>Tu contacto profesional en el celular, sin impresiones.<br>💵 Desde $400 hasta $700 MXN · Entrega en 1–2 días."
    },
    {
      id: 5,
      name: "Catálogo Digital",
      keywords: ["servicio 5", "catálogo digital", "catalogo digital", "catálogo"],
      detail: "📋 <b>Catálogo Digital</b><br>Tus productos organizados en línea, para compartir por WhatsApp o Instagram.<br>💵 Desde $2,500 hasta $4,000 MXN · Entrega en 7–10 días."
    },
    {
      id: 6,
      name: "Asistente Virtual",
      keywords: ["servicio 6", "asistente virtual", "asistente", "bot"],
      detail: "🤖 <b>Asistente Virtual</b><br>Justo como el que estás usando ahora mismo. Se agrega a cualquiera de los servicios de esta página.<br>💵 Desde $800 hasta $1,200 MXN · Entrega en 2–3 días."
    }
  ],

  rules: [
    {
      keywords: ["precio", "cuesta", "cuánto", "cuanto", "costo", "tarifa"],
      response: "Los precios van desde $400 MXN (Tarjeta Digital) hasta $4,000 MXN (Catálogo Digital), dependiendo del servicio. Escribe \"servicios\" para ver el detalle de cada uno."
    },
    {
      keywords: ["entrega", "tiempo", "cuánto tardan", "cuanto tardan", "cuándo", "cuando"],
      response: "Los tiempos de entrega varían por servicio: desde 1–2 días (Tarjeta Digital) hasta 7–10 días (Catálogo Digital). Escribe \"servicios\" para ver el detalle de cada uno."
    },
    {
      keywords: ["portafolio", "ejemplos", "demo", "prueba"],
      response: "Puedes ver ejemplos reales de mi trabajo en la sección de arriba de la página. Si te gusta lo que ves, escríbeme por WhatsApp y platicamos tu proyecto."
    },
    {
      keywords: ["adelanto", "anticipo", "por adelantado", "50%"],
      response: "El 50% al inicio para arrancar el proyecto y el 50% restante al entregar el diseño final aprobado."
    },
    {
      keywords: ["ubicación", "ubicacion", "dónde", "donde", "chihuahua"],
      response: "Trabajo desde Chihuahua, México, pero atiendo clientes de cualquier parte — todo el proceso es remoto, por WhatsApp."
    }
  ]
};

const SERVICE_OVERVIEW_KEYWORDS = ["servicios", "qué hacen", "que hacen", "ofrecen", "ver servicios", "qué servicios", "que servicios"];

const assistLauncher = document.getElementById("assistLauncher");
const assistPanel = document.getElementById("assistPanel");
const assistCloseBtn = document.getElementById("assistClose");
const assistBody = document.getElementById("assistBody");
const assistChipsWrap = document.getElementById("assistChips");
const assistInput = document.getElementById("assistInput");
const assistSendBtn = document.getElementById("assistSend");

if (assistLauncher && assistPanel) {
  document.getElementById("assistBizName").textContent = ASSIST_CONFIG.businessName;
  document.getElementById("assistAvatarLetter").textContent = ASSIST_CONFIG.businessName.charAt(0).toUpperCase();

  let assistOpened = false;

  function assistAddMessage(text, sender, withWhatsapp) {
    const msg = document.createElement("div");
    msg.className = "assist-msg " + sender;
    msg.innerHTML = text;
    if (withWhatsapp) {
      const link = document.createElement("a");
      link.href = "https://wa.me/" + ASSIST_CONFIG.whatsapp + "?text=" + encodeURIComponent("Hola, tengo una pregunta que el asistente no pudo resolver");
      link.target = "_blank";
      link.className = "assist-wa-link";
      link.textContent = "💬 Escribir por WhatsApp";
      msg.appendChild(document.createElement("br"));
      msg.appendChild(link);
    }
    assistBody.appendChild(msg);
    assistBody.scrollTop = assistBody.scrollHeight;
  }

  function assistRenderChips() {
    assistChipsWrap.innerHTML = "";
    ASSIST_CONFIG.quickReplies.forEach(function (label) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "assist-chip";
      chip.textContent = label;
      chip.addEventListener("click", function () {
        assistHandleMessage(label);
      });
      assistChipsWrap.appendChild(chip);
    });
  }

  function assistListServicesText() {
    let html = "Estos son mis servicios:<br><br>";
    ASSIST_CONFIG.services.forEach(function (s) {
      html += (s.id + ". " + s.name + "<br>");
    });
    html += "<br>Escribe, por ejemplo, <i>\"más detalles del servicio 1\"</i> y te cuento todo sobre ese en particular.";
    return html;
  }

  function assistShowServiceChips() {
    assistChipsWrap.innerHTML = "";
    ASSIST_CONFIG.services.forEach(function (s) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "assist-chip";
      chip.textContent = "Servicio " + s.id;
      chip.addEventListener("click", function () {
        assistHandleMessage("servicio " + s.id);
      });
      assistChipsWrap.appendChild(chip);
    });
    const exitChip = document.createElement("button");
    exitChip.type = "button";
    exitChip.className = "assist-chip assist-chip-exit";
    exitChip.textContent = "⬅ Otra pregunta";
    exitChip.addEventListener("click", function () {
      assistRenderChips();
    });
    assistChipsWrap.appendChild(exitChip);
  }

  function assistMatchServiceDetail(text) {
    const lower = text.toLowerCase();
    for (let i = 0; i < ASSIST_CONFIG.services.length; i++) {
      const service = ASSIST_CONFIG.services[i];
      for (let k = 0; k < service.keywords.length; k++) {
        if (lower.indexOf(service.keywords[k]) !== -1) return service;
      }
    }
    return null;
  }

  function assistMatchOverview(text) {
    const lower = text.toLowerCase();
    for (let i = 0; i < SERVICE_OVERVIEW_KEYWORDS.length; i++) {
      if (lower.indexOf(SERVICE_OVERVIEW_KEYWORDS[i]) !== -1) return true;
    }
    return false;
  }

  function assistMatchRule(text) {
    const lower = text.toLowerCase();
    for (let i = 0; i < ASSIST_CONFIG.rules.length; i++) {
      const rule = ASSIST_CONFIG.rules[i];
      for (let k = 0; k < rule.keywords.length; k++) {
        if (lower.indexOf(rule.keywords[k]) !== -1) return rule.response;
      }
    }
    return null;
  }

  function assistHandleMessage(text) {
    if (!text || !text.trim()) return;
    assistAddMessage(text, "user");
    assistInput.value = "";
    setTimeout(function () {
      const service = assistMatchServiceDetail(text);
      if (service) {
        assistAddMessage(service.detail, "bot");
        return;
      }
      if (assistMatchOverview(text)) {
        assistAddMessage(assistListServicesText(), "bot");
        assistShowServiceChips();
        return;
      }
      const answer = assistMatchRule(text);
      if (answer) {
        assistAddMessage(answer, "bot");
        return;
      }
      assistAddMessage(ASSIST_CONFIG.fallback, "bot", true);
    }, 380);
  }

  function assistOpenPanel() {
    assistPanel.classList.add("open");
    assistLauncher.classList.add("hidden-btn");
    if (!assistOpened) {
      assistAddMessage(ASSIST_CONFIG.greeting, "bot");
      assistRenderChips();
      assistOpened = true;
    }
    assistInput.focus();
  }
  function assistClosePanel() {
    assistPanel.classList.remove("open");
    assistLauncher.classList.remove("hidden-btn");
  }

  assistLauncher.addEventListener("click", assistOpenPanel);
  assistCloseBtn.addEventListener("click", assistClosePanel);
  assistSendBtn.addEventListener("click", function () { assistHandleMessage(assistInput.value); });
  assistInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") assistHandleMessage(assistInput.value);
  });
}