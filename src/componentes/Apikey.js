export function ApiKey() {
 
  const contenedorApi = document.createElement('div');
  const textArea = document.createElement('textarea');
  textArea.className = "textAreaApi";
  textArea.placeholder = 'Ingresa API key';
  contenedorApi.appendChild(textArea);
 return contenedorApi;
}
