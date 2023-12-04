// src/views/Home.js

export function Prueba (props) {
    const viewEl = document.createElement('p');
    viewEl.innerHTML = "Welcome to the home page!";
    return viewEl;
  }
  import data from '/data/dataset.js';
  const dataArray = Object.values(data);
  console.log(typeof dataArray);

  const contenedorCanciones = document.getElementById("root");
  
  export function renderItems (dataArray) {
    const ul = document.createElement('ul');
    for (const element of dataArray) {
        let li = document.createElement('li');
        li.className = 'tarjeta';
        li.setAttribute('itemscope', '');
        li.setAttribute('itemtype', 'artista');
        li.setAttribute('data-id', element.id);
       
        let tarjeta = ` 
  
      <dl itemscope itemtype="Artist">
        <img class="imag" src="${element.imageUrl}" alt="imagen"/>
        <dt><strong>Nombre:</strong></dt><dd itemprop="name">${element.name}</dd>
        <dt><strong>Descripción:</strong></dt><dd itemprop="description">${element.shortDescription}</dd>
        <dt><strong>Género:</strong></dt><dd itemprop="genre">${element.facts.genre}</dd>
        <dt><strong>Número de Albumnes:</strong></dt><dd itemprop="albums">${element.facts.albums}</dd>
        <dt><strong>Solista o grupo:</strong></dt><dd itemprop="artist">${element.facts.artist}</dd>
      </dl>
      </li>`
      li.innerHTML = tarjeta;
      ul.appendChild(li);
     
    };
    return ul;
    
  };
  contenedorCanciones.appendChild(ul);
    //contenedorCanciones.innerHTML = renderItems(dataArray);
    console.log(contenedorCanciones);
 //contenedorCanciones.innerHTML = renderItems(dataArray);

