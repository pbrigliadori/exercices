const input = document.getElementById("input");
const adc = document.getElementById("adicionar");
const lista = document.getElementById("lista");
let valor;
let tarefas;
let remover;
let mark;

adc.addEventListener("click", function() {
    valor = input.value;
    if(valor.trim() !== "") {
        tarefas = document.createElement("li");
        tarefas.innerText = valor;
        lista.appendChild(tarefas);

        remover = document.createElement("button");
        remover.innerText = 'Remover Tarefa';
        tarefas.appendChild(remover);
        remover.addEventListener("click", function() {
            this.parentElement.remove();
        });

        mark = document.createElement("button");
        mark.innerText = 'Concluir';
        tarefas.appendChild(mark);

        mark.addEventListener("click", function(){
            this.parentElement.classList.toggle("feita");
        });
        input.value = "";
    }else{
        alert("Adicione Alguma Tarefa!");
    };
});