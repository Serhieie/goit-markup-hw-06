(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".modal-form"),
    thxContainder: document.querySelector(".thanks-containder"),
    thxBtn: document.querySelector(".thanks-button"),
    heroContainer: document.querySelector(".hero-container")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.form.addEventListener("submit", toggleThanksMsg);
  refs.thxBtn.addEventListener("click", toggleThanksMsg);
  refs.thxBtn.addEventListener("click", removeModalOpn);

function removeModalOpn () {
  document.body.classList.remove("modal-open")
};

function toggleThanksMsg(event) {
  refs.thxContainder.classList.toggle("is-open");
  refs.heroContainer.classList.toggle("is-hidden")
  refs.modal.classList.add("is-hidden")
  event.preventDefault();
}

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }
})();