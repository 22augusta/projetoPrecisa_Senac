const mongoose = require('mongoose')

const instituicaoSchema = new mongoose.Schema({
        Id: {type: Number},
        Nome: {type: String},
        CpfCnpj: {type: Number},
        Telefone: {type: Number}
},
{
    versionKey:false
});

const instituicao = mongoose.model('instituicao', instituicaoSchema);

module.exports = instituicao;
    

    
