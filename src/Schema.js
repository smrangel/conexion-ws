const {resolvers} = require("./resolvers.js");
const {makeExecutableSchema}= require('graphql-tools');
const typedef=`
type Query{
		us(titulo:Int!):usuarios
		temas(tema:String!):[usuarios]
		hello:String
		tasks:[user]
	}

	type user{
		id:Int!
		x:Int!
		y:Int!			
	}
	type usuarios{
		id:Int!
		x:Int!
		y:Int!			
	}
	input newusuarios{
		id:Int!
		x:Int!
		y:Int!	
	}
	type Mutation{
		creart(input: newusuarios):usuarios
		delete(_id:ID):usuarios
		update(_id:ID,input:newusuarios):usuarios
}`;

export default makeExecutableSchema({
typeDefs:typedef,
resolvers:resolvers
});