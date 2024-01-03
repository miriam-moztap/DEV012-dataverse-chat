export function formulario() {
  const form = document.createElement('form');
  form.setAttribute('id', 'formApi');
  const textArea = document.createElement('textarea');
  textArea.placeholder = 'Escribe aquí tu mensaje'; // poner label
  textArea.className = 'formulario';
  const input = document.createElement('input');
  input.type = 'submit';
  input.className = 'botonEnviar';
  input.value = 'Enviar';
  form.appendChild(textArea);
  form.appendChild(input);
  return form;
}
