document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById('calculate');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultText = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert height to meters
        const bmi = weight / (height * height);

        if (!isNaN(bmi)) {
            resultText.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
        } else {
            resultText.textContent = 'Please enter valid values.';
        }
    });
});
