
console.log("JavaScript file loaded");

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        document.getElementById('bmiResult').innerHTML = `Your BMI is ${bmi}`;
        provideHealthAdvice(bmi);
        suggestExercise(bmi);
    } else {
        document.getElementById('bmiResult').innerHTML = 'Please enter valid height and weight';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', calculateBMI);
});

// Function to provide health advice based on BMI//
function provideHealthAdvice(bmi) {
    let advice = '';
    if (bmi < 18.5) {
        advice = 'You are underweight. It is important to eat a balanced diet.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        advice = 'You have a healthy weight. Keep up the good work!';
    } else if (bmi >= 25 && bmi < 29.9) {
        advice = 'You are overweight. Consider a balanced diet and regular exercise.';
    } else {
        advice = 'You are obese. It is recommended to consult a healthcare provider.';
    }
    document.getElementById('advice').innerHTML = advice;
}

// Function to suggest exercises based on BMI
function suggestExercise(bmi) {
    let exercise = '';
    if (bmi < 18.5) {
        exercise = 'Focus on strength training to build muscle mass and maintain flexibility.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        exercise = 'Maintain your fitness with a combination of cardio and strength training.';
    } else if (bmi >= 25 && bmi < 29.9) {
        exercise = 'Incorporate regular cardio exercises like running, swimming, or cycling.';
    } else {
        exercise = 'Start with low-impact exercises like walking and swimming, and gradually increase intensity.';
    }
    document.getElementById('exercise').innerHTML = exercise;
}
