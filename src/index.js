// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import { PruebaHome } from './views/Home.js';
import { Personaje } from './views/Personaje.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Error } from './views/Error.js';
import { contenedorAPI } from './views/Apikey.js';
import { chatindividual } from './views/Chatindivudual.js';
import { chatgeneral } from './views/Chatgeneral.js';

// Define your routes and their associated views
const routes = {
  '/': PruebaHome,
  '/error': Error,
  '/personaje': Personaje,
  '/apikey': contenedorAPI,
  '/chatindividual': chatindividual,
  '/chatgeneral': chatgeneral,
};

const viewContainer = document.getElementById('root');

// Assign the routes
setRoutes(routes);

setRootEl(viewContainer);

// Set the root element where views will be rendered
document.addEventListener('DOMContentLoaded', (event) => {
  onURLChange(event.target.location.pathname);
});
window.onpopstate = onURLChange;
