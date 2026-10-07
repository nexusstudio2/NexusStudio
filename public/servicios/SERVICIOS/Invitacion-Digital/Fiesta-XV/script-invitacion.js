// Cuenta regresiva
const eventDate = new Date("2026-11-14T19:30:00");
function updateCountdown(){
  const now = new Date();
  let diff = eventDate - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const min = Math.floor((diff / (1000*60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);
  document.getElementById("cd-days").textContent = String(days).padStart(2,"0");
  document.getElementById("cd-hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("cd-min").textContent = String(min).padStart(2,"0");
  document.getElementById("cd-sec").textContent = String(sec).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible"); });
},{threshold:0.1});
reveals.forEach(r=>observer.observe(r));

// Sobre / carta animada
const envelope = document.getElementById("envelope");
const envelopeHint = document.getElementById("envelopeHint");
let envelopeOpened = false;
envelope.addEventListener("click", ()=>{
  if(envelopeOpened) return;
  envelopeOpened = true;
  envelope.classList.add("open");
  envelopeHint.classList.add("hidden");
});

// ====== CONFIGURACIÓN DEL CLIENTE ======
// Número de WhatsApp de quien recibe las confirmaciones (con código de país, sin +, sin espacios)
const NUMERO_CONFIRMACIONES = "526143771797"; // <-- reemplazar por el número real del cliente
const NOMBRE_EVENTO = "los XV años de Valentina";
// =========================================

const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const rsvpOptions = document.getElementById("rsvpOptions");
const rsvpForm = document.getElementById("rsvpForm");
const rsvpFormLabel = document.getElementById("rsvpFormLabel");
const rsvpNombre = document.getElementById("rsvpNombre");
const rsvpAcompanantes = document.getElementById("rsvpAcompanantes");
const rsvpBack = document.getElementById("rsvpBack");
const msg = document.getElementById("rsvp-msg");

let respuestaSeleccionada = null;

function mostrarFormulario(respuesta){
  respuestaSeleccionada = respuesta;
  rsvpOptions.classList.add("hidden");
  rsvpForm.classList.add("visible");
  rsvpAcompanantes.closest(".rsvp-form").querySelector("#rsvpAcompanantes").style.display =
    respuesta === "si" ? "block" : "none";
  rsvpFormLabel.innerHTML = respuesta === "si"
    ? "Confirmando que <strong>asistirás</strong> 🎉"
    : "Lamentamos que <strong>no puedas acompañarnos</strong>";
  msg.textContent = "";
}

btnYes.addEventListener("click", ()=> mostrarFormulario("si"));
btnNo.addEventListener("click", ()=> mostrarFormulario("no"));

rsvpBack.addEventListener("click", ()=>{
  rsvpForm.classList.remove("visible");
  rsvpOptions.classList.remove("hidden");
  respuestaSeleccionada = null;
});

rsvpForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const nombre = rsvpNombre.value.trim();
  const acompanantes = rsvpAcompanantes.value;

  let texto;
  if(respuestaSeleccionada === "si"){
    texto = `Hola! Confirmo mi asistencia a ${NOMBRE_EVENTO} 🎉\n\n` +
            `Nombre: ${nombre}\n` +
            `Número de pases: ${acompanantes}`;
  } else {
    texto = `Hola! Lamentablemente no podré asistir a ${NOMBRE_EVENTO}.\n\n` +
            `Nombre: ${nombre}`;
  }

  const url = `https://wa.me/${NUMERO_CONFIRMACIONES}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");

  msg.textContent = respuestaSeleccionada === "si"
    ? "¡Qué alegría! Te esperamos 💛"
    : "Gracias por avisarnos.";
});

// Fireflies
const fContainer = document.getElementById("fireflies");
for(let i=0;i<14;i++){
  const f = document.createElement("div");
  f.className = "firefly";
  f.style.left = Math.random()*100 + "%";
  f.style.top = Math.random()*100 + "%";
  f.style.animationDuration = (6 + Math.random()*6) + "s";
  f.style.animationDelay = (Math.random()*6) + "s";
  fContainer.appendChild(f);
}