// Arithmetic Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Division by 0";
    return a / b;
}

// Helper to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Output result
function showResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event Listeners
document.getElementById('add').addEventListener('click', () => {
    const [a, b] = getInputValues();
    showResult(add(a, b));
});

document.getElementById('subtract').addEventListener('click', () => {
    const [a, b] = getInputValues();
    showResult(subtract(a, b));
});

document.getElementById('multiply').addEventListener('click', () => {
    const [a, b] = getInputValues();
    showResult(multiply(a, b));
});

document.getElementById('divide').addEventListener('click', () => {
    const [a, b] = getInputValues();
    showResult(divide(a, b));
});
