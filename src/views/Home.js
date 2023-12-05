
import { renderItems } from '../componentes/cards.js';
import { header } from '../componentes/header.js';
import data from '/data/dataset.js';
// src/views/Home.js

export function Home(props) {
  const homeContenedor = document.createElement('div');
  homeContenedor.appendChild(header());
  homeContenedor.appendChild(renderItems(data));
  return homeContenedor;
}




