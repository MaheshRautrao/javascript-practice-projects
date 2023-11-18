const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const button = document.querySelector(".button");
const outputBox = document.querySelector("#output");

function updateUI(output) {
  output.innerHTML = output;
}

const inputHandler = () => {
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);

  if (height == "") {
    updateUI("Enter height");
    return;
  }

  if (weight == "") {
    updateUI("Enter weight");
    return;
  }

  const bmi = weight / (height * height);
  console.log(bmi);
  updateUI(bmi);
};

button.addEventListener("click", inputHandler);
