const numberButtons = document.querySelectorAll('.btn-num');
const input = document.getElementById('screen-input');
const output = document.getElementById('screen-output');
const clearAllButton = document.querySelector('[data-ca]');
const clearButton = document.querySelector('[data-c]');
const changeSignButton = document.querySelector('[data-change-sign]');
const divButton = document.querySelector('[data-divide]');
const mulButton = document.querySelector('[data-multiply]');
const subButton = document.querySelector('[data-subtract]');
const addButton = document.querySelector('[data-add]');
const decButton = document.querySelector('[data-decimal]');
const equalsButton = document.querySelector('[data-equals]');

class Calculator {
  constructor(input, output, clearAllButton, clearButton, changeSignButton, divButton, mulButton, subButton, addButton, decButton, equalsButton, numberButtons) {
    this.input = input;
    this.output = output;
    this.clearAllButton = clearAllButton;
    this.clearButton = clearButton;
    this.changeSignButton = changeSignButton;
    this.divButton = divButton;
    this.mulButton = mulButton;
    this.subButton = subButton;
    this.addButton = addButton;
    this.decButton = decButton;
    this.equalsButton = equalsButton;
    this.numberButtons = numberButtons;
    
  }

  inputNumber() {
    console.log(this);
    this.input.textContent += this.textContent;
  }

}

const calculator = new Calculator(input, output, clearAllButton, clearButton, changeSignButton, divButton, mulButton, subButton, addButton, decButton, equalsButton, numberButtons);

calculator.numberButtons.forEach(btn => {
  btn.addEventListener('click', calculator.inputNumber);
});