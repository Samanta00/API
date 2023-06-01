const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('data', dataSchema)
