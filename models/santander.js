var mongoose = require("mongoose");
//constructor para genererar los esquemas
var Schema = mongoose.Schema;

/*conexion mongoDB*/
mongoose.connect("mongodb://localhost/BANCA")
var SAN_schema = new Schema({
	fecha: String,
	abierto: Number,
	alto: Number,
	bajo: Number,
	cierre: Number,
});

var Database = mongoose.model("Database",SAN_schema);

module.exports.Database = Database;
