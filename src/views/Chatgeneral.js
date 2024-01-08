import { chat } from "../componentes/formulario.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";

export function chatgeneral() {
  const chatView = document.createElement("div");
  chatView.appendChild(header());

  const cajaPrincipal = document.createElement('div');
  cajaPrincipal.className = 'cajaPrincipalChatG';
  cajaPrincipal.appendChild(chat());
  cajaPrincipal.appendChild(formularioEnviar());
  chatView.appendChild(cajaPrincipal);

  chatView.appendChild(pieDePagina());

  return chatView;
}
