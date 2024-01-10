import { chat } from '../componentes/formulario.js';

export function chatindividual() {
  const contenedorChat = document.createElement('div');
  const parrafo = document.createElement('p');
  parrafo.className='parrafo';
  contenedorChat.appendChild(chat());
  contenedorChat.appendChild(parrafo);

const input= contenedorChat.querySelector('.textAreaApi');
 const button = contenedorChat.querySelector('.botonEnviar');
 const output = contenedorChat.querySelector('.parrafo');

 button.addEventListener('click', async(e)=>{
   e.preventDefault();
   console.log(input.value);
   const response=await getCompletion(input.value);
   console.log(response);
  
 });
 return contenedorChat;
}

