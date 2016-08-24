strftime = require 'strftime'
net = require 'net'
port = process.argv[2]

net.createServer( (socket) ->
    socket.end(strftime('%Y-%m-%d %H:%M' + '\n'))
).listen(port)
