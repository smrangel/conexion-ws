const {usuarios} = require("./data.json");

module.exports =function(app,graphqlHTTP,buildSchema){
//console.log(usuarios);
const schema = buildSchema(`
	type Query {
		us(titulo:Int!):usuarios
		temas(tema:String!):[usuarios]
		hello:String
	}
	type usuarios{
		titulo:Int
		tema:String
		cargo:String
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

const root = {
	us: obtuser,
	temas: titulos, 
	hello :'Hello worasdasd!',
  	bye:'adios!'
}

app.use('/graphql',graphqlHTTP({
	graphiql:true,
	schema:schema,
	rootValue:root
}));
}