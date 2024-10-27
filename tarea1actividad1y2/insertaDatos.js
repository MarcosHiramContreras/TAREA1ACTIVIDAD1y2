import Database from "better-sqlite3";
const db = new Database('app.db')

const data=[
    {name:"ana",username:"an1"},
    {name:"juan",username:"ju2"},
    {name:"bety",username:"be3"},
    {name:"paco",username:"pa0"},
    {name:"luis",username:"lu5"}
]
const insertData=db.prepare(`insert into users(name,username) values(?,?)`)

data.forEach(user=>{
    const r=insertData.run(user.name, user.username)
    console.log(r)
})
db.close()