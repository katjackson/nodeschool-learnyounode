var http = require('http');
var url = require('url');
var port = process.argv[2];


function parseTime (datetime) {
    var responseBody = {
        "hour": datetime.getHours(),
        "minute": datetime.getMinutes(),
        "second": datetime.getSeconds()
    };
    return responseBody;
};


function parseUnixTime (datetime) {
    var responseBody = {
        "unixtime": datetime.getTime()
    };
    return responseBody;
};


var server = http.createServer(function (request, response) {
    var urlParts = url.parse(request.url, true);
    var datetime = new Date(urlParts.query['iso']);

    if (urlParts.pathname == '/api/parsetime') {
        var responseBody = parseTime(datetime);
    } else if (urlParts.pathname == '/api/unixtime') {
        var responseBody = parseUnixTime(datetime)
    };

    if (responseBody) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(responseBody));
        response.end();
    } else {
        response.writeHead(404);
        response.end();
    };
});

server.listen(port);
