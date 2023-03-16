const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const log = [{login:"admin",pass:"admin",key:"admin"},{login:"user",pass:"user",key:"user"}]
app.get("/login/:login/:password",(req,res)=>{
    const login = req.params.login
    const password = req.params.password
    for(var i =0;i<=log.length-1;i++){
        if( login == log[i].login && password == log[i].pass){
            res.send([log[i].key])
        }
        else res.send([{err:"error"}])
    }
})

app.listen(3000)