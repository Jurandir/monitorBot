const net = require('net')

var textChunk = ''

var ii = 0

var server = net.createServer(function(socket) {
	socket.write('Socket Write OK\r\n')
    socket.pipe(socket)

	socket.on('data', function(data){
		console.log(data);
		textChunk = data.toString('utf8');
        console.log(textChunk);
        ++ii
		socket.write('TESTE OK :'+textChunk+' '+ii);
    })

    socket.on('close', function() {
        console.info('Socket close');
    })

    socket.on('error', function(err) {
        console.error('Socket error: ' + err + ', count = ' + ii);
        console.error(new Error().stack);
    })

})

server.listen(1338, '127.0.0.1')
