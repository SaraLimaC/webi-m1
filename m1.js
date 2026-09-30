
let texto = document.getElementById("texto");

document.getElementById("red").onclick = rojo;

document.getElementById("blue").onclick = azul;

document.getElementById("black").onclick = negro;

document.getElementById("green").onclick= verde;
function negro(){
    cambiarColor("negro");
}

function rojo(){
   cambiarColor("red");
}

function azul(){
    cambiarColor("blue");
}

function verde(){
    cambiarColor("green");

}
let color;

function cambiarColor(color){
   texto.style.color = color;
    
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

function tamano(){
    texto.style.fontSize = tamano:
}