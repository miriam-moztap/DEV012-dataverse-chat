import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { iconHome } from "../componentes/iconos.js";

//la función de fetch s etiene que generar dentro de lib, pasar ahí tamibén el data set y el data functions
export function contenedorAPI() {
   const contenedorAPI = document.createElement("div");
  contenedorAPI.className = "apiKey";

  const contenedorIconoApi = document.createElement('div');
  contenedorIconoApi.className = "IconoApi";
  contenedorIconoApi.appendChild(iconHome());
contenedorAPI.appendChild(contenedorIconoApi);

  
  contenedorAPI.appendChild(header());
  const apiTitulo = document.createElement('h1');
  apiTitulo.textContent='API Key';
  apiTitulo.className='apiTitulo';
  contenedorAPI.appendChild(apiTitulo);

  
  contenedorAPI.appendChild(formularioEnviar());
  contenedorAPI.appendChild(pieDePagina());

  const formularioApi = contenedorAPI.querySelector("#formApi");
  if (formularioApi) {
    formularioApi.addEventListener("submit", async (e) => {
      e.preventDefault();
      const apiKey = contenedorAPI.querySelector(".textAreaApi").value;
      console.log(apiKey);

      const apiKeyValid = await validarApiKey(apiKey);
      if (apiKeyValid) {
        localStorage.setItem("chatGptApiKey", apiKey);
        window.location.href = "/chatindividual";
      } else {
        alert("Api Key incorrecta, inténtalo de nuevo");
      }
    });
    async function hayApiKey(apiKey) {
      localStorage.getItem(apiKey); //aquí tenemos que decirle que si hay una apikey que nos mande al chat, si no pos a la apikey
      return apiKey === "aa";
    }
  }
  return contenedorAPI;
}
