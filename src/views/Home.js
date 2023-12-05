
import { renderItems } from '../componentes/cards.js';
import { header } from '../componentes/header.js';
import data from '/data/dataset.js';
import { pieDePagina } from '../componentes/footer.js';
import { estadistica, estructuraFiltro, estructuraOrdemaniento } from '../componentes/filtros.js';
// src/views/Home.js

export function Prueba(props) {
  const homeContenedor = document.createElement('div');
  homeContenedor.appendChild(header());
  homeContenedor.appendChild(estructuraFiltro());
  homeContenedor.appendChild(estructuraOrdemaniento());
  homeContenedor.appendChild(estadistica());
  homeContenedor.appendChild(renderItems(data));
  homeContenedor.appendChild(pieDePagina());
  return homeContenedor;
}





