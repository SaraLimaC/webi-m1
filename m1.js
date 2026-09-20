
let texto = document.getElementById("texto");
document.getElementById("red").onclick = rojo;

function rojo(){
    texto.style.color = "red";

}

document.getElementById("blue").onclick = azul;

function azul(){
    texto.style.color = "blue";

}

document.getElementById("green").onclick = verde;

function verde(){
    texto.style.color = "green";

}
