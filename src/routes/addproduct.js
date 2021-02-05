/**
 * 
 * @addProduct : Añade un producto directamente a la base de datos 
 *  esta ruta no remplaza un producto existente
 * 
 */

const express = require("express");
const mysqlConection = require("../connection");
const router = express.Router();

const data = (sql) => {
    return new Promise((resolve, reject) => {
        mysqlConection.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

router.post("/addProduct", async(req, res) => {
    const productos = req.body.productos;
    data("INSERT INTO inventario(id,productos,state,date) value(default,'" + productos + "',0,default)");
    res.send("completed..")
});

module.exports = router;