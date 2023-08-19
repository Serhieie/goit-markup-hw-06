function toggleModalOrientationClass(isLandscape) {
  const modal = document.querySelector(".orientation");
  if (modal) {
    if (isLandscape) {
      modal.classList.add("landscape-mode");
    } else {
      modal.classList.remove("landscape-mode");
    }
  }
}

function handleOrientationChange() {
  const isLandscape = window.innerWidth > window.innerHeight;
  toggleModalOrientationClass(isLandscape);
}
handleOrientationChange();

window.addEventListener("resize", handleOrientationChange);
