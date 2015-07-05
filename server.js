var http = require("http");
var url = require("url");
var port = Number(process.env.PORT || 5000);

function start(route, handle) {
	function onRequest(request, response) {
        var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");
		
		request.addListener('data', function(data) {
			postData += data;
			console.log('Received POST data chunk ' + postData + '.');
	    });

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '"+postDataChunk + "'.");
		});

		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}
	
	http.createServer(onRequest).listen(port);
	console.log("Server has started.");
}

exports.start = start;