const mongoose = require('mongoose')

const instituicaoSchema = new mongoose.Schema({
        id:{type: Number},
        Nome:{type: String},
        CpfCnpj:{type: Number},
        Estado: {type: String},
        Cidade:{type: String},
        Bairro:{type: String},
        Endereçodearrecadacao:{type: String}
    },
    
    {
        versionKey:false
    });

    const instituicao  = mongoose.model('instituicao', instituicaoSchema);

    module.exports = instituicao;
