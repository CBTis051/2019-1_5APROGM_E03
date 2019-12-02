var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo Node JS Repo GIT - Zamudio Canizales Sealthiel\n');
}).listen(8081);
console.log('Server runing on port 8081');
