// assign elements to varaibles
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const yellowButton = document.getElementById("yellowButton");
const innerResult = document.getElementById("innerResult");

// add event listeners
redButton.addEventListener("click", function () {
  document.getElementById("result").style.backgroundColor = "red";
  innerResult.innerHTML = "Red";
});
blueButton.addEventListener("click", function () {
  document.getElementById("result").style.backgroundColor = "blue";
  innerResult.innerHTML = "Blue";
});
greenButton.addEventListener("click", function () {
  document.getElementById("result").style.backgroundColor = "green";
  innerResult.innerHTML = "Green";
});
yellowButton.addEventListener("click", function () {
  document.getElementById("result").style.backgroundColor = "yellow";
  innerResult.innerHTML = "Yellow";
});

// // color changing function
//function changeColor(color) {
// document.getElementById("result").style.backgroundColor = color;
//console.log(color)
