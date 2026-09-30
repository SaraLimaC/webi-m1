let frases = [
    "Hola mundo",
    "Buenos días",
    "Sigue adelante",
    "Todo es posible",
    "Buen trabajo",
    "Nunca pares",
    "Día increíble",
    "Crea algo",
    "Mente creativa",
    "Paso a paso",
    "Vamos allá",
    "Modo creativo",
    "Piensa diferente",
    "Disfruta aprendiendo",
    "Lo conseguirás"
];

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
    if (event.key === "d" && document.activeElement !== texto) {
        document.body.classList.toggle("dark-mode");
    }
    
});


document.getElementById("small").onclick = pequeño;
document.getElementById("large").onclick = grande;
document.getElementById("medium").onclick = mediano;

function pequeño(){
    tamano("small");
}
function grande(){
    tamano ("large");
}
function mediano(){
   tamano ("medium");
}

let tamano;

function tamano(tamano){
    texto.style.fontSize = tamano;
}