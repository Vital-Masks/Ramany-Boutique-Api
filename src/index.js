const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/ramany-boutique'
const commonrouter = require('./router')


const app = express();

databaseConnection()
serve()

function databaseConnection() {
    mongoose.connect(url, { useNewUrlParser: true })
    const con = mongoose.connection

    con.on('open', function () {
       console.log('Database Connected>>>>>>>>>>>>')
    })
}

app.use(bodyParser.json())    
app.use('/', commonrouter)



function serve(){
app.listen(3000,()=>{
    console.log("Server started")
})
}