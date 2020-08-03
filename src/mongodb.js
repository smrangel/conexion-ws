//MODELO DE mongodb
module.exports =function(app,mongoose,express){
const ust = new mongoose.Schema({name:String,position:{x:Number,y:Number}});
const Usuario = mongoose.model('users',ust);
	mongoose.connect("mongodb+srv://mrangel:marc1928MA@integracion-nodejs.hqcyo.mongodb.net/dynamicinfo?retryWrites=true&w=majority",
		{useNewUrlParser: true, useUnifiedTopology: true},()=>{
		console.log("se conecto a mongodb");
		
		app.get('/buscar/:name',async(req, res) => {
			const name = req.params.name;
			console.log(name);
			const us = await Usuario.find(function (err, kittens) {
  				if (err) return console.error(err);
  				console.log(kittens);
			});
			res.json({
				succes:true,
				data:{
					user:us
				}
			});
		});
		app.post('/as',async(req, res) =>{ //{"name":"samanta","position":{"x":12,"y":51}}
			try{
				const info = req.body;
				console.log(info);
				const c_user = await Usuario.create(info).then(()=>{console.log("se creo Usuario");});
				res.json({
					succes:true,
					data:{
						user:info
					}
				});
			}catch (error){
				res.status(500);
				res.json({
					success:false,
					error:error.message
				});
			}

		});
		app.delete('/as/:id',async(req,res) =>{
			const id = req.params.id;
			const delette = await Usuario.findByIdAndDelete(id);
			res.json({
					success:true,
					data:{
						user:delette
					}
				});
		});
	});
}
	

//	console.log("req.body");//res.writeHead(200);
//	socket.on('send',function(data){
//	   io.on('connection', socket =>{	
//	   console.log("fasfasf");
	//io.emit("");
//	   });
//	});
	
	//io.emit(req.body);
	// curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'
	//console.log("Se accedio a la pagina 2)");
	