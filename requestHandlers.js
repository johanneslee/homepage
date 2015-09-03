var fs = require('fs');
var path = require('path');

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

function extFiles(response, pathname, postData) {
    console.log("Request handler 'extFiles' was called.");

    var filePath = '.' + pathname;
	var pathext = path.extname(pathname);
	var contentType = 'text/html';
    
    switch(pathext) {
        case '.js':
        	contentType = 'text/javascript';
            break;
        case '.css':
        	contentType = 'text/css';
            break;
		case '.jpg':
        	contentType = 'image/jpg';
            break;
	}
    
    if(filePath) {
		fs.readFile(filePath, function(error, content) {
			if (error) {
				response.writeHead(500);
				response.end();
			}
			else {
				response.writeHead(200, {'Content-Type': contentType});
				response.end(content, 'utf-8');
			}
		});
	}
	else {
		response.writeHead(404);
		response.end();
	}
}

exports.home = home;
exports.about = about;
exports.projects = projects;
exports.blog = blog;
exports.extFiles = extFiles;