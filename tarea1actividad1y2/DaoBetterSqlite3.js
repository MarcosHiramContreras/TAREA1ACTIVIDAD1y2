import Database from "better-sqlite3";

class AppDaoBetterSQLite {
    constructor(dbFilePath) {
        this.dbName = dbFilePath;
        this.db = null;
        this.dbOpen = false;
    }

    open() {        
        this.db = new Database(this.dbName); // Crea la conexión a la base de datos.
        this.dbOpen = true;
    }

    run(sql, params = []) { // Ejecuta un comando SQL
        const insertData = this.db.prepare(sql);
        const result = insertData.run(params);
        return result;
    }

    get(sql, params = []) { // Obtiene un único registro
        const result = this.db.prepare(sql).get(params);
        return result;
    }

    all(sql, params = []) { // Obtiene todos los registros
        const result = this.db.prepare(sql).all(params);
        return result;
    }

    close() {
        if (this.dbOpen) {
            this.db.close();
            console.log("Base de datos cerrada.");
        }
    }
}

// Funciones CRUD para departamentos y empleados
class DepartamentoEmpleadoDAO extends AppDaoBetterSQLite {
    // CRUD para departamentos
    insertarDepartamento(nombre) {
        const sql = `INSERT INTO departamentos (nombre) VALUES (?)`;
        return this.run(sql, [nombre]);
    }

    obtenerDepartamento(id) {
        const sql = `SELECT * FROM departamentos WHERE id = ?`;
        return this.get(sql, [id]);
    }

    actualizarDepartamento(id, nombre) {
        const sql = `UPDATE departamentos SET nombre = ? WHERE id = ?`;
        return this.run(sql, [nombre, id]);
    }

    eliminarDepartamento(id) {
        const sql = `DELETE FROM departamentos WHERE id = ?`;
        return this.run(sql, [id]);
    }

    // CRUD para empleados
    insertarEmpleado(nombre, correo, departamento) {
        const sql = `INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)`;
        return this.run(sql, [nombre, correo, departamento]);
    }

    obtenerEmpleado(id) {
        const sql = `SELECT * FROM empleados WHERE id = ?`;
        return this.get(sql, [id]);
    }

    actualizarEmpleado(id, nombre, correo, departamento) {
        const sql = `UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?`;
        return this.run(sql, [nombre, correo, departamento, id]);
    }

    eliminarEmpleado(id) {
        const sql = `DELETE FROM empleados WHERE id = ?`;
        return this.run(sql, [id]);
    }

    // CRUD PARA USUARIOS

    insertarUsuario(name , username) {
        const sql = `INSERT INTO users (name, username) VALUES (?, ?)`;
        return this.run(sql, [name, username]);
    }

    obtenerUsuario(id) {
        const sql = `SELECT * FROM users WHERE id = ?`;
        return this.get(sql, [id]);
    }

    actualizarUsuario(id, name) {
        const sql = `UPDATE users SET name = ? WHERE id = ?`;
        return this.run(sql, [name, id]);
    }

    eliminarUsuario(id) {
        const sql = `DELETE FROM users WHERE id = ?`;
        return this.run(sql, [id]);
    }

}

export default DepartamentoEmpleadoDAO; // Exporta la clase para manejo de departamentos y empleados