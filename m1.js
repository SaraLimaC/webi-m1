//conjunto de frases que se mostrarán en el juego
const frases = [
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

const texto = document.getElementById("texto");

const frase = document.getElementById("frase");

document.getElementById("red").onclick = rojo;

document.getElementById("blue").onclick = azul;

document.getElementById("black").onclick = negro;

document.getElementById("green").onclick= verde;


//cambian el color del texto
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
   checkear()
    
}

//modo oscuro al pulsar "d" fuera del área de texto
document.addEventListener("keydown", function(event) {
    if (event.key === "d" && document.activeElement !== texto) {
        document.body.classList.toggle("dark-mode");
    }
    
});

//cambian el tamaño del texto
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
   tamano ("24px");
}


function tamano(tamano){
    texto.style.fontSize = tamano;
    checkear()
}

document.getElementById("iniciar").onclick = inicio;

const tiempo = document.getElementById("tiempo");
const puntuacion = document.getElementById("puntos");

let punt = 0;
let t = 50;

//inicia el juego, resetea la puntuación y el tiempo,permite escribir en el área de texto y genera la primera palabra aleatoria 
function inicio(){
    mensaje.textContent = "";
    punt = 0;
    t = 50;
    texto.disabled = false;

    puntuacion.textContent = punt;
    tiempo.textContent = t;

    texto.value= "";

    generaPalabra();
    //inicia el temporizador
    let intervalo = setInterval(() => {
        t--;
        tiempo.textContent = t;

        if(t ==0){
            clearInterval(intervalo);
            texto.disabled = true;
            //alerta con la puntuación final al terminar el tiempo
            alert(`Puntuación final: ${punt}`);
        }
    },1000);
}


const coloresArray = [
    "rgb(255, 0, 0)",   
    "rgb(0, 0, 0)",     
    "rgb(0, 128, 0)",   
    "rgb(0, 0, 255)"    
];

const tamanoArray = [
    "16px",
    "24px",
    "32px"
];

//función que genera una palabra aleatoria de la lista de frases con un color y tamaño de fuente aleatorio
function generaPalabra(){

    document.body.appendChild(mensaje);

    let rand = Math.floor(Math.random() * frases.length);
    frase.textContent = frases[rand];
    //funciones que generan al azar el color y tamaño de fuente de la palabra generada
    let colorRand = Math.floor(Math.random()*coloresArray.length);
    let tamanoRand = Math.floor(Math.random()*tamanoArray.length);
    frase.style.color= coloresArray[colorRand];
    frase.style.fontSize= tamanoArray[tamanoRand];
    
    
}

texto.addEventListener("input", checkear);

const mensaje = document.createElement("p");


//mensajes si se acierta la palabra, color y tamaño de fuente
const textoMensaje = [
    "Correcto",
    "Genial",
    "Increíble",
    "¡Bien hecho!",
    "¡Sigue así!",
];

//función que comprueba si el texto ingresado coincide con la frase mostrada, el color y tamaño de fuente
function checkear(){
    if (texto.value.trim() === frase.textContent && frase.style.color == texto.style.color && frase.style.fontSize == texto.style.fontSize) {
        punt++;
        puntuacion.textContent = punt;
        let mensajeRandom=textoMensaje[Math.floor(Math.random() * textoMensaje.length)];
        mensaje.textContent = mensajeRandom;
        document.body.appendChild(mensaje);

        texto.value = "";
        generaPalabra();
    }
}