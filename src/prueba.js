const http = require('http');
const path = require('path');
const url = require('url');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const iport = express();
const socketio = require('socket.io');
const bodyparser = require('body-parser');
const server = http.createServer(app);
const io = socketio.listen(server);
require('./socket.js')(io);
const Usuario = mongoose.model('users', { 
	name: String,
	position:{ x:Number,y:Number}
	 });
//PUBLIC KEY uqkyouzx
//PRIVATE KEY 342c923c-9828-420e-92bd-2cfec87dd7fa
//smrangel:marc1928MA@host:3000/nombre_BD
mongoose.connect('mongodb+srv://mrangel:marc1928MA@integracion-nodejs.hqcyo.mongodb.net/dynamicinfo?retryWrites=true&w=majority',
	{useNewUrlParser: true, useUnifiedTopology: true},()=>{
		console.log("conexion con DB");
		Usuario.create({
			name:"juan",
			position:{x:14,y:124} 
		});
		Usuario.create({
			name:"pedro",
			position:{x:14,y:124} 
		});
		Usuario.create({
			name:"rosa",
			position:{x:14,y:124} 
		});
		Usuario.create({
			name:"Franco",
			position:{x:14,y:124} 
		});
		Usuario.create({
			name:"Lucas",
			position:{x:14,y:124} 
		});
});


app.set('port', process.env.PORT||3000);
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.post('/viral',function (req, res){
	// curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'//console.log("Se accedio a la pagina 2)");
	console.log(req.body);//res.writeHead(200);
	res.json({})

	res.end();
	//io.emit(req.body);
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