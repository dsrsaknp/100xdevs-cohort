const container = document.querySelector(".container");
const signUpButton = document.querySelector(".green-bg button");

signUpButton.addEventListener("click", () => {
  container.classList.toggle("change");
});
