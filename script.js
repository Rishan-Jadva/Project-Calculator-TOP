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
    decimalButton = document.getElementById('decimal');
    decimalButton.addEventListener('click', () =>{
        screenText = document.getElementById('screen');
        if(!screenText.textContent.includes(".") || (operator.length>=1 && !lastNum.includes("."))){
        updateNumber('.');}
    });
    const deleteButton = document.getElementById('delete');
    deleteButton.addEventListener('click', () => {
    const screenText = document.getElementById('screen');
    screenText.textContent = screenText.textContent.slice(0, -1);
    if (operator.length >= 1) {
        lastNum = screenText.textContent.slice(firstNum.length + operator.length);
    } else {
        firstNum = screenText.textContent;
    }
});
function equals(){
    screenText = document.getElementById("screen");
    screenText.textContent = parseFloat(operate(firstNum, lastNum, operator).toFixed(3)).toString();
    if(screenText.textContent =='Infinity') screenText.textContent = 'Cannot Divide By 0';
    firstNum = screenText.textContent;
    operator = '';
    lastNum = '';
    operated = true;
}
clearButton = document.getElementById("clear");
clearButton.addEventListener('click', ()=>{
    screenText.textContent = '';
    firstNum='';
    operator='';
    lastNum='';
    operated = false;
})
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