const http = require('http');
const path = require('path');
const url = require('url');
const express = require('express');
const app = express();
const iport = express();
const socketio = require('socket.io');
const bodyparser = require('body-parser');
const server = http.createServer(app);
const io = socketio.listen(server);
require('./socket.js')(io);
app.set('port', process.env.PORT||3000);
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.post('/viral',function (req, res){
	// curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'//console.log("Se accedio a la pagina 2)");
	console.log(req.body);//res.writeHead(200);
	res.end();
	io.emit(req.body);
});
	//console.log('///////////////////////////////////////////////////////////////////////');
	//console.log(io.Server);
server.listen(app.get('port'),() => {
//	console.log('hola mundo');
//});
var a = 14;
var b = 16;
console.log(a+b);
});