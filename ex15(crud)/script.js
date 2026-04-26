let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarDados () {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

function adicionarTarefa () {
    let input = document.getElementById("inputTarefa");
    let texto = input.value;

    if(texto === "") return;

    tarefas.push(texto);
    input.value = "";
    salvarDados();
    renderizar();
}

function renderizar () {
    let lista  = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        lista.innerHTML+= `
        <li>
        ${tarefa}
        <button onclick="editarTarefa(${index})">Editar</button>
        <button onclick="deletarTarefa(${index})">Excluir</button>
        </li>  
        `;
    });
};

function editarTarefa (index) {
    let novoTexto = prompt("Editar Tarefa ", tarefas[index]);
    if (novoTexto === null || novoTexto === "") return;

    tarefas[index] = novoTexto;

    salvarDados();
    renderizar();
};

function deletarTarefa(index) {
    tarefas.splice(index, 1);

    salvarDados();
    renderizar();
}