let array = [1, 2, 3, 4, 5];

function actualizarArreglo() {
    document.getElementById('arrayActual').innerText = `Arreglo Actual: [${array.join(', ')}]`;
}

// Pop: Elimina el último elemento
function arrayPop() {
    array.pop();
    actualizarArreglo();
}

// Shift: Elimina el primer elemento
function arrayShift() {
    array.shift();
    actualizarArreglo();
}

// Push: Agrega un elemento al final
function arrayPush() {
    array.push(6);
    actualizarArreglo();
}

// Unshift: Agrega un elemento al inicio
function arrayUnshift() {
    array.unshift(0);
    actualizarArreglo();
}

// Splice: Elimina un elemento en el índice 2
function arraySplice() {
    array.splice(2, 1);
    actualizarArreglo();
}

// Delete: Elimina el elemento en el índice 1 (deja un 'undefined')
function arrayDelete() {
    delete array[1];
    actualizarArreglo();
}

// Reverse: Invierte el orden del arreglo
function arrayReverse() {
    array.reverse();
    actualizarArreglo();
}

// Sort: Ordena el arreglo (numéricamente)
function arraySort() {
    array.sort((a, b) => a - b);
    actualizarArreglo();
}

// Concat: Concatenar otro arreglo [7, 8]
function arrayConcat() {
    array = array.concat([7, 8]);
    actualizarArreglo();
}

// Join: Convierte el arreglo a una cadena de texto
function arrayJoin() {
    let resultado = array.join('-');
    alert(`Arreglo unido: ${resultado}`);
}

// Length: Muestra la longitud del arreglo
function arrayLength() {
    alert(`Longitud del arreglo: ${array.length}`);
}

// Inicializar la visualización del arreglo
actualizarArreglo();
