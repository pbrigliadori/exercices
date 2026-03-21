const adicionar = document.getElementById("adc");
const input = document.getElementById("input");
const lista = document.getElementById("lista");
let valorInput;
let atendimentos;
let remover;

adicionar.addEventListener("click", function(){
    valorInput = input.value;
    if(valorInput.trim() !== "") {
    atendimentos = document.createElement("li");
    lista.appendChild(atendimentos);
    atendimentos.innerText = valorInput;

    remover = document.createElement("button");
    remover.innerText = 'Remover Atendimento'
    atendimentos.appendChild(remover);

    remover.addEventListener("click", function() {
        this.parentElement.remove();
    })



    } else {
        alert("Digite algo");
    }
})