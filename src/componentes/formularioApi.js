export function formularioApiKey() {
  const form = document.createElement("form");
  form.setAttribute("id", "formApiK");
  const textArea = document.createElement("textarea");
  textArea.placeholder = "Introduce la APIKey";
  textArea.className = "formularioApiKey";
  const input = document.createElement("input");
  input.type = "submit";
  input.className = "botonEnviar";
  input.value = "Enviar";
  form.appendChild(textArea);
  form.appendChild(input);
  return form;
}
