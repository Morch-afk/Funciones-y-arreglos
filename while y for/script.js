// Función para sumar todos los números impares del 1 al 100
function sumarImpares() {
    let suma = 0;
    let numero = 1;

    while (numero <= 100) {
        if (numero % 2 !== 0) {
            suma += numero;
        }
        numero++;
    }

    document.getElementById('resultadoSuma').innerText = `La suma de los números impares del 1 al 100 es: ${suma}`;
}

// Función para mostrar asteriscos según el número ingresado
function mostrarAsteriscos() {
    let numAsteriscos = parseInt(document.getElementById('numeroAsteriscos').value);
    let asteriscos = '';

    for (let i = 0; i < numAsteriscos; i++) {
        asteriscos += '*';
    }

    document.getElementById('resultadoAsteriscos').innerText = asteriscos;
}

// Función para mostrar las tablas de multiplicar del 1 al 10
function mostrarTablas() {
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `Tabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += '\n';
    }

    document.getElementById('resultadoTablas').innerText = resultado;
}
