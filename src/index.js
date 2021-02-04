const express = require("express");
const mysqlConnection = require("/Users/rice1/Documents/syntaxium/Simulacion-de-Inventario/src/connection");
const app = express(); //Esta funcion retorna un objeto
//settings //configuraciones del servidor
app.set("port", process.env.PORT || 3006);

//midlewars //funciones que se ejecutan antes de que se procese algo 
app.use(express.json()); //Si se recibe un json nuestro mudulo de expres lo entendera
//app.use(body.json()); //formato app/json

//Routes //Manera de comunicar el servidor con el navegador


//Sataring the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
})