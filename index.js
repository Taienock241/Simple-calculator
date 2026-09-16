let num1 = 20
let num2 = 10

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

let sumEl = document.getElementById("sum-el");

function add(){
sumEl.textContent ="Total: "+ (num1 + num2);
}
function subtract(){
sumEl.textContent ="Total: "+ (num1 - num2);
}
function multiply(){
sumEl.textContent ="Total: "+ (num1 * num2);
}
function divide(){
sumEl.textContent ="Total: "+ (num1 / num2);
}
