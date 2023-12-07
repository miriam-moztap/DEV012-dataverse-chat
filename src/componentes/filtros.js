import { computeStats, filterData } from "../dataFunctions.js";
import data from '/data/dataset.js';

export const estructuraFiltro = () => {
  const etiqueta = document.createElement("label");
  etiqueta.textContent = "selecciona un género";
  etiqueta.setAttribute("for", "genero");
  const filtro = document.createElement("select");
  filtro.setAttribute("data-testid", "select-filter");
  filtro.setAttribute("name", "genero");
  filtro.setAttribute("id", "genero");
  
  const opcion1 = document.createElement('option');
  opcion1.setAttribute('value', 'blanco1');
  opcion1.textContent = "Selecciona una opción";
  
  const opcion2 = document.createElement('option');
  opcion2.setAttribute('value', 'Pop');
  opcion2.textContent = "Pop";

  const opcion3 = document.createElement('option');
  opcion3.setAttribute('value', 'Rock');
  opcion3.textContent = "Rock";
  
  const opcion4 = document.createElement('option');
  opcion4.setAttribute('value', 'Cumbia');
  opcion4.textContent = "Cumbia";

  filtro.appendChild(opcion1);
  filtro.appendChild(opcion2);
  filtro.appendChild(opcion3);
  filtro.appendChild(opcion4);

  etiqueta.appendChild(filtro);

  return etiqueta;
};

export const estructuraOrdemaniento = () =>{
    const etiqueta = document.createElement("label");
  etiqueta.textContent = "Ordenar:";
  etiqueta.setAttribute("for", "ordenado");
  const orden = document.createElement("select");
  orden.setAttribute("data-testid", "select-sort");
  orden.setAttribute("name", "sort-order");
  orden.setAttribute("id", "ordenado");
  
  const opcion1 = document.createElement('option');
  opcion1.setAttribute('value', 'blanco2');
  opcion1.textContent = "Selecciona una opción";
  
  const opcion2 = document.createElement('option');
  opcion2.setAttribute('value', 'asc');
  opcion2.textContent = "A - Z";

  const opcion3 = document.createElement('option');
  opcion3.setAttribute('value', 'desc');
  opcion3.textContent = "Z - A";
  
  orden.appendChild(opcion1);
  orden.appendChild(opcion2);
  orden.appendChild(opcion3);

  etiqueta.appendChild(orden);

  return etiqueta;
}

export const estadistica = () =>{
    const contenedorEstadistica = document.createElement('div');
    let sumaData = '';
   
    //console.log(sumaData);
    contenedorEstadistica.addEventListener('change', function (event) {
        if(data){
            sumaData = computeStats(data);
        }else if(generos = filterData(data, "genre", event.target.value);
        
        let newData = generos;
        sumaData = computeStats (newData);

    ))}
        

contenedorEstadistica.innerHTML = `Total de Albums: ${sumaData}`;
    console.log(contenedorEstadistica);
    //const estadistica = document.createElement('div');
    //estadistica.textContent = "Número de albumes:";
    //estadistica.setAttribute('id', 'estadistica');
}
    

    //return estadistica;
}
