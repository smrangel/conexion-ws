module.exports =function(io,app){
	app.post('/v',async (req, res) =>{
	// curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'//console.log("Se accedio a la pagina 2)");
	
	//const us = await Usuario.find(); 
	console.log("req.body");//res.writeHead(200);
	socket.on('send',function(data){
		console.log('data');
	});
	res.end();
	//io.emit(req.body);
});
	io.on('connection', socket =>{	
	//io.emit("");

	});

}