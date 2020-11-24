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
        return this.connection.query("INSERT INTO role SET?", role)
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
}