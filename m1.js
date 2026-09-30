let frases = [
    "Inicio",
    "Camino",
    "Horizonte",
    "Idea",
    "Visión",
    "Tiempo",
    "Espacio",
    "Cambio",
    "Origen",
    "Destino",
    "Nuevo rumbo",
    "Punto clave",
    "Siguiente paso",
    "En proceso",
    "Buena perspectiva",
    "Tiempo presente",
    "Nuevo enfoque",
    "Espacio abierto",
    "Otra opción",
    "Sin límites",
    "Nueva etapa",
    "Gran visión",
    "Todo fluye",
    "En marcha",
    "Camino abierto",
    "Momento ideal",
    "Perspectiva amplia",
    "Nueva dirección",
    "Buen comienzo",
    "Próximo horizonte"
];

let texto = document.getElementById("texto");

let frase = document.getElementById("frase");

document.getElementById("red").onclick = rojo;

document.getElementById("blue").onclick = azul;

document.getElementById("black").onclick = negro;

document.getElementById("green").onclick= verde;



function negro(){
    cambiarColor("rgb(0, 0, 0)");
}

function rojo(){
   cambiarColor("rgb(255, 0, 0)");
}

function azul(){
    cambiarColor("rgb(0, 0, 255)");
}

function verde(){
    cambiarColor("rgb(0, 128, 0)");

}


function cambiarColor(color){
   texto.style.color = color;
    
}


document.addEventListener("keydown", function(event) {
    if (event.key === "d" /*&& document.activeElement !== texto*/) {
        document.body.classList.toggle("dark-mode");
    }
    
});


document.getElementById("small").onclick = pequeño;
document.getElementById("large").onclick = grande;
document.getElementById("medium").onclick = mediano;

function pequeño(){
    tamano("16px");
}
function grande(){
    tamano ("32px");
}
function mediano(){
   tamano ("24spx");
}


function tamano(tamano){
    texto.style.fontSize = tamano;
}

document.getElementById("iniciar").onclick = inicio;

let tiempo = document.getElementById("tiempo");
let puntuacion = document.getElementById("puntos");

let punt;
let t;

function inicio(){
    punt=0;
    t=50;

    texto.disabled = false;

    puntuacion.textContent = punt;
    tiempo.textContent = t;

    texto.value= "";

    generaPalabra();

    let intervalo = setInterval(() => {
        t--;
        tiempo.textContent = t;

        if(t ==0){
            clearInterval(intervalo);
            texto.disabled = true;

            alert("Puntuación final: " + punt);
        }
    },1000);
}


let coloresArray = [
    "rgb(255, 0, 0)",   
    "rgb(0, 0, 0)",     
    "rgb(0, 128, 0)",   
    "rgb(0, 0, 255)"    
];

let tamanoArray = [
    "16px",
    "24px",
    "32px"
];

function generaPalabra(){
    let rand = Math.floor(Math.random() * frases.length);
    frase.textContent = frases[rand];

    let colorRand = Math.floor(Math.random()*coloresArray.length);
    let tamanoRand = Math.floor(Math.random()*tamanoArray.length);
    frase.style.color= coloresArray[colorRand];
    frase.style.fontSize= tamanoArray[tamanoRand];
    
    
}

texto.addEventListener("input", function() {
    if (texto.value.trim() === frase.textContent && frase.style.color==texto.style.color && frase.style.fontSize==texto.style.fontSize ) {
        punt++;
        puntuacion.textContent= punt;

        texto.value = "";
        generaPalabra();
    }
});