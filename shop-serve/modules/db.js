var mysql = require("mysql")

var pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "0712",
	database: "shopprogram",
	port: "3306"
})

module.exports = pool;