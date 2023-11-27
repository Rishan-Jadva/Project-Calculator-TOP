let firstNum;
let operator;
let lastNum;
let expression;
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(a, b, operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    numberButton = document.getElementsByClassName('number');
    Array.from(numberButton).forEach(element => {
    element.addEventListener('click' ,(event)=>{
        updateScreen(event.target.textContent);
    })
});
})

function updateScreen (text){
    screenText = document.getElementById("screen");
    screenText.textContent += text;
    expression = screenText.textContent;
}