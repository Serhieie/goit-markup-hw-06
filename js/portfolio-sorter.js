document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо елементи, що потрібно сортувати
  const filterItems = document.querySelectorAll(".filter-item");
  // Знаходимо всі кнопки фільтру
  const filterButtons = document.querySelectorAll(".nav-buttons");

  // Функція для відображення елементів з відповідною категорією
  function showItems(category) {
    filterItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Обробник подій для кнопок фільтру
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.filter;
      showItems(category);
    });
  });

  // Запускаємо відображення всіх елементів при завантаженні сторінки
  showItems("all");
});
