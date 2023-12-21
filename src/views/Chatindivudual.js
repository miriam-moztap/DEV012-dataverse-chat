import { formulario } from '../componentes/formulario.js';


export function chatindividual() {
  const contenedorChat = document.createElement('div');
  const parrafo = document.createElement('p');
  parrafo.className='parrafo';
  contenedorChat.appendChild(formulario());
  contenedorChat.appendChild(parrafo);
  const API_KEY = ''
  async function getCompletion(input) {
    const respuesta = await fetch('https://api.openai.com/v1/chat/completions',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
          "role": "system",
          "content": input,
        },
          
        ]
  })
}
    )
    return await respuesta.json();
    
  }
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

