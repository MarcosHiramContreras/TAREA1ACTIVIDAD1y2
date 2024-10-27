class ModelDepartamentos {
    constructor(controller) {
        this.dbController = controller; // Controlador de base de datos recibido en variable local.
    }

    /**
     * Devuelve un departamento según su ID
     * @param {number} id - ID del departamento
     * @returns {Object} - Datos del departamento
     */
    get(id) {
        const sql = `SELECT * FROM departamentos WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.get(sql, [id]);
        this.dbController.close();
        return data;
    }

    /**
     * Devuelve todos los departamentos
     * @returns {Array} - Lista de departamentos
     */
    getAll() {
        const sql = `SELECT * FROM departamentos;`;
        this.dbController.open();
        const data = this.dbController.all(sql, []);
        this.dbController.close();
        return data;
    }

    /**
     * Inserta un nuevo departamento
     * @param {Array} datos - Datos del departamento [nombre]
     * @returns {Object} - Resultado de la inserción
     */
    insert(datos) {
        const sql = `INSERT INTO departamentos (nombre) VALUES (?);`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Actualiza todos los campos de un departamento
     * @param {Array} datos - Datos [nombre, id]
     * @returns {Object} - Resultado de la actualización
     */
    put(datos) {
        const sql = `UPDATE departamentos SET nombre = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Actualiza un campo específico de un departamento
     * @param {Array} datos - Datos [nombre, id]
     * @returns {Object} - Resultado de la actualización
     */
    patch(datos) {
        const sql = `UPDATE departamentos SET nombre = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Elimina un departamento
     * @param {number} id - ID del departamento a eliminar
     * @returns {Object} - Resultado de la eliminación
     */
    delete(id) {
        const sql = `DELETE FROM departamentos WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, [id]);
        this.dbController.close();
        return data;
    }
}

class ModelEmpleados {
    constructor(controller) {
        this.dbController = controller;
    }

    /**
     * Devuelve un empleado según su ID
     * @param {number} id - ID del empleado
     * @returns {Object} - Datos del empleado
     */
    get(id) {
        const sql = `SELECT * FROM empleados WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.get(sql, [id]);
        this.dbController.close();
        return data;
    }

    /**
     * Devuelve todos los empleados
     * @returns {Array} - Lista de empleados
     */
    getAll() {
        const sql = `SELECT * FROM empleados;`;
        this.dbController.open();
        const data = this.dbController.all(sql, []);
        this.dbController.close();
        return data;
    }

    /**
     * Inserta un nuevo empleado
     * @param {Array} datos - Datos del empleado [nombre, correo, departamento]
     * @returns {Object} - Resultado de la inserción
     */
    insert(datos) {
        const sql = `INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?);`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Actualiza todos los campos de un empleado
     * @param {Array} datos - Datos [nombre, correo, departamento, id]
     * @returns {Object} - Resultado de la actualización
     */
    put(datos) {
        const sql = `UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Actualiza un campo específico de un empleado
     * @param {Array} datos - Datos [valor, id]
     * @returns {Object} - Resultado de la actualización
     */
    patch(datos, campo) {
        const sql = `UPDATE empleados SET ${campo} = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Elimina un empleado
     * @param {number} id - ID del empleado a eliminar
     * @returns {Object} - Resultado de la eliminación
     */
    delete(id) {
        const sql = `DELETE FROM empleados WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, [id]);
        this.dbController.close();
        return data;
    }
}

export { ModelDepartamentos, ModelEmpleados };