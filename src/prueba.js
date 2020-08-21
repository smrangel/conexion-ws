const http = require('http');
const path = require('path');
const url = require('url');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const os=require('os');

//const server = http.createServer(app);
app.use(bodyparser.json());
//SE ABRE PUERTO Y SE ESCUCHA
app.set('port', process.env.PORT||3000);
app.use(express.static(path.join(__dirname,'public')));    // curl http://localhost:3000/viral -d '{"a":12,"b":{"c":12,"d":15},"k":176}' -H 'Content-Type:application/json'//console.log("Se accedio a la pagina 2)");
const server = app.listen(app.get('port'),() => {
});

//WEBSOCKETS
const websockets=require('./socket.js')(server);

//MODELO DE GRAPH QL
var {graphqlHTTP} = require('express-graphql');
var {buildSchema} = require('graphql');
//const schema = require('./Schema.js').default;

import schema from './Schema.js';
console.log(schema);
require('./graphql.js')(app,graphqlHTTP,schema);

//MODELO DE mongodb
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mrangel:marc1928MA@integracion-nodejs.hqcyo.mongodb.net/dynamicinfo?retryWrites=true&w=majority",
		{useNewUrlParser: true, useUnifiedTopology: true},()=>{
		console.log("se conecto a mongodb");});
mongoose.set('useFindAndModify', false);

//SISTEMA OPERATIVO
const totalmem=	os.totalmem();
const freemem=os.freemem();
console.log('Memoria total:'+totalmem/1073741824 +' bytes');
console.log('Memoria libre:'+freemem/1073741824+' bytes');
console.log('Señal limite de CPU: '+os.constants.signals.SIGXCPU);
//console.log(os.totalmem());
//console.log(os.freemem())