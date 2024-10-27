import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from users;"
const users = db.prepare(query).all()

db.close()

console.log(users)