var mongoose = require("mongoose");
//constructor para genererar los esquemas
var Schema = mongoose.Schema;

/*conexion mongoDB*/
mongoose.connect("mongodb://localhost/BANCA")
var SAN_schema = new Schema({
	open: Number,
	high: Number,
	low: Number,
	close: Number,
});

var Database = mongoose.model("Database",SAN_schema);

module.exports.Database = Database;
