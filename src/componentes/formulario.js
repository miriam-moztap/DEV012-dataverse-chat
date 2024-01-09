export function chat() {
  const chat = document.createElement("div");
  chat.className = "chat";
  chat.setAttribute("id", "chat");
  return chat;
}

export function formularioEnviar() {
  const contMsj = document.createElement("div");
  const textArea = document.createElement("textarea");
  textArea.placeholder = "Escribe aquí...";
  textArea.className = "textArea";
  textArea.setAttribute("id", "textArea");
  const button = document.createElement("button");
  button.className = "botonEnviar";
  button.setAttribute("id", "botonEnviar");
  button.textContent = "Enviar";
  contMsj.appendChild(textArea);
  contMsj.appendChild(button);
  return contMsj;
}
