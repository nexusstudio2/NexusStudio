// =====================================================
// CANVAS DE ESTRELLAS GLOBAL
// =====================================================
const canvas = document.getElementById("bc-stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.floor((canvas.width * canvas.height) / 6000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.3,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.015 + 0.005,
  }));
}

function drawStars(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((s) => {
    const twinkle = Math.sin(time * s.speed + s.phase) * 0.4 + 0.6;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(201, 206, 224, ${twinkle})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawStars);

// =====================================================
// CUENTA REGRESIVA EN VIVO
// =====================================================
const WEDDING_DATE = new Date("2026-12-12T18:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  const els = {
    days: document.getElementById("bc-days"),
    hours: document.getElementById("bc-hours"),
    minutes: document.getElementById("bc-minutes"),
    seconds: document.getElementById("bc-seconds"),
  };

  if (diff <= 0) {
    els.days.textContent = "0";
    els.hours.textContent = "0";
    els.minutes.textContent = "0";
    els.seconds.textContent = "0";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  els.days.textContent = days;
  els.hours.textContent = hours;
  els.minutes.textContent = minutes;
  els.seconds.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =====================================================
// RSVP → WHATSAPP
// =====================================================
const rsvpForm = document.getElementById("bc-rsvp-form");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("bc-nombre").value;
    const asistencia = document.getElementById("bc-asistencia").value;
    const acompanantes = document.getElementById("bc-acompanantes").value;

    const msg = encodeURIComponent(
      `Confirmación de asistencia — Boda Elena & Mateo\n\n` +
        `Nombre: ${nombre}\n` +
        `¿Asistirá?: ${asistencia}\n` +
        `Número de acompañantes: ${acompanantes || "0"}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
  });
}