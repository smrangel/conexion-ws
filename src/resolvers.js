const {usuarios} = require("./data.json");
import user from "./mongodb.js";


//const mongo=require('./mongodb.js')(mongoose);


let elem=(args)=>{
	return user.find();
	 }
let obtuser = (args) => {
	console.log(args);
	let titulo = args.titulo;
	console.log(args.titulo);
	return usuarios.filter(us => {
		console.log(us.tema);//devuelve todos los temas de DB
		return us.titulo == titulo; 
	})[0];
}
let create = (args) => {
	console.log(usuarios);
	usuarios.push(args);
	console.log(args);
	return usuarios;
}


export const resolvers ={
	Query:{
		hello(on,tor,context,pon){ console.log(context);return 'Hello worasdasd!'},
		tasks:elem,
		us:obtuser,
		
	},
	Mutation:{
		async creart(_,{input}){
			console.log(input);
			const use = new user(input);
			await use.save(); 
			console.log("mongo new");
			//usuarios.push(input);
			return use;
		
		},
		async delete(_,{_id}){
			return await user.findByIdAndDelete(_id);
		},
		async update(_,{_id,input}){
			return await user.findByIdAndUpdate(_id,input,{new:true});
		}
	}
};