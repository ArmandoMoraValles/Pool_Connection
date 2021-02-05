const express = require("express");
const mysqlConnection = require("./connection");
const app = express(); //Esta funcion retorna un objeto
//settings //configuraciones del servidor
app.set("port", process.env.PORT || 3006);

//midlewars //funciones que se ejecutan antes de que se procese algo 
app.use(express.json()); //Si se recibe un json nuestro mudulo de expres lo entendera
//app.use(body.json()); //formato app/json

//Routes //Manera de comunicar el servidor con el navegador
app.use("/api", require("./routes/main.js"));
app.use("/api", require("./routes/aprovados"));
app.use("/api", require("./routes/products"));
app.use("/api", require("./routes/addproduct.js"));
app.use("/api", require("./routes/replace"));
//Sataring the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
})