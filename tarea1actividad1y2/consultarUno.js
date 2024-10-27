import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from users where id=?;"
//ejecutamos sentencia con el parámetro 1 el parametro 1
const users = db.prepare(query).get([1])

db.close()

console.log(users)