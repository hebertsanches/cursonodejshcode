const http = require('http');
const host = "127.0.0.1"
const port = 3000;
/*request(req) == quando solicito informaçao, requisitando. response(res) == Quando o servidor retorna essa informaçao*/
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Ola Mundo\n Meu Primeiro Script');
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})