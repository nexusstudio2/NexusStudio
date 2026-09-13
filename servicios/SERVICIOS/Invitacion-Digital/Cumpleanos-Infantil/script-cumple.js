// =====================================================
// GLOBOS DECORATIVOS FLOTANTES (hero)
// =====================================================
const heroColors = ["#ffd966", "#ff9f68", "#ff6f91", "#2ec4b6"];
const hero = document.querySelector(".ci-hero");
const positions = [8, 22, 78, 90, 40, 62];

positions.forEach((left, i) => {
  const balloon = document.createElement("div");
  balloon.className = "ci-balloon-deco";
  balloon.style.left = left + "%";
  balloon.style.width = 46 + (i % 3) * 10 + "px";
  balloon.style.height = balloon.style.width;
  balloon.style.background = heroColors[i % heroColors.length];
  balloon.style.animationDuration = 7 + (i % 3) * 2 + "s";
  balloon.style.animationDelay = i * 0.8 + "s";
  hero.appendChild(balloon);
});

// =====================================================
// JUEGO DE GLOBOS — revela el mensaje
// =====================================================
const gameBalloons = document.querySelectorAll(".ci-game-balloon");

gameBalloons.forEach((balloon) => {
  balloon.addEventListener("click", () => {
    if (balloon.classList.contains("popped")) return;
    balloon.classList.add("popped");
    const word = balloon.dataset.word;
    const slot = document.querySelector(
      '.ci-word-slot[data-word="' + word + '"]',
    );
    setTimeout(() => {
      if (slot) slot.classList.add("show");
    }, 150);
  });
});

// =====================================================
// RSVP → WHATSAPP
// =====================================================
const rsvpForm = document.getElementById("ci-rsvp-form");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("ci-nombre").value;
    const asistencia = document.getElementById("ci-asistencia").value;
    const ninos = document.getElementById("ci-ninos").value;

    const msg = encodeURIComponent(
      `Confirmación — Cumpleaños de Emilio 🎉\n\n` +
        `Nombre: ${nombre}\n` +
        `¿Asistirán?: ${asistencia}\n` +
        `Número de niños que acompañan: ${ninos || "0"}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
  });
}