function emitirVoto() {
    // Obtener el valor seleccionado
    const seccion = document.getElementById('seccion').value;

    // Obtener el contenedor para mostrar el resultado
    const resultado = document.getElementById('resultado');
    const mensajeResultado = document.getElementById('mensajeResultado');

    // Validar que se haya seleccionado una opción
    if (!seccion) {
        alert('Por favor, seleccione una sección.');
        return;
    }

    // Determinar el mensaje basado en la selección
    let mensaje;
    switch (seccion) {
        case 'norte':
            mensaje = '¡Gracias por votar por la sección Norte!';
            break;
        case 'sur':
            mensaje = '¡Gracias por votar por la sección Sur!';
            break;
        case 'centro':
            mensaje = '¡Gracias por votar por la sección Centro!';
            break;
        default:
            mensaje = 'Opción no válida.';
            break;
    }

    // Mostrar el resultado
    mensajeResultado.textContent = mensaje;
    resultado.classList.remove('hidden');
}
