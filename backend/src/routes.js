const { response } = require('express')
const express = require('express')
const { request } = require('http')
const Cadastropratos = require('./Cadastropratos')
const routes = express.Router()
const

routes.get("/pratos",Cadastropratos.listar)
routes.get("/pratos/recuperar/:id",Cadastropratos.recuperar)
routes.post("/pratos/criar",Cadastropratos.criar)
routes.patch('/pratos/atualizar/:id',Cadastropratos.atualizar)
routes.delete('/pratos/apagar/:id',Cadastropratos.apagar)
routes.get('/',(request,response) => 
    response.send("Bem vindo ao Restaurante X")
)
module.exports = routes