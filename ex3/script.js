const input = document.getElementById("input");
const btn = document.getElementById("mostrar");

btn.addEventListener("click", function() {
    if (input.type === "password") {
        input.type = "text"
        btn.textContent = "Esconder"
    }else {
        input.type = "password"
        btn.textContent = "Mostrar"
    }
})



