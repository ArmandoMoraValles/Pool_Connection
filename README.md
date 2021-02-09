# Simulacion-de-Inventario

## Introduccion
Este es un pequeño proyecto de prueba, diseñado para practicar el trabajo en equipo utilizando el 
control de versión de 
git –github, además del manejo de tablas simples en una base de datos SQL y la 
creación de rutas en código JavaScript utilizando el framework de backend llamado Node.js, el proyecto tambien funciona como un ejemplo 
de una API-rest. 

### ¿ Que hace este proyecto ?
Se tiene una lista de 6 productos en inventario de un almacén. Se desea actualizar la lista de esos productos agregando 2 productos nuevos. Pero 1 de esos productos sustituirá a uno de los 6 previamente registrados.
Tareas a realizar:
-Cuando se registre el nuevo producto en inventario se le debe poner un estado de "por aprobar" antes de que pueda ser visto en el sistema.
-Se debe poder cambiar el estado del producto registrado a "aprobado" para que pueda ser visto ahora si en el sistema.
-El otro producto a registrar debe sustituir los registros de 1 de los productos anteriormente registrados y al momento de sustituirlo debe tener un estado de "por aprobar".
-Idear una manera de regresar al producto previamente sustituido si el producto nuevo con estado de "por aprobar" es rechazado.

 ### Ejecutar correctamente el proyecto
 Para ejecutar correctamente el pryecto se deben hacer uso de Node.js e instalar las siguientes dependecias de npm:
 
 express : https://www.npmjs.com/package/express
 
 nodemon: https://www.npmjs.com/package/nodemon
 
 mysql: https://www.npmjs.com/package/mysql
 
 se debe tener conectado el proyecto a una base de datos sql local que contenga las siguientes tablas: 
 

 create table inventario(
 
    id integer auto_increment unique not null ,
    
    productos varchar(20) unique,
    
    state boolean not null ,
    
    date datetime default CURRENT_TIMESTAMP
    
)

 
create table remplazado(

    id integer unique,
    
    productos varchar(20) unique,
    
    state boolean not null ,
    
    date datetime default CURRENT_TIMESTAMP
    
);

 ### Notas: 
 Se recomienda el uso de postman para probar las rutas de manera sencilla
 
