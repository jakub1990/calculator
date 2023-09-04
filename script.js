const operator = ['+', '-', '*', '/'];
//const num1;
//const num2;
const buttons = document.querySelectorAll('.digit');



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

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const display = document.querySelector('.display');
    display.value += this.textContent;
  });
});
