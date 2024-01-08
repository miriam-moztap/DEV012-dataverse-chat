import { chat } from "../componentes/formulario.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";

export function chatgeneral() {
  const d = document;
  const chatView = d.createElement("div");
  chatView.appendChild(header());

  const cajaPrincipal = d.createElement('div');
  cajaPrincipal.className = 'cajaPrincipalChatG';
  cajaPrincipal.appendChild(chat());
  cajaPrincipal.appendChild(formularioEnviar());
  chatView.appendChild(cajaPrincipal);

  chatView.appendChild(pieDePagina());


  const textArea = chatView.querySelector('#textArea');
  const botonEnviar = chatView.querySelector('#botonEnviar');
  const cajaChat = chatView.querySelector('#chat');
  botonEnviar.addEventListener('click', function () {
    if (textArea.value === '') {
      alert('Escribe un mensaje antes de enviar')
      return;
    }
    const Mensaje = d.createElement('div');
    Mensaje.className='mensaje';
    Mensaje.textContent = textArea.value;
    cajaChat.insertAdjacentElement('beforeend', Mensaje);
    textArea.value = '';
  });

  return chatView;
}
