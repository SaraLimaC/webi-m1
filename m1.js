
let texto = document.getElementById("texto");
document.getElementsByClassName("red").addEventListener("click", rojo() );

function rojo(){
    texto.style.color = "red";

}

document.getElementsByClassName("blue").addEventListener("click", blue() );

function blue(){
    texto.style.color = "blue";

}

document.getElementsByClassName("green").addEventListener("click", green() );

function green(){
    texto.style.color = "green";

}