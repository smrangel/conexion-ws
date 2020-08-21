module.exports =function(server){
var conexiones=[];
var grupo=[];
//WEBSOCKETS
const socketio = require('socket.io');//(server, {'transports': ['websocket', 'polling']});	//require('./socket.js')(io,app);
const io = socketio(server);
io.on('connection' , (socket) => {
	conexiones.push(socket.id);
	var cont = conexiones.length;
	console.log("nueva conexion: "+conexiones[cont-1]);
	if(cont===4){
		//console.log(cont);
		console.log(cont);
		io.to(conexiones[1]).emit('chat message', 'hola numero dos');
		console.log(conexiones[1]);
		console.log("habitacion llena");
	}
	socket.on('mensaje',(data) => {
	 	io.on('disconnect',function(){
	 	console.log("disconnect"+socket.id);});	
	});
	socket.on('grupo',(data)=>{
	//si el cliente se une a un grupo, se guarda en la base de datos del grupo
		grupo.push(data);
	});
	socket.on('grupo_mensaje',(data)=>{
		console.log(grupo[0]);
	});
});




}