var	express = require('express'),
	app = express(),
	port;

// Configure the server with general information
app.configure(function () {
	app.use(express.compress()); // Compress the data send by "req.send"
	app.use(express.methodOverride()); // Allow to use the PUT and DELETE method
	app.use(express.bodyParser()); // Allow the body parsing
	app.use(express.static(__dirname + '/public')); // Specify the location of our web application (it's like the folder "www" with Apache HTTP Server)
});

// Set the server in development mode
app.configure('development', function () {
	port = 8080;
});

// Set the server in production mode
app.configure('production', function () {
	port = 80;
});

app.listen(port); // start the server
console.log('Server is now listening on port', port);