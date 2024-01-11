/* eslint-disable import/prefer-default-export */
import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";
import { chat } from "../componentes/formulario.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { iconHome } from "../componentes/iconos.js";
import { iconChat } from "../componentes/iconos.js";
import { getCompletion } from "../lib/API.js";
import { navigateTo } from "../router.js";
import { botonLimpiar } from "../componentes/botonlimpiar.js";

export function Personaje(props) {
  // Accedemos a las propiedades
  const d = document;
  const contPer = d.createElement("div");
  contPer.className = "contPer";
  const iconoChatIndividual = document.createElement("div");
  iconoChatIndividual.className = "iconosChatIndividual";
  iconoChatIndividual.appendChild(iconHome());
  iconoChatIndividual.appendChild(iconChat());
  contPer.appendChild(iconoChatIndividual);
  contPer.appendChild(header());

  //CONTENEDOR para almacenar el formulario y el los datos del personaje
  const chatPersonaje = d.createElement("section");
  chatPersonaje.className = "chatPersonaje";

  const { name, shortDescription, imageUrl, genre, albums, artist } = props;

  // Renderizamos nuevamente la información detallada
  const detailElement = d.createElement("div");
  detailElement.innerHTML = `<li class="li" itemscope itemtype="Artist">
    <h2>${name}</h2>
    <img class="imag" src="${imageUrl}" alt="imagen"/>
    <dt><strong>Descripción:</strong></dt><dd itemprop="description">${shortDescription}</dd>
    <dt><strong>Género:</strong></dt><dd itemprop="genre">${genre}</dd>
      <dt><strong>Número de Albumnes:</strong></dt><dd itemprop="albums">${albums}</dd>
      <dt><strong>Solista o grupo:</strong></dt><dd itemprop="artist">${artist}</dd>
  </li>
      `;
  const contDetails = d.createElement("div");
  contDetails.className = "contDetails";
  contDetails.appendChild(detailElement);
  chatPersonaje.appendChild(contDetails);
  const contChat = d.createElement("section");
  contChat.appendChild(chat());
  contChat.className = "contChat";
  contChat.appendChild(formularioEnviar());
  chatPersonaje.appendChild(contChat);
  contPer.appendChild(chatPersonaje);
  const botonBorrarApi = d.createElement('div');
  botonBorrarApi.className = "botonBorrarApi";
  botonBorrarApi.textContent = "Borra Api Key";
  botonBorrarApi.appendChild(botonLimpiar());
  contPer.appendChild(botonBorrarApi);
  const piePersonaje = document.createElement("div");
  piePersonaje.className = "pieChatIndividual";
  piePersonaje.appendChild(pieDePagina());
  contPer.appendChild(piePersonaje);

  //Funcionalidad botonBorrarApi
  const botonLimpiarApi =contPer.querySelector(".botonLimpiar");
  botonBorrarApi.addEventListener("click", function (){
    localStorage.removeItem("chatGptApiKey");
    navigateTo("/apikey");
  });

  //funcionalidad para enviar el mensaje escrito en el text área a la zona de chat
  const textArea = contPer.querySelector("#textArea");
  const botonEnviar = contPer.querySelector("#botonEnviar");
  const cajaChat = contPer.querySelector("#chat");
  botonEnviar.addEventListener("click", function () {
    if (textArea.value === "") {
      alert("Escribe un mensaje antes de enviar");
      return;
    }
    const Mensaje = d.createElement("div");
    Mensaje.className = "mensaje";
    Mensaje.textContent = textArea.value;
    cajaChat.appendChild(Mensaje);

    const clave = localStorage.getItem("chatGptApiKey");
    if (clave) {
      getCompletion(textArea.value, props.name)
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
    } else {
      navigateTo("/apikey");
    }
  });
  return contPer;
}
