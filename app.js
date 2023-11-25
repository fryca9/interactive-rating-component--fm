const ratingComponent = document.querySelector(".box__rating");
const submittedComponent = document.querySelector(".box__submitted");
const submitBtn = document.querySelector(".rating__submit");
const ratingButtons = document.querySelectorAll(".rating__number");
const score = document.querySelector(".submitted__score");
let rating;

function updateRating(selectedButton) {
  ratingButtons.forEach((button) => {
    button.classList.remove("selected"); // removing .selected from each button
  });

  rating = selectedButton.textContent;
  selectedButton.classList.add("selected"); // adding .selected to the selected button
  score.textContent = rating; // updating .rating__submit
}

function updateComponent() {
  if (rating) {
    ratingComponent.classList.add("hide");
    submittedComponent.classList.add("show");
  }
}

submitBtn.addEventListener("click", updateComponent);

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => updateRating(btn));
});
