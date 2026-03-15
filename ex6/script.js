const btn = document.getElementById("btn");
const div = document.getElementById("container");
let para;
btn.addEventListener("click", function() {
    para = document.createElement("p");
    para.innerText = "Novo parágrafo";
    div.appendChild(para);
})