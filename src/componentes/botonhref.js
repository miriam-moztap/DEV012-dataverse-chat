export function botonApiKey(){
    const button = document.createElement('button');
    button.textContent='API Key';
    button.className='botonApiKey';

    // Agregar un evento de clic al botón
    button.addEventListener('click', function () {
        // Redireccionar a otra vista (puedes cambiar 'otra-vista.html' por tu URL deseada)
        window.location.href = '/apikey';
    });

    return button;
}