import { formulario } from '../componentes/formulario.js';

export function contenedorAPI() {
  const contenedor = document.createElement('div');
  contenedor.appendChild(formulario());

  const formularioApi = contenedor.querySelector('#formApi');
  if (formularioApi) {
    formularioApi.addEventListener('submit', async (e) => {
      e.preventDefault();
      const apiKey = contenedor.querySelector('.textAreaApi').value;
      console.log(apiKey);

      const apiKeyValid = await validarApiKey(apiKey);
      if (apiKeyValid) {
        localStorage.setItem('chatGptApiKey', apiKey);
        window.location.href = '/apikey';
      } else {
        alert('Api Key incorrecta, inténtalo de nuevo');
      }
    });
    async function validarApiKey(apiKey) {
        return apiKey === 'vqTojGAMI5FHT25jh76ZT3BlbkFJjNTln8lp9J47rzkfU4zK';
    }
  }
  return contenedor;
}
