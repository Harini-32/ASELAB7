var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(' Deployed node JS application on EC2 server sucessfully\n');
}).listen(3000);

console.log('Server started');