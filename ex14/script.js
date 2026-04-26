const numero1 = document.getElementById("input");
const numero2 = document.getElementById("input2");
const btn = document.getElementById("env");

const text = document.getElementById("paragrafo");


function soma () {
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);
    let result = valor1 + valor2;
    text.innerText = result;
};

btn.addEventListener("click", soma);