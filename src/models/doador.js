const mongoose = require('mongoose')

const doadorSchema = new mongoose.Schema({
        Id: {type: Number},
        Nome: {type: String},
        CpfCnpj: {type: Number},
        Telefone: {type: Number}
},
{
    versionKey:false
});

const doador = mongoose.model('doador', doadorSchema);

module.exports = doador;
    

    
