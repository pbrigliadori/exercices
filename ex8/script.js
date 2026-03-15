const btn = document.getElementById("btn");
const lista = document.getElementById("lista");
let itens;
btn.addEventListener("click", function() {
    for(let i = 1; i<=5; i++){

    itens = document.createElement("li");
    itens.innerText = 'Item ' + i;
    lista.appendChild(itens);

}});