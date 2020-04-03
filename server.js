'use strict'
//imports de pacotes
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
//escolhendo a porta
const port = normalizePort(process.env.PORT || '3333');
app.set('port',port);

//criando o web server
const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req,res,next) => {
    res.status(200).send({
        title: "Hello World!",
        version: "1.0.0"
    });
});

//escolhendo caminho e colocar o codigo para ouvir a porta
app.use('/', route);

server.listen(port); console.log('API Rodando na porta ' + port);

//função de normalização da porta

function normalizePort(val){
    const port = parseInt(val,10);
    
    if(isNaN(port)){
        return val;
    }

    if(port>=0){
        return port;
    }

    return false;
}