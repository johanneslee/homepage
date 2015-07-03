var fs = require('fs');

function home(response, postData) {
	console.log("Request handler 'home' was called.");
	fs.readFile(__dirname + '/pages/home.html', function (error, html) {
		if (error) {
			throw error;
		}
		response.writeHead(404, {"Content-Type": "text/html"});
	    response.write(html);
	    response.end();
	});
}

function about(response, postData) {
	console.log("Request handler 'about' was called.");
	fs.readFile(__dirname + '/pages/about.html', function (error, html) {
		if (error) {
			throw error;
		}
		response.writeHead(404, {"Content-Type": "text/html"});
	    response.write(html);
	    response.end();
	});
}

function projects(response, postData) {
	console.log("Request handler 'projects' was called.");
	fs.readFile(__dirname + '/pages/projects.html', function (error, html) {
		if (error) {
			throw error;
		}
		response.writeHead(404, {"Content-Type": "text/html"});
	    response.write(html);
	    response.end();
	});
}

function blog(response, postData) {
	console.log("Request handler 'blog' was called.");
	fs.readFile(__dirname + '/pages/blog.html', function (error, html) {
		if (error) {
			throw error;
		}
		response.writeHead(404, {"Content-Type": "text/html"});
	    response.write(html);
	    response.end();
	});
}

function extFiles(response, pathext, pathname, postData) {
    console.log("Request handler 'extFiles' was called.");
    switch(pathext) {
        case '.css':
            fs.readFile(__dirname + pathname, function(error, data) {
                if (error) {
                	throw error;
                }
                response.writeHead(200, {"Content-Type": "text/css"});
            	response.write(data);
            	response.end();
            });
            console.log("Routed for CSS "+ pathname +" Successfully");
            break;
        case '.js':
            fs.readFile(__dirname + pathname, function(error, data) {
                if (error) {
                	throw error;
                }
                response.writeHead(200, {"Content-Type": "text/javascript"});
            	response.write(data);
            	response.end();
            });
            console.log("Routed for Javascript "+ pathname +" Successfully");
            break;
		case '.jpg':
			fs.readFile(__dirname + pathname, function(error, data) {
				if (error) {
					throw error;
				}
				response.writeHead(200, {"Content-Type": "image/jpg"});
				response.end(data, 'binary');
			});
			console.log("Routed for jpg "+ pathname +" Successfully");
			break;
	}
}

exports.home = home;
exports.about = about;
exports.projects = projects;
exports.blog = blog;
exports.extFiles = extFiles;