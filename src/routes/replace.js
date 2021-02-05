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
        if (state == 1) {
            //Borrar dato temporal en la tabla
            data(`DELETE FROM remplazado
            WHERE id=?`, id)
            res.send("se borro un producto de remplazado con la id = " + id);
                //Cambiar el estado del nuevo producto
            await data(`UPDATE inventario SET state = ? WHERE id = ?`, arrayData);
            res.send("cambio el state del nuevo producto con id = " + id);
        } else if (state == 0) {
           data('UPDATE inventario set id = ?,set productos = (SELECT productos WHERE id = ?),set state = 1, date = (SELECT date WHERE id = ?)',id,id,id);
           res.send("se acutalizo el state de un producto con id = " + id);
        }
    } else {
        if (state == 1) {
            data(`UPDATE inventario SET state = ? WHERE id = ?`, arrayData);
            res.send("se acutalizo el state de un producto con id = " + id);
        } else if (state == 0) {
            data(`DELETE FROM inventario WHERE id=?`, id);
            res.send("se borro un producto con id = " + id);
        }
    }
});

module.exports = router;