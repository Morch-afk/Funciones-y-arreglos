function toggleForm() {
    const form = document.getElementById('formularioIngreso');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
}
