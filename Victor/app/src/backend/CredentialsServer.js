var http = require('http'),
		CredentialsController = require('./CredentialsController.js');

const port = 8888;

http.createServer(function(request, response) {
		CredentialsController.resolve(request.url, response);
		response.end(); 
}).listen(port);

console.log('Waiting for requests on', port);
