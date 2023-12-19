/* eslint-disable import/prefer-default-export */
import { botonHref } from '../componentes/botonhref.js';
import { header } from '../componentes/header.js';
import { pieDePagina } from '../componentes/footer.js';
export function Personaje(props) {
  // Accedemos a las propiedades
  const contenedorPersonaje = document.createElement('div');
  contenedorPersonaje.className = "contenedorPersonaje";
  contenedorPersonaje.appendChild(header());
  contenedorPersonaje.appendChild(botonHref());
  const { name, shortDescription, imageUrl } = props;
  console.log(props);
  // Renderizamos nuevamente la información detallada
  const detailElement = document.createElement('div');
  detailElement.innerHTML = `
    <h2>${name}</h2>
    <img src="${imageUrl}" alt="${name}" />
    <dt><strong>Descripción:</strong></dt><dd itemprop="description">${shortDescription}</dd>
  `;
  contenedorPersonaje.appendChild(detailElement)
  contenedorPersonaje.appendChild(pieDePagina());
  const formularioApi = contenedorPersonaje.querySelector('#formApi');
  if(formularioApi){
  formularioApi.addEventListener('submit', async (e) =>{
      e.preventDefault();
      let textArea= contenedorPersonaje.querySelector('.textAreaApi').value;
      console.log(textArea);
    });

  }
  return contenedorPersonaje;
}