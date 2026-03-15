const btn = document.getElementById("btn");
const lista = document.getElementById("lista");
let itens;
btn.addEventListener("click", function() {
    itens = document.createElement("li");
    itens.innerText = 'Item ';
    lista.appendChild(itens);
})