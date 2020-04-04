//imports de pacotes
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');


//escolhendo a porta
const port = normalizePort(process.env.PORT || '3333');
app.set('port',port);

//criando o web server
const server = http.createServer(app);


//escolhendo caminho e colocar o codigo para ouvir a porta
server.listen(port); console.log('API Rodando na porta ' + port);
server.on('listening', onListening);

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

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);

}