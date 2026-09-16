// =====================================================
// ESPECIAL DEL DÍA (según el día real de la semana)
// =====================================================
const specials = {
  0: { name: "Pozole Rojo", price: "$140" }, // domingo
  1: { name: "Mole Poblano", price: "$180" }, // lunes
  2: { name: "Enchiladas Suizas", price: "$150" }, // martes
  3: { name: "Chiles Rellenos", price: "$160" }, // miércoles
  4: { name: "Costillas BBQ", price: "$210" }, // jueves
  5: { name: "Chiles en Nogada", price: "$220" }, // viernes
  6: { name: "Parrillada Familiar", price: "$390" }, // sábado
};

const today = new Date().getDay();
const special = specials[today];
const specialName = document.getElementById("fn-special-name");
const specialPrice = document.getElementById("fn-special-price");

if (specialName && specialPrice && special) {
  specialName.textContent = special.name;
  specialPrice.textContent = special.price;
}

// =====================================================
// SIDEBAR DE CATEGORÍAS
// =====================================================
const sidebarButtons = document.querySelectorAll(".fn-sidebar-btn");
const categories = document.querySelectorAll(".fn-menu-category");

sidebarButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebarButtons.forEach((b) => b.classList.remove("active"));
    categories.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    const category = btn.dataset.category;
    document
      .querySelector('.fn-menu-category[data-category="' + category + '"]')
      .classList.add("active");
  });
});

// =====================================================
// RESERVACIÓN → WHATSAPP
// =====================================================
const form = document.getElementById("fn-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("fn-nombre").value;
    const telefono = document.getElementById("fn-telefono").value;
    const personas = document.getElementById("fn-personas").value;
    const fecha = document.getElementById("fn-fecha").value;
    const hora = document.getElementById("fn-hora").value;

    const msg = encodeURIComponent(
      `Hola Fonda El Nogal, quiero hacer una reservación 🌮\n\n` +
        `Nombre: ${nombre}\n` +
        `Teléfono: ${telefono}\n` +
        `Personas: ${personas}\n` +
        `Fecha: ${fecha}\n` +
        `Hora: ${hora}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
  });
}