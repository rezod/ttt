var http = require('http');
var url = require("url");
var sys = require('sys');


function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    };


    http.createServer(onRequest).listen(process.env.PORT, process.env.IP, function(){
        console.log("server listening");
    });
}

exports.start = start;
