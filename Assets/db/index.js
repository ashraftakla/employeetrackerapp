const connection = require("./connection")
class DB {
    constructor(connection) {
        this.connection = connection
    }
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee)
    }
    removeEmployee(employeeID) {
        return this.connection.query("DELETE FROM employee WHERE id=?", employeeID)
    }
    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role)
    }
    updateEmployeeRole(employee) {
        return this.connection.query("Update employee SET role_id=? where id=?", [employee.role_id, employee.id])
    }
    removeRole(roleID) {
        return this.connection.query("DELETE FROM role WHERE id=?", roleID)
    }
    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department)
    }
    removeDepartment(departmentID) {
        return this.connection.query("DELETE FROM department WHERE id=?", departmentID)
    }
    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    findAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }
    findAllDepartments() {
        return this.connection.query(
            "SELECT * FROM department"
        );
    }


}
module.exports = new DB(connection)