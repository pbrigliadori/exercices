let nome = document.getElementById("input");
let btn = document.getElementById("btn");

function cumprimentar() {
    let value = nome.value;
    alert("Olá, " + value);
}

btn.addEventListener("click", cumprimentar);
