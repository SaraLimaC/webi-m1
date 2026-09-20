# Editor parcial de texto 

Misión M1 · El Despertar del DOM — Web Development I.

## Cómo probarlo
Abre m1.html en el navegador (o con Live Server). 
Puede escribir en el espacio de abajo y modificar el color y el tamaño del texto.

Tecla secreta: pulsa "d" para el modo nocturno.

## Uso de IA
Usé Gemini para añadir el área de texto para escribir. También le pedi ayuda para las funciones de los botones, para poder manejar el texto según la función de cada botón.

Usé ChatGPT para completar el bonus y añadir el modo oscuro, además de pedir ayuda porque no conseguía que los botones de los colores funcionaran y me recomendó usar ids.

Prompts usados:
 -  Como añadir el modo oscuro en javascript
 -  Como puedo cambiar el color de un texto con botones para   cada color

    Para ambos resultados copie el código y en el caso de los botones solo modifique los colores dentro de las funciones y sus nombres.

## Autopsia
1. Cuando declaré los botones como clases azul, roja y verde
y pedía la clase en javascript no me funcionaba, entonces los declaré como id y conseguí avanzar, porque de la otra forma tenía que añadir más código.

Con los tamaños de texto hice lo mismo.

2.  En la parte de html incluía onclick cuando no se debía así lo modifique y añadí en javascript en cada botón usando el id de cada botón.