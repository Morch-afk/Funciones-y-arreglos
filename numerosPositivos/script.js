function sumarNumeros() {
    let suma = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Introduce un número positivo (o un número negativo/cero para terminar):"));

        if (numero > 0) {
            suma += numero;
        }
    } while (numero > 0);

    document.getElementById('resultado').innerText = `La suma total de los números positivos es: ${suma}`;
}