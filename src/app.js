'use strict'

const express = require('express');

const app = express();

//carregar rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

//uso do express json para transformar as requisiçoes de body em json
app.use(express.json());

//chamando as rotas
app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;