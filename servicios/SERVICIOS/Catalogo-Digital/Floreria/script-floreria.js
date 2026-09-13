// Filtros del mosaico — Musgo & Flor
const filterButtons = document.querySelectorAll(".mf-filter-btn");
const items = document.querySelectorAll(".mf-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    items.forEach((item) => {
      if (category === "todo" || item.dataset.category === category) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});