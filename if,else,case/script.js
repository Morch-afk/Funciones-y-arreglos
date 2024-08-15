// Función para ordenar 3 números de mayor a menor
function ordenarNumeros() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => b - a); // Ordenar de mayor a menor

    document.getElementById('resultadoNumeros').innerText = `Orden: ${numeros.join(', ')}`;
}

// Función para calcular el importe neto con impuestos
function calcularImporteNeto() {
    let importeBruto = parseFloat(document.getElementById('importeBruto').value);
    let importeNeto;
    
    if (importeBruto > 15000) {
        importeNeto = importeBruto - (importeBruto * 0.16);
    } else {
        importeNeto = importeBruto - (importeBruto * 0.10);
    }

    document.getElementById('resultadoImporte').innerText = `Importe Neto: €${importeNeto.toFixed(2)}`;
}

// Función para calcular el sueldo según años trabajados
function calcularSueldo() {
    let anios = parseInt(document.getElementById('aniosTrabajados').value);
    let sueldoBase = 40000;
    let sueldoFinal;

    switch (true) {
        case anios > 10:
            sueldoFinal = sueldoBase * 1.10;
            break;
        case anios > 5:
            sueldoFinal = sueldoBase * 1.07;
            break;
        case anios > 3:
            sueldoFinal = sueldoBase * 1.05;
            break;
        default:
            sueldoFinal = sueldoBase * 1.03;
            break;
    }

    document.getElementById('resultadoSueldo').innerText = `Sueldo Final: €${sueldoFinal.toFixed(2)}`;
}
