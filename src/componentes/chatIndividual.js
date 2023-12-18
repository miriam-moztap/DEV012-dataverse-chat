export function chat(){
    const contenedorChat = document.createElement('div');
    const textArea = document.createElement('textarea');
    textArea.className = "textArea";
    textArea.placeholder = "Chatea conmigo..."
    contenedorChat.appendChild(textArea);

    
    return contenedorChat;

    
}