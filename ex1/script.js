let numero = 0;
const mais = document.getElementById("more");
const menos = document.getElementById("less");
const resetar = document.getElementById("btnreset");
const resultado = document.getElementById("result");

mais.addEventListener("click", function() {
    numero++;
    resultado.innerText = numero;
});

menos.addEventListener("click", function () {
    numero--;
    resultado.innerText = numero;
});

resetar.addEventListener("click", function() {
    
    numero = 0;
    resultado.innerText = numero;
});