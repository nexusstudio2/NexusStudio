// Filtros de catálogo — Encinar Eventos
const filterButtons = document.querySelectorAll(".enc-filter-btn");
const cards = document.querySelectorAll(".enc-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    cards.forEach((card) => {
      if (category === "todo" || card.dataset.category === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});