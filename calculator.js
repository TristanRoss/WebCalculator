
function add(x, y) {
    return Number(x) + Number(y);
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

let strDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const display = document.querySelector("#view");

const buttons = document.querySelectorAll('button');

let firstDisplayValue = "";
let secondDisplayValue = "";
let operator = "";
// document.addEventListener('click', event => console.log(event.target.textContent));

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (strDigits.includes(button.textContent)) {
            if (display.textContent === "0" || display.textContent === firstDisplayValue) {
                display.textContent = button.textContent;
            } else if (button.textContent === "0" && display.textContent === "0") {
                firstDisplayValue = "0";
            } else {
            display.textContent += button.textContent;
            }
        } else if(button.textContent === "=") {
            secondDisplayValue = display.textContent;
            if (secondDisplayValue === "0" && operator === "÷") {
                alert("DON'T DIVIDE BY ZERO");
                firstDisplayValue = "";
                secondDisplayValue = "";
                display.textContent = "0";
                operator = "";
            } else {
                let num = operate(firstDisplayValue, secondDisplayValue, operator).toFixed(4);
                if (num % 1 != 0) {
                    display.textContent = num;
                } else {
                    display.textContent = parseInt(num);
                }
                operator = "";
            }
        } else if (button.textContent === "C") {
            display.textContent = "0";
            firstDisplayValue = "";
            secondDisplayValue = "";
        } else {
            operator = button.textContent;
            firstDisplayValue = display.textContent;
        }
    });
});