const net = require('net')

var client = new net.Socket();

client.on('data', function(data) {
	console.log('Received: ' + data);
	i++;
	if(i==3)
		client.destroy(); 
});

client.connect(1338, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Enviado pelo client');
});
var i = 0;

client.on('close', function() {
	console.log('Connection closed');
});

