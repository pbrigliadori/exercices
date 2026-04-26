let dados = [];
let editando = null;

function renderizar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    dados.forEach((item, index) => {
        lista.innerHTML += `
            <li>
                ${item}
                <div class="acoes">
                    <button onclick="editar(${index})">Editar</button>
                    <button onclick="deletar(${index})">Excluir</button>
                </div>
            </li>
        `;
    });
};