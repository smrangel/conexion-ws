const http = require('http');
const path = require('path');
const url = require('url');
const express = require('express');
var { graphqlHTTP} = require('express-graphql');
var { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const app = express();
const iport = express();

const bodyparser = require('body-parser');
const server = http.createServer(app);
const socketio = require('socket.io')(server, {'transports': ['websocket', 'polling']});
const io = socketio.listen(server);
require('./socket.js')(io,app);

//MODELO DE mongodb
const Usuario = mongoose.model('users', { 
	name: String,position:{ x:Number,y:Number}});

//MODELO DE GRAPH QL
const schema = buildSchema(`type Query {hello: String,bye:String}`);
var root = {
  hello :'Hello worasdasd!',
  bye:'adios!'
};
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

app.set('port', process.env.PORT||3000);

	//console.log('///////////////////////////////////////////////////////////////////////');
	//console.log(io.Server);
server.listen(app.get('port'),() => {
//	console.log('hola mundo');
//});
var a = 14;
var b = 16;
console.log(a+b);
});