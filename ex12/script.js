const input = document.getElementById("input");
const btn = document.getElementById("adc");
const ul = document.getElementById("lista");
//const remove = document.getElementById("remove");
let botao;
let result;
let tarefas;
btn.addEventListener("click", function() {
    result = input.value;
    if(result.trim() !== "") {
        tarefas = document.createElement("li");
        tarefas.innerText = result;
        botao = document.createElement("button");
        botao.innerText = "Remover Tarefa"
        tarefas.appendChild(botao);
        ul.appendChild(tarefas);
        

        botao.addEventListener("click", function() {
            this.parentElement.remove();
            
        });

    }else {
        window.alert("Digite algo")
    };

    
});
