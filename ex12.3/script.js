const input = document.getElementById("input");
const adc = document.getElementById("adicionar");
const lista = document.getElementById("lista");

adc.addEventListener("click", function(){
    let valorInput = input.value;
    if(valorInput.trim() !== "") {
        let createElement = document.createElement("li");
        lista.appendChild(createElement);
        createElement.innerText = valorInput;
        
        let remove = document.createElement("button");
        createElement.appendChild(remove);
        remove.innerText = 'Remover Atendimento';

        remove.addEventListener("click",function(){
            this.parentElement.remove();
        })

    };
})