function toggleModalOrientationClass(orientation) {
  const modal = document.querySelector(".orientation");

  if (modal) {
    if (orientation === "landscape") {
      modal.classList.remove("landscape-mode");
    } else {
      modal.classList.add("landscape-mode");
    }
  }
}
function handleOrientationChange() {
  const orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  toggleModalOrientationClass(orientation);
}

window.addEventListener("orientationchange", handleOrientationChange);
handleOrientationChange();
