import { renderItems } from "../componentes/cards.js";
import { header } from "../componentes/header.js";
import data from "/data/dataset.js";
import { pieDePagina } from "../componentes/footer.js";
import {
  boton,
  estadistica,
  estructuraFiltro,
  estructuraOrdemaniento,
} from "../componentes/filtros.js";
import { filterData } from "../dataFunctions.js";
// src/views/Home.js

export function PruebaHome(props) {
  const homeContenedor = document.createElement("div");
  homeContenedor.appendChild(header());
  homeContenedor.appendChild(estructuraFiltro());
  homeContenedor.appendChild(estructuraOrdemaniento());
  homeContenedor.appendChild(boton());
  homeContenedor.appendChild(estadistica(data));
  const tarjetas = (renderItems(data));
const contenedorTarjetas = document.createElement('div');
contenedorTarjetas.appendChild(tarjetas);

  homeContenedor.appendChild(contenedorTarjetas);
  homeContenedor.appendChild(pieDePagina());

  const contenedorFiltro = homeContenedor.querySelector('#genero');
  console.log(contenedorFiltro);
  contenedorFiltro.addEventListener("change", function (event) {
    const generos = filterData(data, "genre", event.target.value);

contenedorTarjetas.innerHTML= "";
contenedorTarjetas.appendChild(renderItems(generos));

    /*let newData = generos;

    while (contenedorFiltro.firstChild) {
      contenedorFiltro.removeChild(contenedorFiltro.firstChild);
    }

    // Renderizar y agregar nuevos elementos al contenedor
    contenedorFiltro.className = "ulClass";
    contenedorFiltro.appendChild(header());
    contenedorFiltro.appendChild(estructuraFiltro());
    contenedorFiltro.appendChild(estructuraOrdemaniento());
    contenedorFiltro.appendChild(estadistica(newData));
    contenedorFiltro.appendChild(boton());
    contenedorFiltro.appendChild(renderItems(newData));
    contenedorFiltro.appendChild(pieDePagina());*/

    //return contenedorFiltro;
  });

  const botonLimpiar = document.getElementById("root");
  console.log(botonLimpiar);
  botonLimpiar.addEventListener("click", function () {
    console.log("limpiar");
    function limpiarYActualizarContenido() {
      // Restablecer datos a su estado inicial
      const newData = data; // Reemplaza con tus datos iniciales o la lógica necesaria

      // Limpiar el contenedor
      contenedorFiltro.innerHTML = "";

      contenedorFiltro.appendChild(header());
      contenedorFiltro.appendChild(estructuraFiltro());
      contenedorFiltro.appendChild(estructuraOrdemaniento());
      contenedorFiltro.appendChild(boton());
      contenedorFiltro.appendChild(estadistica(newData));
      contenedorFiltro.appendChild(renderItems(newData));
      contenedorFiltro.appendChild(pieDePagina());
    }
  });
  return homeContenedor;

  /*botonLimpiar.className = 'boton';
    botonLimpiar.appendChild(header());
    botonLimpiar.appendChild(estructuraFiltro());
    botonLimpiar.appendChild(estructuraOrdemaniento());
    botonLimpiar.appendChild(boton());
    botonLimpiar.appendChild(estadistica(data));
    botonLimpiar.appendChild(renderItems(data));
    botonLimpiar.appendChild(pieDePagina());*/
}

// const generos = filterData(data, "genre", event.target.value);
//let newData = generos;
//console.log(newData);

//sumaData = computeStats(newData);
//acumulador = `Total de Albums: ${sumaData}`;
//contenedorEstadistica.innerHTML=acumulador;
//return contenedorEstadistica;
//return estadistica;
