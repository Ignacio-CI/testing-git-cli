const http = require('http');

const server = http.createServer((req, res) => {
    //console.log('===> req (solicitud)');
    //console.log(req);
    // console.log(req.url);
    // console.log(req.method); // GET, POST, PUT, DELETE
    // console.log(req.headers);
    
    console.log('===> res (respuesta)');
    //console.log(res);
    console.log(res.statusCode); // 200 OK
    // res.statusCode = 404;
    // console.log(res.statusCode); // 404 NOT FOUND

    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeaders());
    res.end('Hola Mundo');
});

const PORT = 3000;

server.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}...`);
});