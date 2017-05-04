var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');
	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
require('./api/routes/login-routes')(app);
require('./api/routes/user-info-routes')(app);
	
app.listen(port);
console.log('The server is on: '+ port);