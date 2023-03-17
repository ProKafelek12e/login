const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mysql = require('mysql')
const port = 3000

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"logowanie"
})

con.connect(function(err){
    if(err) console.log("error: "+err)
    else console.log("connected to database")
})

const users= [{user:"admin",pass:"admin",upr:"admin"},{user:"user",pass:"user",upr:"user"},{user:"Franek",pass:"Zgnilak",upr:"user"}]

app.get("/login/:login/:password",(req,res)=>{
    const login = req.params.login
    const password = req.params.password
    const sql = `SELECT * FROM users WHERE login = '${login}' && pass = '${password}'`
    con.query(sql,(err,result,fields)=>{
        if(err) console.log(err)

        res.json({user:result.login,upr:result.upr})
    })
    res.json({status:"niezalogowano"})
})

app.listen(port,()=>{
    console.log("Aplikacja działa na procie: "+port)
})