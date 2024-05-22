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

document.getElementById('calculate').addEventListener('click', () => {
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
});