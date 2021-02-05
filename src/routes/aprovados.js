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

router.get("/aprovados",async (req,res) => {
    const rows = await data('SELECT * FROM inventario WHERE state = 1')
    res.send("<h1>Productos</h1><li>"+ rows[0].productos +"</li><li>"+ rows[1].productos +"</li><li>"+ rows[2].productos +"</li><li>"+ rows[3].productos +"</li><li>"+ rows[4].productos +"</li><li>"+ rows[5].productos +"</li>")
    res.send("gol")
})
module.exports = router;