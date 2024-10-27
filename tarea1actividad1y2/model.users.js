class ModelUsers {
    constructor(controller) {
        this.dbController = controller;
    }

    /**
     * Devuelve un usuario según su ID
     * @param {number} id - ID del usuario
     * @returns {Object} - Datos del usuario
     */
    get(id) {
        const sql = `SELECT * FROM users WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.get(sql, [id]);
        this.dbController.close();
        return data;
    }

    /**
     * Devuelve la lista de todos los usuarios
     * @returns {Array} - Lista de usuarios
     */
    getAll() {
        const sql = `SELECT * FROM users;`;
        this.dbController.open();
        const data = this.dbController.all(sql, []);
        this.dbController.close();
        return data;
    }

    /**
     * Inserta un registro en users
     * @param {Array} datos - Arreglo de parámetros [name, username]
     * @returns {Object} - Resultado de la inserción
     */
    insert(datos) {
        const sql = 'INSERT INTO users(name, username) VALUES(?, ?)';
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Actualiza todos los campos de un usuario
     * @param {Array} datos - Arreglo de parámetros [name, username, id]
     * @returns {Object} - Resultado de la actualización
     */
    put(datos) {
        const sql = 'UPDATE users SET name = ?, username = ? WHERE id = ?';
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Actualiza un campo específico de un usuario
     * @param {Array} datos - Arreglo de parámetros [valor, id]
     * @param {string} campo - Nombre del campo a actualizar
     * @returns {Object} - Resultado de la actualización
     */
    patch(datos, campo) {
        const sql = `UPDATE users SET ${campo} = ? WHERE id = ?`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    /**
     * Elimina un registro de usuarios
     * @param {number} id - ID del usuario a eliminar
     * @returns {Object} - Resultado de la eliminación
     */
    delete(id) {
        const sql = 'DELETE FROM users WHERE id = ?';
        this.dbController.open();
        const data = this.dbController.run(sql, [id]);
        this.dbController.close();
        return data;
    }
}

export {ModelUsers};