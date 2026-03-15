const btn = document.getElementById("btn");
const div = document.getElementById("container");
let contador = 1;

btn.addEventListener("click", function() {
    let titulos = document.createElement("p");
    titulos.innerText = 'Titulo ' + contador;
    div.appendChild(titulos);
    contador++;
})
