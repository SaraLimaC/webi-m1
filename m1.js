//array de frases que se mostrarán en el juego
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

//array de colores en formato rgb
const coloresArray = [
    "rgb(255, 0, 0)",   
    "rgb(0, 0, 0)",     
    "rgb(0, 128, 0)",   
    "rgb(0, 0, 255)"    
];

//array de tamaños de fuente 
const tamanoArray = [
    "16px",
    "24px",
    "32px"
];

//mensajes si se acierta la palabra, color y tamaño de fuente
const textoMensaje = [
    "Correcto",
    "Genial",
    "Increíble",
    "¡Bien hecho!",
    "¡Sigue así!",
];

const texto = document.getElementById("texto");

const frase = document.getElementById("frase");


//define la variable de tamaño del texto accediendo a los botones con el atributo data-size
const botonesTamano = document.querySelectorAll("[data-size]");

//cdefine la variable de color del texto accediendo a los botones con el atributo data-color
const botonesColor = document.querySelectorAll("[data-color]");

//define la variable de tiempo y puntuación accediendo a los elementos con el id "tiempo" y "puntos"
const tiempo = document.getElementById("tiempo");
const puntuacion = document.getElementById("puntos");

//crea un elemento p para mostrar los mensajes
const mensaje = document.createElement("p");


//inicia el juego al pulsar el botón "iniciar"
document.getElementById("iniciar").addEventListener("click", inicio);


//llama a checkear() al escribir en el área de texto
texto.addEventListener("input", checkear);

let punt = 0;
let t = 50;
let intervalo;

botonesColor.forEach(function(boton) {
     boton.addEventListener("click", function() {
        //llama a la función cambiarColor para que lo cambie
        cambiarColor(boton.dataset.color);
    });
});

//funcion aleatoria para arrays
function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}


//función que cambia el color del texto y llama a checkear()
function cambiarColor(color){
   texto.style.color = color;
   checkear();
    
}

//modo oscuro al pulsar "d" fuera del área de texto
document.addEventListener("keydown", function(event) {
    if (event.key === "d" && document.activeElement !== texto) {
        document.body.classList.toggle("dark-mode");
    }
    
});

//cambia el tamaño del texto usando data-size en los botones
botonesTamano.forEach(function(boton) {
    boton.addEventListener("click", function() {
        //llama a la función tamano para que lo cambie
        tamano(boton.dataset.size);
    });
});

//función que cambia el tamaño del texto y llama a checkear()
function tamano(tamanoElegido){
    texto.style.fontSize = tamanoElegido;
    checkear();
}

//inicia el juego, resetea la puntuación y el tiempo,permite escribir en el área de texto y genera la primera palabra aleatoria 
function inicio(){
    mensaje.textContent = "";
    punt = 0;
    t = 50;
    texto.disabled = false;

    clearInterval(intervalo);

    puntuacion.textContent = punt;
    tiempo.textContent = t;

    texto.value= "";

    generaPalabra();
    //inicia el temporizador
    intervalo = setInterval(() => {
        t--;
        tiempo.textContent = t;

        if(t === 0){
            mensaje.textContent = "";
            clearInterval(intervalo);
            texto.disabled = true;
            //alerta con la puntuación final al terminar el tiempo
            alert(`¡Se acabó el tiempo!\nHas conseguido ${punt} puntos.`);
        }
    },1000);
}

//función que genera una palabra aleatoria de la lista de frases con un color y tamaño de fuente aleatorio
function generaPalabra(){

    let rand = elegirAleatorio(frases) ;
    frase.textContent = rand;
    //funciones que generan al azar el color y tamaño de fuente de la palabra generada
    let colorRand = elegirAleatorio(coloresArray) ;
    let tamanoRand = elegirAleatorio(tamanoArray);
    frase.style.color= colorRand;
    frase.style.fontSize= tamanoRand;
    
    
}

//función que comprueba si el texto ingresado coincide con la frase mostrada, el color y tamaño de fuente
function checkear(){
    if (texto.value.trim() === frase.textContent && frase.style.color === texto.style.color && frase.style.fontSize === texto.style.fontSize) {
        punt++;
        puntuacion.textContent = punt;
        let mensajeRandom=elegirAleatorio(textoMensaje);
        mensaje.textContent = mensajeRandom;
        document.body.appendChild(mensaje);

        texto.value = "";
        generaPalabra();
    }
}