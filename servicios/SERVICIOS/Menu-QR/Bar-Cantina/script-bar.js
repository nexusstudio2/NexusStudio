// =====================================================
// HAPPY HOUR (según la hora real del navegador)
// =====================================================
const happyHourEl = document.getElementById("lg-happy-hour");

function updateHappyHour() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isWeekday = day >= 1 && day <= 5;
  const isHappyHour = isWeekday && hour >= 18 && hour < 20;

  if (happyHourEl) {
    if (isHappyHour) {
      happyHourEl.className = "lg-happy-hour active";
      happyHourEl.textContent = "🍹 Happy Hour activo ahora · 2x1 hasta las 8:00 PM";
    } else {
      happyHourEl.className = "lg-happy-hour inactive";
      happyHourEl.textContent = "Happy Hour de lunes a viernes, 6:00 – 8:00 PM";
    }
  }
}

updateHappyHour();
setInterval(updateHappyHour, 60000);

// =====================================================
// FILTRO MULTI-ETIQUETA (OR lógico)
// =====================================================
const tagButtons = document.querySelectorAll(".lg-tag-btn");
const cocktailCards = document.querySelectorAll(".lg-cocktail-card");
let selectedTags = [];

function applyFilter() {
  cocktailCards.forEach((card) => {
    const cardTags = card.dataset.tags.split(",");
    const matches =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => cardTags.includes(tag));
    card.style.display = matches ? "" : "none";
  });
}

tagButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tag = btn.dataset.tag;
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
      btn.classList.remove("selected");
    } else {
      selectedTags.push(tag);
      btn.classList.add("selected");
    }
    applyFilter();
  });
});

// =====================================================
// "¿NO SABES QUÉ PEDIR?" — selector aleatorio
// =====================================================
const randomBtn = document.getElementById("lg-random-btn");

if (randomBtn) {
  randomBtn.addEventListener("click", () => {
    cocktailCards.forEach((c) => c.classList.remove("highlighted"));

    const visibleCards = Array.from(cocktailCards).filter(
      (c) => c.style.display !== "none",
    );
    if (visibleCards.length === 0) return;

    const pick =
      visibleCards[Math.floor(Math.random() * visibleCards.length)];
    pick.classList.add("highlighted");
    pick.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// =====================================================
// EVENTO DE HOY (resalta el día real de la semana)
// =====================================================
const todayIndex = new Date().getDay();
const eventRows = document.querySelectorAll(".lg-event-row");

eventRows.forEach((row) => {
  if (parseInt(row.dataset.day, 10) === todayIndex) {
    row.classList.add("today");
    const tag = document.createElement("span");
    tag.className = "lg-event-today-tag";
    tag.textContent = "Hoy";
    row.appendChild(tag);
  }
});