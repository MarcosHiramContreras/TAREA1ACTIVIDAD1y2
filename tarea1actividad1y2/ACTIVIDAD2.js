// TAREA 1 MARCOS HIRAM CONTRERAS MENDOZA
// ACTIVIDAD 2
// 174155
// 25/10/2024

// Importar el DAO y los modelos
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import { ModelDepartamentos, ModelEmpleados } from './model.departamentoEmpleado.js'; // Modelos específicos para departamentos y empleados
import { ModelUsers } from './model.users.js';

// Configuración del controlador de la base de datos
const controllerDB = new AppDaoBetterSQLite('app.db');

// Crear instancias de los modelos de departamentos y empleados
const departamentoModel = new ModelDepartamentos(controllerDB);
const empleadoModel = new ModelEmpleados(controllerDB);
const usuarioModel = new ModelUsers(controllerDB);

// Declarar una vez la variable resp
controllerDB.open();
let resp;

// OPERACIONES --------------------------------------------------------------------------------------

 // PARA EMPLEADOS

// Insertar un nuevo empleado (INSERTAR UN EMPLEADO)
resp = empleadoModel.insert(['Carlos Perez', 'carlos@example.com', 1]);

// Actualizar un empleado por ID (MODIFICAR EMPLEADO POR ID)
resp = empleadoModel.put(['MODIFICADO', 'MODIFICADO@example.com', 1, 5]);

// Eliminar un empleado por ID (ELIMINAR UN EMPLEADO POR ID)
resp = empleadoModel.delete(2);

// Obtener todos los empleados (CONSULTAR EMPLEADOS)
resp = empleadoModel.getAll();
console.log("Empleados:", resp);

// Obtener un empleado por ID
// resp = empleadoModel.get(3);

// PARA DEPARTAMENTOS

// Insertar un nuevo departamento (INSERTAR UN DEPARTAMENTO)
 resp = departamentoModel.insert(['TI']);
 console.log("Departamento insertado:", resp);

// Obtener un departamento por ID
// resp = departamentoModel.get(1);

// Actualizar un departamento por ID (MODIFICAR DEPARTAMENTO POR ID)
 resp = departamentoModel.put(['Nuevo Nombre de Departamento', 1]);

// Eliminar un departamento por ID (ELIMINAR UN DEPARTAMENTO POR ID)
 resp = departamentoModel.delete(2);

 // Obtener todos los departamentos (CONSULTAR DEPARTAMENTOS)
console.log("Intentando obtener todos los departamentos...");
resp = departamentoModel.getAll();
console.log("Departamentos:", resp);

// PARA USUARIOS

// Insertar un nuevo usuario (INSERTAR UN USUARIO)
resp = usuarioModel.insert(['Mario', 'Usuario' ]);
console.log("Usuario insertado:", resp);

// Actualizar un Usuario por ID (MODIFICAR USUARIO POR ID)
resp = usuarioModel.put(['Nuevo Nombre', 'Usuario', 1]);

// Eliminar un usuario por ID (ELIMINAR UN USUARIO POR ID)
//resp = usuarioModel.delete(1);

// Obtener todos los usuarios (CONSULTAR USUARIOS)
console.log("Intentando obtener todos los Usuarios...");
resp = usuarioModel.getAll();
console.log("Usuarios:", resp);

controllerDB.close();
// console.log(resp);
