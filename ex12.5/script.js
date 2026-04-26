const input = document.getElementById("input");
const adicionar = document.getElementById("adc");
const lista = document.getElementById("lista");
let coisas;
adicionar.addEventListener("click", function() {
    let valor = input.value;
    if(valor.trim() !== "") {
        coisas = document.createElement("li");
        lista.appendChild(coisas);
        coisas.innerText = valor;

        const remove = document.createElement("button");
        remove.innerText = 'Remover tarefa';
        coisas.appendChild(remove);
        remove.addEventListener("click", function () {
            this.parentElement.remove();
        });
        input.value = "";
    }
})