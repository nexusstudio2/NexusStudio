// =====================================================
// SLIDER ANTES / DESPUÉS (arrastrable, mouse y touch)
// =====================================================
const compare = document.getElementById("dn-compare");
const before = document.getElementById("dn-compare-before");
const handle = document.getElementById("dn-compare-handle");

if (compare && before && handle) {
  let dragging = false;

  function setPosition(clientX) {
    const rect = compare.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;
    before.style.width = percent + "%";
    handle.style.left = percent + "%";
  }

  compare.addEventListener("mousedown", (e) => {
    dragging = true;
    setPosition(e.clientX);
  });
  window.addEventListener("mousemove", (e) => {
    if (dragging) setPosition(e.clientX);
  });
  window.addEventListener("mouseup", () => (dragging = false));

  compare.addEventListener(
    "touchstart",
    (e) => {
      dragging = true;
      setPosition(e.touches[0].clientX);
    },
    { passive: true },
  );
  compare.addEventListener(
    "touchmove",
    (e) => {
      if (dragging) setPosition(e.touches[0].clientX);
    },
    { passive: true },
  );
  compare.addEventListener("touchend", () => (dragging = false));
}

// =====================================================
// FAQ ACORDEÓN
// =====================================================
const faqItems = document.querySelectorAll(".dn-faq-item");
faqItems.forEach((item) => {
  const head = item.querySelector(".dn-faq-head");
  head.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// =====================================================
// FORMULARIO DE CITA → WHATSAPP
// =====================================================
const form = document.getElementById("dn-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("dn-nombre").value;
    const telefono = document.getElementById("dn-telefono").value;
    const servicio = document.getElementById("dn-servicio").value;

    const msg = encodeURIComponent(
      `Hola Dental Norte, quiero agendar una cita 🦷\n\n` +
        `Nombre: ${nombre}\n` +
        `Teléfono: ${telefono}\n` +
        `Servicio de interés: ${servicio || "No especificado"}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
  });
}