
var tim = Date.now();
var date_time = new Date();
var hora = date_time.getHours();
var min= date_time.getMinutes();
var sec=date_time.getSeconds();
var time = {
	x:function time(args){
	
	console.log("hey Soy time: "+args);
	}
}
export{tim,time};
//console.log(hora+" "+min+" "+sec);
