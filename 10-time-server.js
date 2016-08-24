var net = require('net');
var strftime = require('strftime');
var port = Number(process.argv[2]);

var myServer = net.createServer(function listener(socket) {
    socket.write(strftime('%Y-%m-%d %H:%M' + '\n'));
    socket.end();
});

myServer.listen(port);
