const adc = document.getElementById("adicionar");
const input = document.getElementById("input");
const lista = document.getElementById("lista");
let valor;
let compras;
let remove;
adc.addEventListener("click", function() {
    valor = input.value;
    if(valor.trim() !== ""){
        compras = document.createElement("li");
        compras.innerText = valor;
        
        remove = document.createElement("button");
        remove.innerText = 'Remover Tarefa';
        compras.appendChild(remove);
        lista.appendChild(compras);

        remove.addEventListener("click", function() {
            this.parentElement.remove();
        });



    }else{
        alert("Digite algo");
    };
});