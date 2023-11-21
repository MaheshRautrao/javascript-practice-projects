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
    updateUI("Enter weight", "invalid data");
    return;
  }
  if (height == "") {
    updateUI("Enter height", "invalid data");
    return;
  }
  if (weight < 1 || weight > 600) {
    updateUI(
      "Enter valid weight, max weight:600 , min weight: 1",
      "invalid data"
    );
    return;
  }
  if (height < 1 || height > 3) {
    updateUI(
      "Enter valid height, max height:3 , min height: 1",
      "invalid data"
    );
    return;
  }

  const bmi = weight / (height * height);
  const bmiIndex = Number(bmi.toFixed(2));
  let category;

  if (bmiIndex < 18.5) {
    category = "Underweight";
  } else if (bmiIndex >= 18.5 && bmiIndex <= 24.9) {
    category = "Healthy weight";
  } else if (bmiIndex >= 25.0 && bmiIndex <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  updateUI(bmiIndex, category);
};

button.addEventListener("click", inputHandler);
