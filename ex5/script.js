const btn = document.getElementById("adc");
const input = document.getElementById("input");
const lista = document.getElementById("lista-tarefas");

btn.addEventListener("click", function() {
    const tarefaTexto = input.value;

    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");

        novaTarefa.innerText = tarefaTexto;

        lista.appendChild(novaTarefa);

        input.value = "";

        input.focus();  
    }else{
        alert("Digite algo antes de adicionar!");
    }
});

