const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
// const url = 'mongodb://localhost:27017/ramany-boutique'
const url = "mongodb+srv://yathushan:BQdEfkQANH6kT3Nu@cluster0.hodq8.mongodb.net/ramany-boutique?retryWrites=true&w=majority";
const commonrouter = require('./router')
var cors = require('cors')


const app = express();
app.use(cors())

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
app.listen(8080,()=>{
    console.log("Server started")
})
}