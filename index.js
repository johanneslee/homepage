var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;
handle["/about"] = requestHandlers.about;
handle["/projects"] = requestHandlers.projects;
handle["/blog"] = requestHandlers.blog;
handle["/extFiles"] = requestHandlers.extFiles;

server.start(router.route, handle);