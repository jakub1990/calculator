const operator = ['+', '-', '*', '/'];
const num1;
const num2;

function add(num1,num2) {
  return num1 + num2;
}

function subtract(num1,num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2;
}

function operate(num1,num2,operator) {
    switch(operator) {
        case '+':
        add(num1,num2);
        break;
        case '-':
        subtract(num1,num2);
        break;
        case '*':
        multiply(num1,num2);
        break;
        case '/':
        divide(num1,num2);    
    }
}


Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.