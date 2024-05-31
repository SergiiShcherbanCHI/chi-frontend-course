const calculatorState = {
    number1: '',
    number2: '',
    operation: ''
};

document.getElementById('number1').addEventListener('blur', (event) => {
    calculatorState.number1 = event.target.value;
});

document.getElementById('number2').addEventListener('blur', (event) => {
    calculatorState.number2 = event.target.value;
});

document.getElementById('operation').addEventListener('blur', (event) => {
    calculatorState.operation = event.target.value;
});

document.getElementById('calculate').addEventListener('click', calculateResult);

function calculateResult() {
    const {number1, number2, operation} = calculatorState;

    if (!number1 || !number2 || !operation) {
        alert('Please enter both numbers and an operation.');
        return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operation.');
            return;
    }

    alert(`The result is: ${result}`);
}

document.getElementById('saveCache').addEventListener('click', saveToCache);
document.getElementById('showCache').addEventListener('click', showCache);

function saveToCache() {
    const number1 = document.getElementById('number1').value;
    const operation = document.getElementById('operation').value;
    const number2 = document.getElementById('number2').value;

    const cacheData = {
        number1: number1,
        operation: operation,
        number2: number2,
    };

    localStorage.setItem('calculatorCache', JSON.stringify(cacheData));
}

function showCache() {
    const cacheData = localStorage.getItem('calculatorCache');

    if (cacheData) {
        console.log('Cached Data:', JSON.parse(cacheData));
    } else {
        console.log('No data in cache.');
    }
}