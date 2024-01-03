/* eslint-disable import/prefer-default-export */
import { header } from '../componentes/header.js';
import { pieDePagina } from '../componentes/footer.js';
import { formulario } from '../componentes/formulario.js';
export function Personaje(props) {
  // Accedemos a las propiedades
  const d = document;
  const contenedorPersonaje = d.createElement('div');
  contenedorPersonaje.className = "contenedorPersonaje";
  contenedorPersonaje.appendChild(header());

  //CONTENEDOR para almacenar el formulario y el los datos del personaje
  const chatPersonaje = d.createElement('section');
  chatPersonaje.className='chatPersonaje';

  const { name, shortDescription, imageUrl } = props;
  console.log(props);
  // Renderizamos nuevamente la información detallada
  const detailElement = d.createElement('div');
  detailElement.innerHTML = 
  `<li class="li" itemscope itemtype="Artist">
    <h2>${name}</h2>
    <img class="imag" src="${imageUrl}" alt="imagen"/>
    <dt><strong>Descripción:</strong></dt><dd itemprop="description">${shortDescription}</dd>
  </li>
      `;
  

  chatPersonaje.appendChild(detailElement);
  const contenedorFormulario = d.createElement('section');
  contenedorFormulario.appendChild(formulario());
  contenedorFormulario.className= 'formularioPersonaje';
  chatPersonaje.appendChild(contenedorFormulario);
  contenedorPersonaje.appendChild(chatPersonaje);
  contenedorPersonaje.appendChild(pieDePagina());

  return contenedorPersonaje;
}