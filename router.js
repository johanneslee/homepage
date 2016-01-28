/*
function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData);
	} else {		
		handle["/extFiles"](response, pathname, postData);
	}
}
exports.route = route;
*/

var express = require('express');
module.exports = function(app) {
	app.use('/static', express.static('./static'))
	   .use('/images', express.static('./images'))
	   .use('/lib', express.static('./lib'));
	
	app.get('/', function(req, res) { res.render('home'); })
	   .get('/about', function(req, res) { res.render('about'); })
	   .get('/blog', function(req, res) { res.render('blog'); })
	   .get('/home', function(req, res) { res.render('home'); })
	   .get('/projects', function(req, res) { res.render('projects'); });
};