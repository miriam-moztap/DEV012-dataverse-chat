
import { renderItems } from '../componentes/cards.js';
import { header } from '../componentes/header.js';
import data from '/data/dataset.js';
import { pieDePagina } from '../componentes/footer.js';
import { estadistica,  estructuraFiltro, estructuraOrdemaniento } from '../componentes/filtros.js';
import { filterData } from '../dataFunctions.js';
// src/views/Home.js

export function PruebaHome(props) {
  const homeContenedor = document.createElement('div');
  homeContenedor.appendChild(header());
  homeContenedor.appendChild(estructuraFiltro());
  homeContenedor.appendChild(estructuraOrdemaniento());
  homeContenedor.appendChild(estadistica(data));
  homeContenedor.appendChild(renderItems(data));
  homeContenedor.appendChild(pieDePagina());


  const contenedorFiltro = document.getElementById("root");
    contenedorFiltro.addEventListener('change', function (event){
    const generos = filterData(data, "genre", event.target.value);
    let newData = generos;

    while (contenedorFiltro.firstChild) {
      contenedorFiltro.removeChild(contenedorFiltro.firstChild);
    }
    // Renderizar y agregar nuevos elementos al contenedor
    const nuevosElementos = renderItems(newData);
    contenedorFiltro.className = 'ulClass';
    contenedorFiltro.appendChild(header());
    contenedorFiltro.appendChild(estructuraFiltro());
    contenedorFiltro.appendChild(estructuraOrdemaniento());
    contenedorFiltro.appendChild(estadistica(newData));
    contenedorFiltro.appendChild(nuevosElementos);
    contenedorFiltro.appendChild(pieDePagina());

    return contenedorFiltro;

  });


  return homeContenedor;
}







     // const generos = filterData(data, "genre", event.target.value);
    //let newData = generos;
    //console.log(newData);
  
    //sumaData = computeStats(newData);
    //acumulador = `Total de Albums: ${sumaData}`;
    //contenedorEstadistica.innerHTML=acumulador;
    //return contenedorEstadistica;
    //return estadistica;