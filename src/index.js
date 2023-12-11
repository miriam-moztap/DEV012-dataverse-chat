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
import {PruebaHome} from './views/Home.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';
import Clother from './views/Clother.js';

// Define your routes and their associated views
const routes = {
  "/": PruebaHome,
  "/ropa": Clother,
  "/error" : 'Hola',
};

const viewContainer = document.getElementById('root');

// Assign the routes
setRoutes(routes);

setRootEl(viewContainer);


// Set the root element where views will be rendered
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
    
});
window.onpopstate = onURLChange;

