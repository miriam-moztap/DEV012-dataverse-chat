export function botonHref(){
    const button = document.createElement('button');
    button.textContent='Introduce tu API Key para chatear conmigo';

    // Agregar un evento de clic al botón
    button.addEventListener('click', function () {
        // Redireccionar a otra vista (puedes cambiar 'otra-vista.html' por tu URL deseada)
        window.location.href = '/apikey';
    });

    return button;
}