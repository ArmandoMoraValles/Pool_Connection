const express = require("express");
const mysqlConection = require("../connection");
const router = express.Router();

const data = (sql) => {
    return new Promise((resolve, reject) => {
        mysqlConection.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows)
            }
        })
    })
}

router.get("/getData", async(req, res) => {
    const rows = await data(`SELECT * FROM inventario`);
    res.send(rows);
});

module.exports = router;