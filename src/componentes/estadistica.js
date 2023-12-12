import { computeStats } from "../dataFunctions.js";

export const estadistica = (data) => {
  const contenedorEstadistica = document.createElement("div");
  contenedorEstadistica.setAttribute("id", "conteo");
  const parrafoEstadística = document.createElement("p");
  let sumaData = computeStats(data);
  parrafoEstadística.innerHTML = `Total de Albums: ${sumaData}`;
  contenedorEstadistica.appendChild(parrafoEstadística);
  return contenedorEstadistica;
};
