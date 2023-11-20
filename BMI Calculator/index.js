const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const button = document.querySelector(".button");

const resultBox = document.querySelector(".result");
const outputBox = document.querySelector("#output");
const categoryBox = document.querySelector("#category");

function updateUI(output, category) {
  resultBox.style.display = "flex";
  outputBox.innerHTML = output;
  categoryBox.innerHTML = category;
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
  const bmiIndex = bmi.toFixed(2);
  let category;

  switch (bmiIndex) {
    case bmiIndex < 18.5:
      category = "Underweight";
      break;
    case bmiIndex >= 18.5 || bmiIndex <= 24.9:
      category = "Healthy weight";
      break;
    case bmiIndex >= 25.0 || bmiIndex <= 29.9:
      category = "Overweight";
      break;
    default:
      category = "Obesity";
  }
  updateUI(bmiIndex, category);
};

button.addEventListener("click", inputHandler);
