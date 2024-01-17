/*los test que yo haría: 
1. que se ordene de A-Z
2. que orden de Z-A
3. que filtre de acuerdo a la categoría
4. que dé una estadística
5. que la estadística dé el número de albums
6. que el número de álbums sea un dato numérico
*/
// import { computeStats, filterData, sortData } from "../lib/dataFunctions.js";
// import data from "/data/dataset.js";

// const { totalAlbums } = require('./data');

// describe("computeStats", () => {
//     it("debe devolver el total correcto de álbumes", () => {
//       const resultado = computeStats(fakeData);
  
//       expect(resultado).toBe(324);
//     });
//   });
  
//   describe("filterData", () => {
//     it("Debe devolver el total de álbumes después del filtrado por Género Pop", () => {
//       const filteredData = filterData(fakeData, "genre", "Pop");
//       const totalAlbumsInFilteredData = computeStats(filteredData);
  
//       expect(totalAlbumsInFilteredData).toBe(110);
//     });
  
//     it("Debe devolver el total de canciones de género Rock", () => {
//       const totalCancionesRock = filterData(fakeData, "genre", "Rock");
  
//       expect(totalCancionesRock.length).toBe(8);
//     });
  
//     it("Debe devolver el total de canciones de género Cumbia", () => {
//       const totalCancionesCumbia = filterData(fakeData, "genre", "Cumbia");
  
//       expect(totalCancionesCumbia.length).toBe(8);
//     });
  
//     it("Debe devolver el total de canciones de género Jazz", () => {
//       const totalCancionesJazz = filterData(fakeData, "genre", "Jazz");
  
//       expect(totalCancionesJazz.length).toBe(0);
//     });
//   });
  
//   describe("sortData", () => {
//     it("Debe devolver el nombre del artista en posición 0 cuando se ordene de la A - Z sobre la data completa", () => {
//       const sortedData = sortData(fakeData, 'name', 'asc');
//       const firstArtistName = sortedData[0].name;
  
//       expect(firstArtistName).toBe("Alejandro Sanz");
//       //console.log(firstArtistName);
//     });
  
//     it("Debe devolver el nombre del artista en posición 0 cuando se ordene de la Z - A en el género Cumbia", () => {
//       const filteredData = filterData(fakeData, 'genre', 'Cumbia');
//       const sortedData = sortData(filteredData, 'name', 'desc');
//       const secondArtistName = sortedData[0].name;
  
//       expect(secondArtistName).toBe("Selena");
//       //console.log(secondArtistName);
//     });
//   });