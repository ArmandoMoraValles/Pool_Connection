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
    const rows = await data(`SELECT * FROM remplazado WHERE id = ?`, id);
    if (rows.length > 0) {
        if (state === 1) {
            //Borrar dato temporal en la tabla
            data(`DELETE FROM remplazado
            WHERE id=?`, id)
                //Cambiar el estado del nuevo producto
            data(`UPDATE inventario SET state = ? WHERE id = ?`, arrayData);
        } else if (state === 0) {
            //rows = await data
        }
    } else {
        //Es el producto que simplemente se agrego
        if (state === 1) {
            //modificar el estado a 1 
        } else if (state === 0) {
            //Se borra el dato
        }
    }
    res.send(rows);
});

module.exports = router;