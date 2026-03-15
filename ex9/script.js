const input = document.getElementById("input");
const btn = document.getElementById("btn");
const lista = document.getElementById("lista");
let result;
let result1;

btn.addEventListener("click", function() {

    result = input.value;
    result1 = document.createElement("li");
    lista.appendChild(result1);
    result1.innerText = result;
});