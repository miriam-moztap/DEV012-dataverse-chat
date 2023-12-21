/* eslint-disable import/prefer-default-export */
import { botonHref } from '../componentes/botonhref.js';
import { header } from '../componentes/header.js';
import { pieDePagina } from '../componentes/footer.js';
export function Personaje(props) {
  // Accedemos a las propiedades
  const d = document;
  const contenedorPersonaje = d.createElement('div');
  contenedorPersonaje.className = "contenedorPersonaje";
  const contenedorHome= d.createElement('section');
  const contenedorBoton=d.createElement('section');
  const contenedorFooter=d.createElement('div');
  contenedorHome.appendChild(header());
  contenedorBoton.appendChild(botonHref());
  contenedorFooter.appendChild(pieDePagina());
  contenedorPersonaje.appendChild(contenedorHome);
  
  const { name, shortDescription, imageUrl } = props;
  console.log(props);
  // Renderizamos nuevamente la información detallada
  const detailElement = d.createElement('div');
  detailElement.innerHTML = `
    <h2>${name}</h2>
    <img src="${imageUrl}" alt="${name}" />
    <dt><strong>Descripción:</strong></dt><dd itemprop="description">${shortDescription}</dd>
  `;
  contenedorPersonaje.appendChild(detailElement);
  contenedorPersonaje.appendChild(contenedorBoton);
  contenedorPersonaje.appendChild(contenedorFooter);

  return contenedorPersonaje;
}