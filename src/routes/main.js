const express = require("express");
const mysqlConection = require("../connection.js");
const router = express.Router();

router.get("/", async(req, res) => {
    res.send("hola");
})
module.exports = router;