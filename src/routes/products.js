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

router.post("/newProducts", async(req, res) => {
    const { id, producto } = req.body
    const arrayData = [producto, id];

    const rowsOldProduct = await data("SELECT * FROM inventario WHERE id = ?", id);
    const jsonOldProduct = JSON.parse(JSON.stringify(rowsOldProduct));
    const arrayOldProduct = [jsonOldProduct[0].id, jsonOldProduct[0].productos, jsonOldProduct[0].state, jsonOldProduct[0].date];
    console.log(jsonOldProduct[0].date);
    await data(`UPDATE inventario
    SET productos   =?, state = 0,  date=default
    WHERE id=?`, arrayData);
    await data(`INSERT INTO remplazado VALUES(?,?,?,?)`, arrayOldProduct);
    res.send(rowsOldProduct);
});

module.exports = router;