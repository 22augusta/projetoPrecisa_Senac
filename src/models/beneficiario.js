const mongoose = require('mongoose')

const beneficiarioSchema = new mongoose.Schema({
    Id:{type: Number},
    Nome:{type: String},
    Comunidade:{type: String},
    LocoMoradia:{type: String},
},
    
{
    versionKey:false
});

const beneficiario  = mongoose.model('beneficiario', beneficiarioSchema);

module.exports = beneficiario;