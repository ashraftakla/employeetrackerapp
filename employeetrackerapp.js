const mysql = require("mysql");
const inquirer = require("inquirer");
const util = require("util");
const consoleTable = require("console.table");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Buzu&Sugar4$Ever",
    database: "employee_db"
});

const query = util.promisify(connection.query).bind(connection);

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log(`connected as ${connection.threadId} id`);
    init();
});

const options = [
    "Add employee",
    "Add role",
    "Add department",
    "View employees",
    "View departments",
    "View roles",
    "Update role",
    "Quit"
];

const init = () => {
    inquirer.prompt({
        name: "option",
        type: "list",
        message: "what would you like to do? ",
        choices: options
    }).then(answer => {
        let userOption = answer.option;
        switch (userOption) {
            case "Add employee":

                break;
            case "Add role":

                break;
            case "Add department":

                break;
            case "View employees":

                break;
            case "View departments":

                break;
            case "View roles":

                break;
            case "Update role":
                break;
            case "Quit":
                break;
        }
    });
};
