const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")
});
  rateAgain.addEventListener("click", () => {
    mainContainer.style.display = "block"
    thanksContainer.classList.add("hidden")
  });
  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
    })
  });