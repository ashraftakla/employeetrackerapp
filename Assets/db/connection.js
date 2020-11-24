const { connect } = require("http2")
const mySQL = require("mysql")
const util = require("util")
const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Buzu&Sugar4$Ever",
    database: "employee_db"

})
connection.connect()
connection.query = util.promisify(connection.query)
module.exports = connection 