function toggleModalOrientationClass(orientation) {
  const modal = document.querySelector(".orientation");

  if (modal) {
    if (orientation === "landscape") {
      // Add the "landscape-mode" class
      modal.classList.add("landscape-mode");
    } else {
      // Remove the "landscape-mode" class if it exists
      modal.classList.remove("landscape-mode");
    }
  }
}

// Function to handle orientation change
function handleOrientationChange() {
  const orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  toggleModalOrientationClass(orientation);
}

// Add event listener for orientation change
window.addEventListener("orientationchange", handleOrientationChange);

// Call the function initially to apply the class based on the initial orientation
handleOrientationChange();
