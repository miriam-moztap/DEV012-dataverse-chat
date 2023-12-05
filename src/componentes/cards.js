export function renderItems(data) {
    const ul = document.createElement('ul');
    let liCompilados="";
      for (const element of data) {
    
        //elementos li
        let li=document.createElement('li');
        li.className='tarjeta';
        li.setAttribute('itemscope', '');
        li.setAttribute('itemtype', 'Artist');
        li.setAttribute('data-id', element.id);
    
        //ahora, cada elemento li tiene un elemento dl que contiene a la imagen, el dt y el dd. Primero hacer el elemento dl
    
        const dl = document.createElement('dl');
        dl.setAttribute('itemscope', '');
        dl.setAttribute('itemtype','Artist');
    
        //aquí se crea el elemento de la imagen y se anexa al elemento dl
        const img = document.createElement('img');
        img.className= 'image';
        img.src = element.imageUrl;
        img.alt='imagen';
        dl.appendChild(img);
        
    
        //ahora crear los elementos dt y dd pero esto se hace para cada una de las claves de cada elemento. las claves son el id, name, shortdescription, etc
        const keys=[`${element.id}`, `${element.name}`, 
        `${element.shortDescription}`, `${element.description}`,
        `${element.facts.genre}`, `${element.facts.albums}`, `${element.facts.artist}`];
        //let keysCompliadasDt="";
        //let keysCompiladasDd="";
          keys.forEach(key=>{  
          const dt = document.createElement('dt');
          const dd = document.createElement('dd');
          dd.setAttribute('itemprop',`${key.element}`);
          dd.innerHTML = [key];
          //dt.appendChild(dd);
          //keysCompliadasDt=(dt);
          //keysCompiladasDd=(dd);
          dl.appendChild(dt);
          dl.appendChild(dd);
          
        
        });
        
        //console.log(dl);
        li.appendChild(dl);
        liCompilados= li;
        
        ul.appendChild(li);
        
      }
      
      return ul;
    }
    