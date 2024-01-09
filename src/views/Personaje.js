/* eslint-disable import/prefer-default-export */
import { header } from '../componentes/header.js';
import { pieDePagina } from '../componentes/footer.js';
import { chat } from '../componentes/formulario.js';
import { formularioEnviar } from '../componentes/formulario.js';
import { iconHome } from '../componentes/iconos.js';
import { iconChat } from "../componentes/iconos.js";

export function Personaje(props) {
  // Accedemos a las propiedades
  const d = document;
  const contPer = d.createElement('div');
  contPer.className = "contPer";
  const iconoChatIndividual = document.createElement('div');
  iconoChatIndividual.className = "iconosChatIndividual";
  iconoChatIndividual.appendChild(iconHome());
  iconoChatIndividual.appendChild(iconChat());
  contPer.appendChild(iconoChatIndividual);
  contPer.appendChild(header());

  //CONTENEDOR para almacenar el formulario y el los datos del personaje
  const chatPersonaje = d.createElement('section');
  chatPersonaje.className = 'chatPersonaje';

  const { name, shortDescription, imageUrl } = props;

  // Renderizamos nuevamente la información detallada
  const detailElement = d.createElement('div');
  detailElement.innerHTML =
    `<li class="li" itemscope itemtype="Artist">
    <h2>${name}</h2>
    <img class="imag" src="${imageUrl}" alt="imagen"/>
    <dt><strong>Descripción:</strong></dt><dd itemprop="description">${shortDescription}</dd>
  </li>
      `;
  const contDetails = d.createElement('div');
  contDetails.className='contDetails';
  contDetails.appendChild(detailElement)
  chatPersonaje.appendChild(contDetails);
  const contChat = d.createElement('section');
  contChat.appendChild(chat());
  contChat.className = 'contChat';
  contChat.appendChild(formularioEnviar());
  chatPersonaje.appendChild(contChat);
  contPer.appendChild(chatPersonaje);
  const piePersonaje = document.createElement('div');
  piePersonaje.className = "pieChatIndividual";
  piePersonaje.appendChild(pieDePagina());
  contPer.appendChild(piePersonaje);

  //funcionalidad para enviar el mensaje escrito en el text área a la zona de chat
  const textArea = contPer.querySelector('#textArea');
  const botonEnviar = contPer.querySelector('#botonEnviar');
  const cajaChat = contPer.querySelector('#chat');
  botonEnviar.addEventListener('click', function () {
    if (textArea.value === '') {
      alert('Escribe un mensaje antes de enviar')
      return;
    }
    const Mensaje = d.createElement('div');
    Mensaje.className='mensaje';
    Mensaje.textContent = textArea.value;
    cajaChat.appendChild(Mensaje);
    textArea.value = '';
  });
  return contPer;
}