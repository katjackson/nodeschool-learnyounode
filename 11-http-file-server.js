var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var loc = process.argv[3];

// request is a readable stream and response is a writable stream
// format readableStream.pipe(writableStream);
var server = http.createServer(function(request, response) {
    var readStream = fs.createReadStream(loc);
    readStream.pipe(response);
});


server.listen(port);
