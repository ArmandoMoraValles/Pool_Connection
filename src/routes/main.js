const { Router } = require("express");

const express = require("express");
const router = express.Router();
router.get("/",async (req,res) => {
    res.send("hola");
})
module.exports = router;