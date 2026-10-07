// Tabs de categorías — Horno de Alba
const tabButtons = document.querySelectorAll(".ha-tab-btn");
const menuLists = document.querySelectorAll(".ha-menu-list");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    menuLists.forEach((l) => l.classList.remove("active"));

    btn.classList.add("active");
    const category = btn.dataset.category;
    const target = document.querySelector(
      '.ha-menu-list[data-category="' + category + '"]',
    );
    if (target) target.classList.add("active");
  });
});