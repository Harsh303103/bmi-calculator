const calculateBtn = document.getElementById('calculate-btn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = '<p>Please enter valid weight and height values.</p>';
    return;
  }

  const bmi = weight / (height * height);
  const category = getBMICategory(bmi);

  resultDiv.innerHTML = `<p>Your BMI is ${bmi.toFixed(1)}.</p><p>You are ${category}.</p>`;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal weight';
  } else if (bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
