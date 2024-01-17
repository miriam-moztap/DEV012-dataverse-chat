# Dataverse Chat

El proyecto consiste en el desarrollo de una Single Page Application (SPA). En la página principal (Home) se visualizan tarjetas con el nombre, imagen, género, número de albumes, etc., de algunos artistas que pertenecen a los géneros pop, rock y cumbia. Estas tarjetas se pueden filtrar por género; ordenar de manera ascendende (A-Z) y descendente (Z-A); también podremos calcular el número de albumes por género. Al final de cada vista se encuentra el footer con los datos de quiénes realizan este proyecto. En la parte superior de esta vista se encuentras tres íconos que son los siguientes:
* Ícono de Home: está representado con una casa amarilla, se encuentra presente en todas las vistas para el usuario pueda regresar a la página principal.
* Ícono de chat general: representado por una viñeta amarilla en forma de chat, este dirige al usuario hacia la vista del chat grupal.
* Ícono de Api Key: este botón ayuda al usuario a dirigirse a la vista de Api Key.

### Vistas de esta SPA

* Chat Individual: el usuario podrá hacer click sobre la tarjeta de algún artista (desde Home) para dirigirse a la vista de chat individual. Aquí podrá chatear con el artista y preguntar cualquier dato de su interés.
* Chat grupal: en esta sección el usuario podrá interactuar con todos los artistas.
* Api Key: antes de recibir alguna respuesta en cualquiera de los dos chats, el usuario deberá introducir la Api Key en esta página. Una vez guardada esta clave, podrá dirigirse al chat de su interés con ayuda de los botones de navegación de esta página. En cambio, si la clave es incorrecta los botones que se encuentran en el chat individual y chat grupal facilirán redirigirse a esta vista para introducir la Api Key nuevamente.
* Error: en caso de que no se introduzca el nombre correcto de una vista se dirigirá a una página de error.




