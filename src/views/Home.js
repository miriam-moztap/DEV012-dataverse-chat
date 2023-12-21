import { renderItems } from "../componentes/cards.js";
import { header } from "../componentes/header.js";
import data from "/data/dataset.js";
import { pieDePagina } from "../componentes/footer.js";
import { estructuraFiltro } from "../componentes/filtros.js";
import { estadistica } from "../componentes/estadistica.js";
import { filterData } from "../dataFunctions.js";
import { estructuraOrdenamiento } from "../componentes/ordenamiento.js";
import { sortData } from '../dataFunctions.js';


export function PruebaHome(props) {
  const homeContenedor = document.createElement("div");
  const filtros=document.createElement('div');
  filtros.className='filtros';
  filtros.appendChild(estructuraFiltro());
  filtros.appendChild(estructuraOrdenamiento());
  const datosContados = estadistica(data);
  filtros.appendChild(datosContados);
  homeContenedor.appendChild(header());
  homeContenedor.appendChild(filtros);
 

  //Contenedor de estadística
  

  //Contenedor filtro
  const tarjetas = renderItems(data);
  const contenedorTarjetas = document.createElement("div");
  contenedorTarjetas.appendChild(tarjetas);
  homeContenedor.appendChild(contenedorTarjetas);

  //pie de página
  homeContenedor.appendChild(pieDePagina());

  //ordenado de todas las tarjetas
  const contenedorDatosOrdenados = homeContenedor.querySelector("#ordenado");
  contenedorDatosOrdenados.addEventListener("change", function (event) {
    const ordenados = sortData(data, "name", event.target.value);
    contenedorTarjetas.innerHTML = "";
    contenedorTarjetas.appendChild(renderItems(ordenados));
  });

  const contenedorFiltro = homeContenedor.querySelector("#genero");
  contenedorFiltro.addEventListener("change", function (event) {
    //if(event.target.value==="Selecciona un género"){

      //contenedorTarjetas.appendChild(tarjetas);
    //}else if(event.target.value!=="Selecciona un género"){
    const generos = filterData(data, "genre", event.target.value);
    contenedorTarjetas.innerHTML = "";
    contenedorTarjetas.appendChild(renderItems(generos));

    //estas líneas son de la estadística
    datosContados.innerHTML = "";
    datosContados.appendChild(estadistica(generos));

    //estas líneas son del ordenamiento

    const contenedorDatosOrdenados = homeContenedor.querySelector("#ordenado");
    contenedorDatosOrdenados.addEventListener("change", function (event) {
      
      const ordenados = sortData(generos, "name", event.target.value);
      contenedorTarjetas.innerHTML = "";
      contenedorTarjetas.appendChild(renderItems(ordenados));

    });
});

  return homeContenedor;
}
