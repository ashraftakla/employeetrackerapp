const mysql = require("mysql");
const inquirer = require("inquirer");
const util = require("util");
const db = require("./Assets/db");
const consoleTable = require("console.table");
const { allowedNodeEnvironmentFlags } = require("process");

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
                addEmployee();
                break;
            case "Add role":
                addRole();
                break;
            case "Add department":
                addDepartment();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "View departments":
                viewDepartments();
                break;
            case "View roles":
                viewRoles();
                break;
            case "Update role":
                updateRole();
                break;
            case "Quit":
                break;
        }
    });
};

async function addEmployee() {
    const roles = await db.findAllRoles();

    const employee = await inquirer.prompt([
        {
            name: "first_name",
            message: "what is the employee first name?"
        },
        {
            name: "last_name",
            message: "what is the employee last name?"
        }
    ]);
    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await inquirer.prompt({
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
    });

    employee.role_id = roleId
    await db.createEmployee(employee);
    init();

}


async function addRole() {
    const departments = await db.findAllDepartments();

    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }))

    const role = await inquirer.prompt([
        {
            name: "title",
            message: "what is your role to add?"
        },
        {
            name: "salary",
            message: "what is the salary for this role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "which department this job is located?",
            choices: departmentChoices
        }
    ])
    await db.createRole(role);
    init()
}
async function addDepartment() {
    const department = await inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
    await db.createDepartment(department);
    init();
}
async function viewEmployees() {
    const employees = await db.findAllEmployees()
    console.table(employees)
    init()
}
async function viewDepartments() {
    const departments = await db.findAllDepartments()
    console.table(departments)
    init()
}
async function viewRoles() {
    const roles = await db.findAllRoles()
    console.table(roles)
    init()
}

async function updateRole() {
    const employee = await db.findAllEmployees()
    const employeeChoices = employee.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id

    }))

    const roles = await db.findAllRoles();

    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const selectedEmployee = await inquirer.prompt([
        {
            type: "list",
            name: "id",
            message: "which employees role do you wish to update?",
            choices: employeeChoices
        },
        {
            type: "list",
            name: "role_id",
            message: "What is the employee's role?",
            choices: roleChoices
        }
    ])

    await db.updateEmployeeRole(selectedEmployee);
    init();
}