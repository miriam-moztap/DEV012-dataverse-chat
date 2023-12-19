import { formulario } from "../componentes/formulario.js";

export function contenedorAPI() {
const contenedor = document.createElement('div');
contenedor.appendChild(formulario());

const formularioApi = contenedor.querySelector('#formApi');
if(formularioApi){
formularioApi.addEventListener('submit', async (e) =>{
    e.preventDefault();
    let textArea= contenedor.querySelector('.textAreaApi').value;
    console.log(textArea);

});

}
return contenedor;
}