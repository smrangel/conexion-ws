const {usuarios} = require("./data.json");

module.exports =function(app,graphqlHTTP,schema){
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
	//rootValue:root
}));
}