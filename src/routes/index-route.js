'use strict'

const express = require('express');
const router = express.Router();

//rota base para testar se esta funcionando
router.get('/', (req,res,next) => {
    res.status(200).send({
        title: "Hello World!",
        version: "0.0.2"
    });
});

module.exports = router;