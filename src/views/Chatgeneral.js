import { chat } from "../componentes/formulario.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";
import { iconHome } from "../componentes/iconos.js";
import { navigateTo } from "../router.js";
import { getCompletion } from "../lib/ApiChatG.js";
import data from "/data/dataset.js";

export function chatgeneral() {
  const d = document;
  const chatView = d.createElement("div");
  const iconoChatGeneral = document.createElement ('div');
  iconoChatGeneral.className = "IconoApi";
  iconoChatGeneral.appendChild(iconHome());
  chatView.appendChild(iconoChatGeneral);
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

    const clave = localStorage.getItem("chatGptApiKey");
    if (clave) {
      for (const element of data){

      
      getCompletion(textArea.value, element.name)
        .then((respuesta) => respuesta.json())
        .then((respuestaArtista) => {
          const response = respuestaArtista.choices[0].message.content;
          textArea.value = "";
          const mensajeArtista = d.createElement("div");
          mensajeArtista.className = "mensajeArtista";
          mensajeArtista.innerHTML = response;
          cajaChat.appendChild(mensajeArtista);
        })
        .catch((error) =>{
          alert ("Error: la Api Key que ingresaste es incorrecta", error);
        });
    } 
    }
    else {
      navigateTo("/apikey");
    }
  });
 

  return chatView;
}
