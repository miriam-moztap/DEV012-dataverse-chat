import { formulario } from '../componentes/formulario.js';

export function chatindividual() {
  const contenedorChat = document.createElement('div');
  contenedorChat.appendChild(formulario());
  return contenedorChat;
}
