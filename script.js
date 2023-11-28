let firstNum='';
let operator='';
let lastNum='';
let operated = false;
function add(a, b){
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if (b == 0){
        return "Error";
    }
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
        if(operated === true){
            screenText = document.getElementById('screen')
            updateNumber(event.target.textContent);
            operated = false;
        }
        else{
            updateNumber(event.target.textContent);
        }
    })
});
    operatorButton = document.getElementsByClassName('operator');
    Array.from(operatorButton).forEach(element => {
    element.addEventListener('click' ,(event)=>{
        if(operator.length == 1){
            equals();
        }
        updateOperator(event.target.textContent);
    })
});
    equalButton = document.getElementsByClassName('equal');
    Array.from(equalButton).forEach(element => {
    element.addEventListener('click' ,equals)
});
function equals(){
    screenText = document.getElementById("screen");
    screenText.textContent = parseFloat(operate(firstNum, lastNum, operator).toFixed(3)).toString();
    firstNum = screenText.textContent;
    operator = '';
    lastNum = '';
    operated = true;
}
})

function updateNumber (text){
    if(operator.length >=1){
        updateNumberTwo(text);
    } 
    else{
        screenText = document.getElementById("screen");
        screenText.textContent += text;
        firstNum = screenText.textContent;
    }
}
function updateNumberTwo (text){
    screenText.textContent += text;
    lastNum += text;
}
function updateOperator (text){
    screenText.textContent += text;
    operator = text;
}