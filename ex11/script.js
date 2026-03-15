const input = document.getElementById("input");
const btn = document.getElementById("adc");
const ul = document.getElementById("lista");
const remove = document.getElementById("remove");
let result; 
let tarefas;

btn.addEventListener("click", function() {
    result = input.value;
    if(result.trim() !== "") {
        tarefas = document.createElement("li");
        tarefas.innerText = result;
        ul.appendChild(tarefas)
    }else {
        alert("Você deve digitar algo");
    }
});

remove.addEventListener("click", function(){
    let ultima = ul.lastElementChild;
    if (ultima) {
        ultima.remove();
    }else{
        alert("Nao tem mais nada pra remover");
    }
})
