document.addEventListener("DOMContentLoaded", function () {
  const userPhoneInput = document.getElementById("user-phone");

  userPhoneInput.addEventListener("input", function () {
    const numericValue = userPhoneInput.value.replace(/\D/g, "");
    userPhoneInput.value = numericValue; //
  });
});
