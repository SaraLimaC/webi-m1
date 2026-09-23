
let texto = document.getElementById("texto");
document.getElementById("red").onclick = rojo;

document.getElementById("black").onclick = negro;

function negro(){
    texto.style.color= "black";
}

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

document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
        document.body.classList.toggle("dark-mode");
    }
});

document.getElementById("small").onclick = pequeño;

function pequeño(){
    texto.style.fontSize = "small";
}

document.getElementById("large").onclick = grande;

function grande(){
    texto.style.fontSize = "large";
}
document.getElementById("medium").onclick = mediano;

function mediano(){
    texto.style.fontSize = "medium";
}

