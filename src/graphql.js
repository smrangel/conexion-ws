const {usuarios} = require("./data.json");
const time=require('./time.js');


module.exports =function(app,graphqlHTTP,schema){
var a=12;
var b=162;
var x= a+b;
time.time.x("hola");
 /*
   datos que se guardan en mongoDB.js
   parametros que se le pasan a resolvers.js a traves de context
   enlaze con socket.js
 X datos de time.js
 */

//console.log(usuarios);
/*const typedef=``;
const resolvers ={};
const schema = buildSchema(`
	type Query {
		us(titulo:Int!):usuarios
		temas(tema:String!):[usuarios]
		hello:String
		tasks:[usuarios]
	}
	type usuarios{
		titulo:Int
		tema:String
		cargo:String
	}
	input newusuarios{
		titulo:Int
		tema:String
		cargo:String
	}
	type Mutation{
		creart(input: newusuarios):usuarios 
	}
	`);
let obtuser = (args) => {
	console.log(args);
	let titulo = args.titulo;
	console.log(args.titulo);
	return usuarios.filter(us => {
		console.log(us.tema);//devuelve todos los temas de DB
		return us.titulo == titulo; 
	})[0];
}
let titulos = (args)=>{
	if(args.tema){
		let tema = args.tema;
		console.log(tema);
		return usuarios.filter(temas => {
			console.log(temas.tema);
			return temas.tema == tema;
		});
	}
}
let elemt = (args) =>{
	return usuarios;
}
let create = (args) =>{
	console.log(usuarios);
	console.log("/////////////");
	console. log ( JSON.parse ( JSON.stringify ( args ) ) );
	usuarios.push(args);
	console.log(usuarios);
	return args;
}*/
const root = {
/*
		tasks: elemt,
		us: obtuser,
		temas: titulos, 
		hello :'Hello worasdasd!',
	  	bye:'adios!',
 		creart:create
 	*/

}

	app.use('/graphql',graphqlHTTP({
		graphiql:true,
		schema:schema,
		context:{
			messajeId:x,
			Id:"23"
		//rootValue:root
		}
	}));
}