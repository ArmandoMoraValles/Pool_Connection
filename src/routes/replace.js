const express = require("express");
const mysqlConection = require("../connection");
const router = express.Router();

const data = (sql, id) => {
    return new Promise((resolve, reject) => {
        mysqlConection.query(sql, id, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });

    });
}

router.post("/replace", async(req, res) => {
    const { id, state } = req.body;
    arrayData = [state, id];
    const rowsOldProduct = await data(`SELECT * FROM remplazado WHERE id = ?`, id);
    const jsonOldProduct = JSON.parse(JSON.stringify(rowsOldProduct));
    const arrayOldProduct = [jsonOldProduct[0].id, jsonOldProduct[0].productos, jsonOldProduct[0].state, jsonOldProduct[0].date, id];
    if (rowsOldProduct.length > 0) {
        if (state === 1) {
            data(`DELETE FROM remplazado
            WHERE id=?`, id)
            data(`UPDATE inventario SET state = ? WHERE id = ?`, arrayData);
        } else if (state === 0) {
            data(`UPDATE inventario SET id = ?, productos = ?, state = ?, date = ? WHERE id = ?`, arrayOldProduct);
            data(`DELETE FROM remplazado WHERE id=?`, id);
        }
    } else {
        //Es el producto que simplemente se agrego
        if (state === 1) {
            //modificar el estado a 1 
        } else if (state === 0) {
            //Se borra el dato
        }
    }
    res.send(rowsOldProduct);
});

module.exports = router;