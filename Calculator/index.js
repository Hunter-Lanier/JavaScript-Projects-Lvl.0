// assigning constants to buttons
const allClearButton = document.getElementById("ac");
const posNegButton = document.getElementById("posNegButton");
const percentButton = document.getElementById("percentButton");
const divideButton = document.getElementById("divideButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const multiplyButton = document.getElementById("multiplyButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const minusButton = document.getElementById("minusButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twobutton");
const threeButton = document.getElementById("threeButton");
const plusButton = document.getElementById("plusButton");
const zeroButton = document.getElementById("zeroButton");
const decimalButton = document.getElementById("decimalButton");
const equalsButton = document.getElementById("equalsButton");

// creating equation variables
let firstNumber;
let secondNumber;
let currentNumber;
let currentOperand;

let positive;
let firstNumberFound = false;

// creating event listeners for buttons
allClearButton.addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  currentNumber = "";
  currentOperand = "*";
});
posNegButton.addEventListener("click", function () {
  currentNumber = -currentNumber;
});
percentButton.addEventListener("click", function () {
  currentOperand = `*.${currentNumber}`;
});
divideButton.addEventListener("click", function () {
  currentOperand = "/";
  if (!firstNumber) {
    currentNumber = firstNumber
  }
  else currentNumber = secondNumber
});
sevenButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"7";
  } else {
    secondNumber = +"7";
  }
});
eightButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"8";
  } else {
    secondNumber = +"8";
  }
});
nineButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"9";
  } else {
    secondNumber = +"9";
  }
});
multiplyButton.addEventListener("click", function () {
  currentOperand = "*";
   if (!firstNumber) {
     currentNumber = firstNumber;
   } else currentNumber = secondNumber;
});
fourButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = "4";
  } else {
    secondNumber = "4";
  }
});
fiveButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"5";
  } else {
    secondNumber = +"5";
  }
});
sixButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"6";
  } else {
    secondNumber = +"6";
  }
});
minusButton.addEventListener("click", function () {
  currentOperand = "-";
   if (!firstNumber) {
     currentNumber = firstNumber;
   } else currentNumber = secondNumber;
});
oneButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"1";
  } else {
    secondNumber = +"1";
  }
});
twoButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"2";
  } else {
    secondNumber = +"2";
  }
});
threeButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = +"3";
  } else {
    secondNumber = +"3";
  }
});
plusButton.addEventListener("click", function () {
  currentOperand = "+";
   if (!firstNumber) {
     currentNumber = firstNumber;
   } else currentNumber = secondNumber;
});
zeroButton.addEventListener("click", function () {
  if (!firstNumberFound) {
    firstNumber = 0;
  } else {
    secondNumber = 0;
  }
});
decimalButton.addEventListener("click", function () {
  currentNumber + ".";
});

equalsButton.addEventListener("click", function () {});
