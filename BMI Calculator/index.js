const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const button = document.querySelector(".button");
const outputBox = document.querySelector("#output");

function updateUI(output) {
  outputBox.innerHTML = output;
}

const inputHandler = () => {
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);

  if (weight == "") {
    updateUI("Enter weight");
    return;
  }
  if (height == "") {
    updateUI("Enter height");
    return;
  }

  const bmi = weight / (height * height);
  updateUI(bmi.toFixed(2));
};

button.addEventListener("click", inputHandler);
