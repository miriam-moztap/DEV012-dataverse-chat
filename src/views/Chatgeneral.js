import { formulario } from '../componentes/formulario.js';

export function chatgeneral() {
  const contenedorChatGeneral = document.createElement('div');
  contenedorChatGeneral.appendChild(formulario());
  return contenedorChatGeneral;
}