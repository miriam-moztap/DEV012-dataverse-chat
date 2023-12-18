import { ApiKey } from "../componentes/Apikey.js";
import { boton } from "../componentes/boton.js";

export function contenedorAPI() {
const contenedor = document.createElement('div');
contenedor.appendChild(ApiKey());
contenedor.appendChild(boton());

const botonEnviar = contenedor.querySelector('.botonEnviar');
botonEnviar.addEventListener('click', () =>{

});
return contenedor;
}