import { getCompletion } from "../lib/API.js";


const OpenIAResponse = jest
.fn()
.mockResolvedValueOnce({ choices: [{ message: 'artistas' }] });

// Mockear localStorage
const localStorageMock = {
  getItem: jest.fn(),
};

// Configurar el mock de localStorage
global.localStorage = localStorageMock;

// hacer implementación falsa de fetch
global.fetch = jest.fn(() => 
Promise.resolve({
  json: OpenIAResponse
}));


describe('Endpoint de openIA', () =>
{
  it('La API es llamada con los datos adecuados', () => {

    
const inputUsuario = "artistas";
const name = "Selena";
const API_KEY = "12345"
    // const messages = [{role: 'user', content: 'foo'}];

    // Mockear localStorage.getItem para devolver API_KEY
    localStorageMock.getItem.mockReturnValue(API_KEY);
    
    getCompletion(inputUsuario, name);

    expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: "Bearer " + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `Simula que eres ${name}, un personaje llamado ${name}. Si eres un grupo o banda, asume que eres el vocalista principal, si no, asume que eres el vocalista`,
  
          },
          {
            role: 'user',
            content: inputUsuario,
          },
        ],
      })
    });
  });

  it('El edpoint responde de manera correcta', () => {

    const response = {
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "¡Hola!"
          }
        }]
    };

    OpenIAResponse.mockResolvedValueOnce(response);


            return getCompletion('inputUsuario',[{ role: 'user', content: 'foo'}])
              .then((resolved) => {
              expect(resolved).toBe(response);
            });
      });
})

// // API.test.js
// import { getCompletion } from "../lib/API.js";

// // Hacer implementación falsa de fetch
// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => ({})
// }));

// describe('Endpoint de openIA', () => {
//   it('La API es llamada con los datos adecuados', () => {
//     const API_KEY = 'mockApiKey'; // Agrega tu API_KEY de prueba aquí
//     const messages = [{ role: 'user', content: 'foo' }];

//     getCompletion(API_KEY, messages);

//     expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: messages,
//       }),
//     });
//   });

//   it('El endpoint responde de manera correcta', () => {
//     const API_KEY = 'mockApiKey'; // Agrega tu API_KEY de prueba aquí
//     const response = {
//       "choices": [
//         {
//           "message": {
//             "role": "assistant",
//             "content": "¡Hola!"
//           }
//         },
//       ],
//     };

//     global.fetch.mockResolvedValueOnce({
//       json: () => Promise.resolve(response)
//     });

//     return getCompletion(API_KEY, [{ role: 'user', content: 'foo' }])
//       .then(resolved => {
//         expect(resolved).toEqual(response);
//       })
//       .catch(error => {
//         // Manejar el error si es necesario
//         console.error(error);
//       });
//   });
// });