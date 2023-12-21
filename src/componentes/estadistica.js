import { computeStats } from '../dataFunctions.js';

export const estadistica = (data) => {
  const contenedorEstadistica = document.createElement('div');
  contenedorEstadistica.className = 'estadistica';
  contenedorEstadistica.setAttribute('id', 'conteo');
  const parrafoEstadística = document.createElement('p');
  const sumaData = computeStats(data);
  parrafoEstadística.innerHTML = `Total de Albums: ${sumaData}`;
  contenedorEstadistica.appendChild(parrafoEstadística);
  return contenedorEstadistica;
};
