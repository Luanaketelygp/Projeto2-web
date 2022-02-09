const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('requireDir')
const cors = require('cors')
const application = express()

mongoose.connect('mongodb://localhost:3306/cadastro', {userNewUrlParser :true, useUnifiedTopology: true}).then(() => {
    console.log("Conexão realizada!")
}).catch((erro) => {
    console.log("Erro na conexão!")
})

application.use(express.json())

requireDir('./src/models/')
const Usuario = mongoose.model('Usuario')

application.use(cors())

application.use('/api', require("./src/routes"))

application.listen(3001)