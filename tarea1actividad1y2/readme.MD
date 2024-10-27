# Actividad

## Introducción

better-sqlite3 es una excelente biblioteca para manejar bases de datos SQLite en Node.js, conocida por su simplicidad ademas es sincrona y tiene un alto rendimiento.
 ejemplo de uso:

 ```js
 //conectar
const Database = require('better-sqlite3'); //domo commonjs
import Database from "better-sqlite3";  //es6
const db = new Database('mydb.db');
//crear tabla
db.exec('CREATE TABLE IF NOT EXISTS my_table (id INTEGER PRIMARY KEY, name TEXT, email TEXT, address TEXT)');
//inserta datos
const insert = db.prepare('INSERT INTO my_table (name, email, address) VALUES (?, ?, ?)');
insert.run(['John Doe', 'john@example.com', '123 Main St'])
//insertar datos
const insert = db.prepare('INSERT INTO my_table (name, email, address) VALUES (?, ?, ?)');
insert.run('John Doe', 'john@example.com', '123 Main St');
//insertar datos
constdatos={first_name:'beatriz',last_name:'rojas lopez',sexo:'f',edad:25}
const sql=`
    insert into personas(first_name,last_name,sexo,edad) 
    values(@first_name,@last_name,@sexo,@edad)
    `
const insertData=db.prepare(sql)
const resp=insertData.run(datos)
console.log(resp);
//consultar datos
const stmt = db.prepare('SELECT * FROM my_table WHERE name = ?');
const row = stmt.get('John Doe');
console.log(row);
//actualizar
const update = db.prepare('UPDATE my_table SET email = ? WHERE name = ?');
update.run('john.doe@example.com', 'John Doe');
//borrar
const remove = db.prepare('DELETE FROM my_table WHERE name = ?');
remove.run('John Doe');
// cerrar
db.close();

 ```

Enseguida vea algunos ejemplos del uso de btter sqlite3:

## Ejemplos

los archivos:
creaTabla.js tiene un ejemplo de creación de tabla
inertaDatos.js un ejemplo para poblar la tabla
consultaTodos.js un ejemplo de consultar todos los datos
consultaUno.js un ejemplo de consultar un solo dato

 ## DAO

Aplicando el patron DAO, tenemos en los archivos:
 DaoBettearSqlite3.js el controlador para sqlite3 en better sqlite3
 model.user.js el modelo para usuarios
 y ambos archivos se gestionan con index.js

 ## Actividad 1

 En la base de datos ap.db agregue dos tablas: departamentos y clientes 

 Departamento con campos:
 id: entero, llave primaria autoincrementable
 nombre: string

 Empleado con campos:
 id: entero, llave primaria, autoincremetable.
 nombre: string 
 correo: string
 departamento: entero (id del departamento)

 agregue código para mostrar/buscar/insertar/modificar y eliminar departamentos
 agregue código para mostrar/buscar/insertar/modificar y eliminar empleados

 Pruebe su código, asegurese que funciona.

## Actividad 2

Aunque el cpodigo anterio funciona es muy recomendable separar el código segun su uncionalidad, aqui se pone un ejemplo del patros DAO que separa el conttolador de la base de datos del moselo de la base de datos, el controlador, tiene el código de manejo  de betters sqlite, y el modelo las reglas de conexion a la tabla useres en este caso.

el controlador esta en el archivo: DaoBetterSqlite3.js
y el modelo en el archivo model.users.js

un ejemplo de como se usan mabos esta en el archivo: index.js

Actividad: tomando en cuenta las 3 tablas de users, empleados y departamentos, cree una el código necesario para realizar:
altas/bajas/cambios/listar/actualizar datos en cada una de las 3 tablas.

Entregue ambos ejercicios al profesor para su evaluación.



 