function generarCajas() {
    // Solicitar al usuario el número de cajas
    const numCajas = prompt("¿Cuántas cajas deseas colocar?");
    const contenedor = document.getElementById('contenedor');

    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Determinar estilo basado en el número de cajas
    let estilo;
    if (numCajas < 8) {
        contenedor.className = 'vertical';
        estilo = 'color1';
    } else {
        contenedor.className = 'horizontal';
        estilo = 'color2';
    }

    // Crear las cajas y agregarlas al contenedor
    for (let i = 1; i <= numCajas; i++) {
        const caja = document.createElement('div');
        caja.className = `caja ${estilo}`;
        caja.textContent = i;
        contenedor.appendChild(caja);
    }
}