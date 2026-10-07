// Formulario de clase de prueba → WhatsApp
const form = document.getElementById("nf-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nf-nombre").value;
    const telefono = document.getElementById("nf-telefono").value;
    const interes = document.getElementById("nf-interes").value;

    const msg = encodeURIComponent(
      `Hola Nudo Fitness, quiero agendar mi clase de prueba 🏋️\n\n` +
        `Nombre: ${nombre}\n` +
        `Teléfono: ${telefono}\n` +
        `Me interesa: ${interes || "No especificado"}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
  });
}