const { response } = require('express');
const mongoose = require('mongoose')
const Cadastro = mongoose.model('Cadastro')

module.exports = {
    async listar(request,response){
        const Cadastro = await Cadastro.find();

        return response.json(cadastro)
    },

    async recuperar(request,response){
        const Cadastro = await Cadastro.findById(request.params.id)

        return response.json(cadastro)
    },
    
    async criar(request,response){
        const Cadastro = await Cadastro.create(request.body);

        return response.json(cadastro)
    },

    async atualizar(request,response){
        const Cadastro = await Cadastro.findByIdAndUpdate(request.params.id,req.body,{
            new: true
        })

        return response.json(cadastro)
    },

    async apagar(request,response){
        const Cadastro = await Cadastro.findByIdAndDelete(request.params.id)

        return response.send(cadastro)
    }
}