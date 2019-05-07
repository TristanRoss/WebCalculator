
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    if(operator === "+") {
        return add(x, y);
    } else if(operator === "-") {
        return subtract(x, y);
    } else if(operator === "×") {
        return multiply(x, y);
    } else if(operator === "÷") {
        return divide(x, y);
    } else {
        // do nothing
    }
}

let strDigits = [0, 1, 2, "3", "4", "5", "6", "7", "8", "9"];

const display = document.querySelector("#view");

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (strDigits.includes(button.textContent)) {
            if (display.textContent === "0") {
                display.textContent = button.textContent;
            }
            display.textContent += button.textContent;
        }
    });
});
