// =====================================================
// ESTADO ABIERTO / CERRADO (según la hora real del navegador)
// =====================================================
const statusEl = document.getElementById("cr-status");

function updateOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo
  const hour = now.getHours() + now.getMinutes() / 60;

  let isOpen = false;
  let message = "";

  if (day >= 1 && day <= 6) {
    // Lunes a sábado: 7:00 AM – 9:00 PM
    isOpen = hour >= 7 && hour < 21;
    message = isOpen ? "Abierto ahora · cierra a las 9:00 PM" : "Cerrado · abrimos a las 7:00 AM";
  } else {
    // Domingo: 8:00 AM – 2:00 PM
    isOpen = hour >= 8 && hour < 14;
    message = isOpen ? "Abierto ahora · cierra a las 2:00 PM" : "Cerrado · abrimos a las 8:00 AM";
  }

  if (statusEl) {
    statusEl.innerHTML =
      '<span class="cr-status-dot ' +
      (isOpen ? "open" : "closed") +
      '"></span>' +
      message;
  }
}

updateOpenStatus();
setInterval(updateOpenStatus, 60000);

// =====================================================
// NAV DE CATEGORÍAS — scroll suave + scrollspy
// =====================================================
const navChips = document.querySelectorAll(".cr-nav-chip");
const sections = document.querySelectorAll(".cr-menu-section");

navChips.forEach((chip) => {
  chip.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(chip.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navChips.forEach((chip) => {
          chip.classList.toggle("active", chip.getAttribute("href") === "#" + id);
        });
      }
    });
  },
  { rootMargin: "-100px 0px -70% 0px" },
);

sections.forEach((section) => observer.observe(section));