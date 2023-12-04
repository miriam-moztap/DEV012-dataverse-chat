// src/views/Home.js

export function Prueba (props) {
    const viewEl = document.createElement('p');
    viewEl.innerHTML = "Welcome to the home page!";
    return viewEl;
  }

  export const renderItems = (data) => {

    const ul = document.createElement('ul');
    let lista = "";
    
  
    //lista.className= 'card';
    
    data.forEach(element => {
        let li = document.createElement('li');
        li.className = 'tarjeta';
        li.setAttribute('itemscope', '');
        li.setAttribute('itemtype', 'artista');
        li.setAttribute('data-id', element.id);
      lista += `<li class="liClass" itemscope itemtype="Artist" data-id=${element.id}>
  
      <dl itemscope itemtype="Artist">
        <img class="imag" src="${element.imageUrl}" alt="imagen"/>
        <dt><strong>Nombre:</strong></dt><dd itemprop="name">${element.name}</dd>
        <dt><strong>Descripción:</strong></dt><dd itemprop="description">${element.shortDescription}</dd>
        <dt><strong>Género:</strong></dt><dd itemprop="genre">${element.facts.genre}</dd>
        <dt><strong>Número de Albumnes:</strong></dt><dd itemprop="albums">${element.facts.albums}</dd>
        <dt><strong>Solista o grupo:</strong></dt><dd itemprop="artist">${element.facts.artist}</dd>
      </dl>
      </li>`
      
    });
   
    return `<ul class="ulClass">${lista}</ul>`;
    
  };

export function Home () {

}