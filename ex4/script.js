let numero = 0;
const mais = document.getElementById("more");
const menos = document.getElementById("less");
const reset = document.getElementById("reset");
const text = document.getElementById("text");



mais.addEventListener("click", function() {
    if(numero<10){
        numero++;
        text.innerText = numero;
    }else{
        alert("nao pode exceder a 10")
    }
});

menos.addEventListener("click", function() {
    numero--;
    text.innerText = numero;
});

reset.addEventListener("click", function(){
    numero = 0;
    text.innerText = numero;
});

