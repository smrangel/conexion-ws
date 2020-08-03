const http = require('http');
const path = require('path');
const url = require('url');
const express = require('express');
const mongoose = require('mongoose');
var { graphqlHTTP} = require('express-graphql');
var { buildSchema } = require('graphql');
const bodyparser = require('body-parser');
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');//(server, {'transports': ['websocket', 'polling']});
const io = socketio.listen(server);
app.use(bodyparser.json());

require('./socket.js')(io,app);
require('./mongodb.js')(app,mongoose,express);
require('./graphql.js')(app,graphqlHTTP,buildSchema);
//MODELO DE mongodb


//MODELO DE GRAPH QL
app.use(express.static(path.join(__dirname,'public')));
 	// curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'//console.log("Se accedio a la pagina 2)");
app.set('port', process.env.PORT||2000);
server.listen(app.get('port'),() => {
var a = 14;
var b = 16;
console.log(a+b);
});