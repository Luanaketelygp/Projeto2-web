const mongoose = require('mongoose')

const EncomendaSchema = new mongoose.Schema({
    pratos:[{
        nome:{
            type: String,
            require: true,
        },

        categoria:{
            type: String,
            require: true,
        },

        ingredientes:{
            type: String,
            require: true,
        },

        valor:{
            type: Number,
            require: true,
        },

        ID:{
            type: String,
            require: true,
        }
    }]
})

module.exports = mongoose.model('Cadastro',EncomendaSchema)