const thxContainder = document.querySelector(".thanks-containder");
const thxBtn = document.querySelector(".thanks-button")
const form = document.querySelector(".modal-form")
const modal = document.querySelector("[data-modal]")
const hhero = document.querySelector(".hero-container")

form.addEventListener("submit", (event) => {
  thxContainder.classList.add("is-open");
  modal.classList.add("is-hidden")
  hhero.classList.add("is-hidden")
  event.preventDefault();
})

thxBtn.addEventListener("click", () => {
  thxContainder.classList.remove("is-open");
  hhero.classList.remove("is-hidden")
  document.body.classList.remove("modal-open")
});