//MODELO DE mongodb
module.exports =function(app,mongoose){

const Usuario = mongoose.model('users', { 
	name: String,position:{ x:Number,y:Number}});
mongoose.connect("mongodb+srv://mrangel:marc1928MA@integracion-nodejs.hqcyo.mongodb.net/dynamicinfo?retryWrites=true&w=majority",
	{useNewUrlParser: true, useUnifiedTopology: true},()=>{
	console.log("se conecto a mongodb");
	Usuario.create({name:"jose",position:{x:10,y:20}}).then(()=>{console.log("se creo Usuario");});
	});
	app.get('/as',async(req, res) =>{
	// curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'//console.log("Se accedio a la pagina 2)");
	const us = await Usuario.find();
	res.json({
		succes:true,
		data:{
			user:us
		}
	});
//	console.log("req.body");//res.writeHead(200);
//	socket.on('send',function(data){
//	   io.on('connection', socket =>{	
//	   console.log("fasfasf");
	//io.emit("");
//	   });
//	});
	
	//io.emit(req.body);
});
	
}