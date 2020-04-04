'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controlle');

//rota CREATE
router.post('/', controller.post);

//rota PUT
router.put('/:id', controller.put);

//rota DELETE
router.delete('/', controller.delete);

module.exports = router;