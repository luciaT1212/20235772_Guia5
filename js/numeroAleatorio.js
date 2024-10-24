const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
const numeroIntentos = 3;

// Guarda el número de intentos que realiza el usuario
let intentos = 1;

function generarNumeroAleatorio() {
    // Definimos una variable para impresión de mensajes
    let mensaje;
    // Utilizamos el DOM para acceder al párrafo creado
    const parrafo = document.querySelector("#idParrafo");

    // Verificamos en qué intento está el usuario
    if (intentos <= numeroIntentos) {
        let numero = prompt(`¿Qué número se ha generado (Intento ${intentos} de ${numeroIntentos})?`);

        // Verificamos el número aleatorio con el ingresado por el usuario
        if (numero == numeroAleatorio) {
            mensaje = `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio})! Refresque la página para volver a jugar.`;
        } else if (intentos == numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else {
            // Indicamos si el número ingresado es mayor o menor al número aleatorio
            if (numero < numeroAleatorio) {
                mensaje = `El número oculto es mayor que ${numero}. Quedan ${numeroIntentos - intentos} intentos.`;
            } else {
                mensaje = `El número oculto es menor que ${numero}. Quedan ${numeroIntentos - intentos} intentos.`;
            }
        }

        // Aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;
}