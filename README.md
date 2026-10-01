# Editor parcial de texto 

Misión M1 · El Despertar del DOM — Web Development I.

## Cómo probarlo
Abre m1.html en el navegador (o con Live Server). 
Puede escribir en el espacio de abajo y modificar el color y el tamaño del texto. 

Para iniciar el juego simplemente se pulsa en el botón y se genera una palabra la cual hay que replicar en tamaño y color, cuantas más hagas mayor la puntuación, el tiempo disponible es de 50 segundos.

Tecla secreta: pulsa "d" fuera del area de texto para el modo nocturno.

## Uso de IA
Usé Gemini para añadir el área de texto para escribir. También le pedi ayuda para las funciones de los botones, para poder manejar el texto según la función de cada botón.

Usé ChatGPT para completar el bonus, el modo oscuro, además de pedir ayuda porque no conseguía que los botones de los colores funcionaran y me recomendó usar ids.

Para ambos resultados copie el código y en el caso de los botones solo modifique los colores dentro de las funciones y sus nombres.

Después le pedí que me indicara cómo generar un número aleatorio para seleccionar una posición de un array al azar y la forma de comparar el resultado de la palabra al azar y la que estaba escribiendo en el momento.

Finalmente solicité la forma de implementar un contador para el reloj y la función que me generó fue una función flecha con una variable intervalo para que se restará un segundo cada que se cumplía el intervalo.


Alguno prompts usados:
 -  Como añadir el modo oscuro en javascript
 -  Como puedo cambiar el color de un texto con botones para cada color
 -  Como puedo añadir una cuenta atras para ver el número de palabras que puedo escribir cambiando color y tamaño

    
## Autopsia

1. Cuando comparaba las palabras o frases había un cierto orden , tenía que darle primero a los botones y luego escribir para que validará si eran iguales, entonces cree una función checkear() que se llamaba cada vez que tocabas un botón y así el orden no importa y puedes escribir y cambiar con los botones o viceversa.


2. A la hora de comparar las palabras o frases no se realizaba una comparación justa entre colores y tamaños por lo que cambié el formato de declaración de los colores de "red" a rgb(255,0,0), con los tamañon hice los mismo y usé la unidad px.