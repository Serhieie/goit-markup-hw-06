// Function to toggle the "landscape-mode" class on the modal
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

// Function to handle orientation change
function handleOrientationChange() {
  const isLandscape = window.innerWidth > window.innerHeight;
  toggleModalOrientationClass(isLandscape);
}

// Call the orientation change handler initially
handleOrientationChange();

// Add a listener for the resize event to handle orientation changes
window.addEventListener("resize", handleOrientationChange);
