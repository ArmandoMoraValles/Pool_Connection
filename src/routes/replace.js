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
    if (rowsOldProduct.length > 0) {
        const arrayOldProduct = [jsonOldProduct[0].id, jsonOldProduct[0].productos, jsonOldProduct[0].state, jsonOldProduct[0].date, id];
        if (state === 1) {
            await data(`DELETE FROM remplazado
            WHERE id=?`, id)
            await data(`UPDATE inventario SET state = ? WHERE id = ?`, arrayData);
            res.send("ok")
        } else if (state === 0) {
            await data(`UPDATE inventario SET id = ?, productos = ?, state = ?, date = ? WHERE id = ?`, arrayOldProduct);
            await data(`DELETE FROM remplazado WHERE id=?`, id);
            res.send("ok")
        }
    } else {
        if (state === 1) {
            await data(`UPDATE inventario SET state = 1 WHERE id = ?`, id);
            res.send("se acutalizo el state de un producto con id = " + id);
        } else if (state === 0) {
            await data(`DELETE FROM inventario WHERE id=?`, id);
            res.send("se borro un producto con id = " + id);
        }
    }
});

module.exports = router;