// =====================================================
// RESERVA POR BOTONES (día + horario) → WhatsApp
// =====================================================
let selectedDay = null;
let selectedTime = null;

const dayButtons = document.querySelectorAll(".cb-day-btn");
const timeButtons = document.querySelectorAll(".cb-time-btn");
const summary = document.getElementById("cb-booking-summary");
const bookBtn = document.getElementById("cb-book-btn");

function updateSummary() {
  if (selectedDay && selectedTime) {
    summary.innerHTML =
      "Vas a reservar el <strong>" +
      selectedDay +
      "</strong> a las <strong>" +
      selectedTime +
      "</strong>";
  } else {
    summary.textContent = "Elige un día y un horario para continuar";
  }
}

dayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    dayButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedDay = btn.dataset.day;
    updateSummary();
  });
});

timeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    timeButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedTime = btn.dataset.time;
    updateSummary();
  });
});

if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    if (!selectedDay || !selectedTime) {
      updateSummary();
      return;
    }
    const msg = encodeURIComponent(
      `Hola Cuervo Barbería, quiero reservar una cita ✂️\n\n` +
        `Día: ${selectedDay}\n` +
        `Hora: ${selectedTime}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
  });
}

updateSummary();