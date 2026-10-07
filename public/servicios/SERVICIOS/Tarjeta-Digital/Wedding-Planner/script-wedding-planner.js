// =====================================================
// ACORDEÓN DE PAQUETES
// =====================================================
const accordionItems = document.querySelectorAll(".ad-accordion-item");

accordionItems.forEach((item) => {
  const head = item.querySelector(".ad-accordion-head");
  head.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    accordionItems.forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// =====================================================
// TESTIMONIO ROTATIVO
// =====================================================
const quoteSlides = document.querySelectorAll(".ad-quote-slide");
const quoteDots = document.querySelectorAll(".ad-quote-dot");
let currentQuote = 0;

function showQuote(index) {
  quoteSlides.forEach((s, i) => s.classList.toggle("active", i === index));
  quoteDots.forEach((d, i) => d.classList.toggle("active", i === index));
}

if (quoteSlides.length > 0) {
  showQuote(0);
  setInterval(() => {
    currentQuote = (currentQuote + 1) % quoteSlides.length;
    showQuote(currentQuote);
  }, 4500);

  quoteDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentQuote = i;
      showQuote(currentQuote);
    });
  });
}

// =====================================================
// RSVP → WHATSAPP (descarga de contacto)
// =====================================================
const downloadBtn = document.getElementById("ad-download-vcard");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Duarte;Amara;;;",
      "FN:Amara Duarte",
      "TITLE:Wedding & Event Planner",
      "TEL;TYPE=CELL:+526143771797",
      "EMAIL:contacto@amaraduarte.mx",
      "ADR:;;Chihuahua;Chihuahua;;;México",
      "URL:https://wa.me/526143771797",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Amara-Duarte.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}