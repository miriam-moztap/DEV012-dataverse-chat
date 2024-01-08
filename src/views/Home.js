import { renderItems } from "../componentes/cards.js";
import { header } from "../componentes/header.js";
import data from "/data/dataset.js";
import { pieDePagina } from "../componentes/footer.js";
import { estructuraFiltro } from "../componentes/filtros.js";
import { estadistica } from "../componentes/estadistica.js";
import { filterData } from "../dataFunctions.js";
import { estructuraOrdenamiento } from "../componentes/ordenamiento.js";
import { sortData } from '../dataFunctions.js';
import { botonLimpiar } from "../componentes/botonlimpiar.js";
import { iconChat, iconHome } from "../componentes/iconos.js";
import { botonApiKey } from "../componentes/botonhref.js";


export function Home(props) {
  const d=document;
  const homeContenedor = d.createElement("div");
  const filtros=d.createElement('div');
  filtros.className='filtros';
  const botonLimpiado = d.createElement('div');
  botonLimpiado.appendChild(botonLimpiar());
  filtros.appendChild(estructuraFiltro());
  filtros.appendChild(estructuraOrdenamiento());
  filtros.appendChild(botonLimpiado);
  const datosContados = estadistica(data);
  filtros.appendChild(datosContados);
  const iconos = d.createElement('div');
  iconos.className='iconos';
  iconos.appendChild(iconHome())
  iconos.appendChild(iconChat());
  iconos.appendChild(botonApiKey());
  homeContenedor.appendChild(iconos);
  homeContenedor.appendChild(header());
  
  homeContenedor.appendChild(filtros);
  
  

  //Contenedor de estadística
  

  //Contenedor filtro
  const tarjetas = renderItems(data);
  const contenedorTarjetas = d.createElement("div");
  contenedorTarjetas.appendChild(tarjetas);
  homeContenedor.appendChild(contenedorTarjetas);

  //pie de página
  homeContenedor.appendChild(pieDePagina());
  //botón para limpiar
  botonLimpiado.addEventListener('click', function () {
    contenedorTarjetas.innerHTML = "";
    contenedorTarjetas.appendChild(renderItems(data)); 
    filtros.innerHTML = "";
    filtros.appendChild(estructuraFiltro());
  filtros.appendChild(estructuraOrdenamiento());
  filtros.appendChild(estadistica(data));
  });


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
