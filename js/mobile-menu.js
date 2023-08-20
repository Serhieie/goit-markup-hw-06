(() => {
  const mobileMenu = document.querySelector(".menu-burger");
  const openMenuBtn = document.querySelector(".menu-burger-btn");
  const body = document.querySelector("body");

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    openMenuBtn.classList.toggle("is-open");
    body.classList.toggle("no-scroll");

    const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
  };

  openMenuBtn.addEventListener("click", toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;

    mobileMenu.classList.remove("is-open");
    openMenuBtn.classList.remove("is-open");
    body.classList.remove("no-scroll");
    openMenuBtn.setAttribute("aria-expanded", false);
  });
})();
