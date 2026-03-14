let numero1;
let numero2;
let resultado;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const more = document.getElementById("mais");
const less = document.getElementById("menos");
const mul = document.getElementById("multi");
const div = document.getElementById("divi");
const result = document.getElementById("result");

more.addEventListener("click", function() {
    numero1 = Number(input1.value);
    numero2 = Number(input2.value);
    resultado = numero1 + numero2;
    result.innerText = resultado;
});


less.addEventListener("click", function() {
    numero1 = Number(input1.value);
    numero2 = Number(input2.value);
    resultado = numero1 - numero2;
    result.innerText = resultado;
});

mul.addEventListener("click", function() {
    numero1 = Number(input1.value);
    numero2 = Number(input2.value);
    resultado = numero1*numero2;
    result.innerText = resultado;
});

div.addEventListener("click", function() {
    numero1 = Number(input1.value);
    numero2 = Number(input2.value);
    resultado = numero1 / numero2;
    result.innerText = resultado;

});

