import { chat } from "../componentes/formulario.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";

export function chatgeneral() {
  const chatView = document.createElement("div");
  const cajaChatGeneral = document.createElement("div");
  cajaChatGeneral.className = "cajaChatGeneral";
  cajaChatGeneral.appendChild(chat());
  const headerComponent = header();
  headerComponent.className = "headerChatGeneral";
  chatView.appendChild(headerComponent);
  chatView.appendChild(cajaChatGeneral);
  const footerChatGeneral = pieDePagina();
  footerChatGeneral.className = "footerChatGeneral";
  chatView.appendChild(footerChatGeneral);
  return chatView;
}
