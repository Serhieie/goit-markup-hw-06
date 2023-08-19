document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filter-item");
  const filterButtons = document.querySelectorAll(".nav-buttons");
  function showItems(category) {
    filterItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.filter;
      showItems(category);
      AOS.refresh();
    });
  });

  showItems("all");
});
