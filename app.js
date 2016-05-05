var express = require ("express");
var app = express();
var request = require("request");

var url ="https://www.quandl.com/api/v3/datasets/YAHOO/MC_SAN.json?api_key=HGoTu3E3A_Lsv6biw1kc";

request({
	url: url, 
	json: true
}, function (error, response, body){

	if (!error && response.statusCode == 200){
		var parseo = body.dataset.data;
		//console.log(parseo)
		var jsonString=[];
			var jsonDato00=[];
			jsonDato00.open = parseFloat(parseo[0][1]);
			jsonDato00.high = parseFloat(parseo[0][2]);
			jsonDato00.low = parseFloat(parseo[0][3]);
			jsonDato00.close = parseFloat(parseo[0][4]);
			jsonString.push(jsonDato00);
			var jsonDato01=[];
			jsonDato01.open = parseFloat(parseo[1][1]);
			jsonDato01.high = parseFloat(parseo[1][2]);
			jsonDato01.low = parseFloat(parseo[1][3]);
			jsonDato01.close = parseFloat(parseo[1][4]);
			jsonString.push(jsonDato01);
			var jsonDato02=[];
			jsonDato02.open = parseFloat(parseo[2][1]);
			jsonDato02.high = parseFloat(parseo[2][2]);
			jsonDato02.low = parseFloat(parseo[2][3]);
			jsonDato02.close = parseFloat(parseo[2][4]);
			jsonString.push(jsonDato02);
			var jsonDato03=[];
			jsonDato03.open = parseFloat(parseo[3][1]);
			jsonDato03.high = parseFloat(parseo[3][2]);
			jsonDato03.low = parseFloat(parseo[3][3]);
			jsonDato03.close = parseFloat(parseo[3][4]);
			jsonString.push(jsonDato03);
			var jsonDato04=[];
			jsonDato04.open = parseFloat(parseo[4][1]);
			jsonDato04.high = parseFloat(parseo[4][2]);
			jsonDato04.low = parseFloat(parseo[4][3]);
			jsonDato04.close = parseFloat(parseo[4][4]);
			jsonString.push(jsonDato04);
			var jsonDato05=[];
			jsonDato05.open = parseFloat(parseo[5][1]);
			jsonDato05.high = parseFloat(parseo[5][2]);
			jsonDato05.low = parseFloat(parseo[5][3]);
			jsonDato05.close = parseFloat(parseo[5][4]);
			jsonString.push(jsonDato05);
			var jsonDato06=[];
			jsonDato06.open = parseFloat(parseo[6][1]);
			jsonDato06.high = parseFloat(parseo[6][2]);
			jsonDato06.low = parseFloat(parseo[6][3]);
			jsonDato06.close = parseFloat(parseo[6][4]);
			jsonString.push(jsonDato06);
			var jsonDato07=[];
			jsonDato07.open = parseFloat(parseo[7][1]);
			jsonDato07.high = parseFloat(parseo[7][2]);
			jsonDato07.low = parseFloat(parseo[7][3]);
			jsonDato07.close = parseFloat(parseo[7][4]);
			jsonString.push(jsonDato07);
			var jsonDato08=[];
			jsonDato08.open = parseFloat(parseo[8][1]);
			jsonDato08.high = parseFloat(parseo[8][2]);
			jsonDato08.low = parseFloat(parseo[8][3]);
			jsonDato08.close = parseFloat(parseo[8][4]);
			jsonString.push(jsonDato08);
			var jsonDato09=[];
			jsonDato09.open = parseFloat(parseo[9][1]);
			jsonDato09.high = parseFloat(parseo[9][2]);
			jsonDato09.low = parseFloat(parseo[9][3]);
			jsonDato09.close = parseFloat(parseo[9][4]);
			jsonString.push(jsonDato09);
			var jsonArrayValor = (jsonString);
			console.log(jsonArrayValor);
		
			
			

			
	}
});

app.listen(7070);
console.log("Servidor conectado puerto 7070");