var filesystem = require('fs'),
		path = require('path');

module.exports = (function () {
	var self = {};

	var filePaths = [
			'../frontend/view/credentials.html',
			'../frontend/view/css/credentials.css',
			'../../node_modules/bootstrap/dist/css/bootstrap.min.css',
			'../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
			"../../node_modules/jquery/dist/jquery.min.js",
			"../frontend/app.js",
			"../frontend/services/CredentialsService.js",
			"../frontend/viewmodels/CredentialsVM.js",
			"../frontend/widgets/CredentialsWidgets.js",
			"../../node_modules/bootstrap/dist/js/bootstrap.min.js",
			"../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
		],
		files = {};

	filePaths.forEach(function(filePath) {
		filesystem.readFile(path.join(__dirname, filePath), function(error, file) {
			if(error) {
				throw(error);
			}
			var fileName = filePath.split('/');
			fileName = fileName[fileName.length - 1];

			files[fileName] = file;
		});
	});

	self.resolve = function(url, response) {

		if(url === '/') {
			response.writeHeader(200, {"Content-Type": "text/html"});  
			response.write(files['credentials.html']);
		} else if(url.indexOf('.css') > 0) {
			response.writeHeader(200, {"Content-Type": "text/css"});  
			switch(url) {
				case '/css/credentials.css': response.write(files['credentials.css']); break;
				case '/css/bootstrap.min.css': response.write(files['bootstrap.min.css']); break;
				case '/css/bootstrap-grid.min.css': response.write(files['bootstrap-grid.min.css']); break;
				case '/css/bootstrap-grid.min.css': response.write(files['bootstrap-grid.min.css']); break;
			}
		} else if(url.indexOf('.js')) {
			response.writeHeader(200, {"Content-Type": "text/javascript"});  
			switch(url) {
				case "/js/jquery.min.js": response.write(files['jquery.min.js']); break;
				case "/js/app.js": response.write(files['app.js']); break;
				case "/js/CredentialsService.js": response.write(files['CredentialsService.js']); break;
				case "/js/CredentialsVM.js": response.write(files['CredentialsVM.js']); break;
				case "/js/CredentialsWidgets.js": response.write(files['CredentialsWidgets.js']); break;
				case "/js/bootstrap.min.js": response.write(files['bootstrap.min.js']); break; 
				case "/js/bootstrap.bundle.min.js": response.write(files['bootstrap.bundle.min.js']); break; 
			}
		}
		return response;
	}
	return self;
})();
