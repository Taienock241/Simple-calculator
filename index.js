function number1(){
    let n1 = prompt("Enter a number") 
    document.getElementById("num1").textContent = n1 
}
let num2 



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
