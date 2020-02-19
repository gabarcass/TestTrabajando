# Prueba trabajando.com
## Tecnologías utilizadas
La prueba fue realizada en sistema operativo Windows 10 y se utilizo:
 - Spring Tool Suite 4 para el backend (puerto 8081).
 - Angular Cli versión 9.0.1 (puerto 8080).
 - Mongodb (puerto 27017)

## Backend
El desarrollo del Backend fue el que me tomó más tiempo debido a que tuve que repasar Java el cual no lo veía hace ya algún tiempo e informarme sobre la utilización de Springboot. Para cumplir con la prueba consideré que no era necesario el uso de servicios debido a la poca cantidad de peticiones que se necesitaban, por lo cual, realicé la conexión directa entre el repositorio y el controlador. Además no profundicé mucho en el trato de excepciones limitándome a retornar las más probables que pueden suceder. 
### Instrucciones
Se detallan las instrucciones utilizando Spring Tool Suite 4.
- Clonar repositorio.
- Abrir Spring Tool Suite 4 y agregar la carpeta backend al workspace.
	> En caso de ser otro IDE reunir los requisitos de cada uno para el uso de Springboot.
- Finalmente presionar en compilar.

Ojo: Si por alguna razón el IDE no levanta el servidor de la base de datos, levantar según el sistema operativo.
## Frontend
Para el Frontend no encontré necesario la creación de rutas por el tamaño de la prueba. Se crearon dos componentes que disponen de los formularios solicitados (form y volumen) los cuales se conectan con el backend mediante un servicio llamado BackendService, esto fue así debido a que de esta manera si existen cambios en el backend solo se debe editar el servicio, centralizando la conexión con la api.
En caso de excepciones por parte del servidor, solo se informará al usuario en la utilización del método GET mediante una alerta, mientras que para el POST no considere aplicar medidas debido a que no se pueden ingresar valores no permitidos en el formulario.


### Instrucciones


- Clonar repositorio.
- Abrir tu IDE favorito y posicionarse en la carpeta front-end-angular.
- Ejecutar el comando npm install para instalar dependencias necesarias.
- Ejecutar el comando ng serve para montar el servidor.
- Finalmente, en el navegador ir a la dirección:
	> [http://localhost:4200/](http://localhost:4200/)



