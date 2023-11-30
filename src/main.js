import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(renderItems(data), data);

const contenedorCanciones = document.querySelector("#root");
contenedorCanciones.innerHTML = renderItems(data);
let newData = data;

//Estadistica
const stadistic = document.getElementById ('estadistica');
const sumaData = computeStats(data);
stadistic.innerHTML = `Total de Albums: ${sumaData}`;

//Filtro
const filtrado = document.querySelector('[data-testid="select-filter"]');
filtrado.addEventListener("change", function(e){
  //console.log(e.target.value)
  const generos = filterData(data, "genre", e.target.value);
  newData = generos;
  contenedorCanciones.innerHTML = renderItems(newData);
  const sumaData = computeStats(newData);
  stadistic.innerHTML = `Total de Albums: ${sumaData}`;
});

//Ordenamiento
const orden = document.querySelector('[data-testid="select-sort"]');
orden.addEventListener("change", function(e){
  //console.log(e.target.value);
  const ordenado = sortData(newData, "name", e.target.value);
  contenedorCanciones.innerHTML = renderItems(ordenado);
});

//Boton
const boton = document.querySelector('[data-testid="button-clear"]');
boton.addEventListener('click', function(){

  filtrado.value = "blanco1";
  orden.value = "blanco2";
  stadistic.innerHTML = `Total de Albums: ${sumaData}`;
  newData = data;

  contenedorCanciones.innerHTML = renderItems(newData);
});

//CreateElement
const nuevoParrafo = document.createElement('p');
const contenedor = document.querySelector('#footer');
nuevoParrafo.textContent = 'Elaborado por Rocío Juárez && Zaira Pasillas';
contenedor.appendChild(nuevoParrafo);

