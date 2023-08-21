(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  const thxContainder = document.querySelector(".thanks-containder");
const thxBtn = document.querySelector(".thanks-button")
const form = document.querySelector(".modal-form")
const heroContainer = document.querySelector(".hero-container")

form.addEventListener("submit", (event) => {
  thxContainder.classList.add("is-open");
  refs.modal.classList.add("is-hidden")
  heroContainer.classList.add("is-hidden")
  event.preventDefault();
})

thxBtn.addEventListener("click", () => {
  thxContainder.classList.remove("is-open");
  heroContainer.classList.remove("is-hidden")
  document.body.classList.remove("modal-open")
});

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }
})();