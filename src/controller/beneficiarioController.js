const beneficiario = require("../models/beneficiario.js")


const postBeneficiario = (req, res) => {
    console.log(req.body);

    let beneficiario = new beneficiario(req.body)

    beneficiario.save(function(err){
        if(err) {
          res.status(500).send({ message: err.message })
        }
        res.status(201).send(beneficiario.toJSON())
    })
};



const updateBeneficiario = (req, res) => {
    const id = req.params.id
    beneficiario.updateMany({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Beneficiario atualizado com sucesso"})
        }
    })
}

const deleteBeneficiario= (req, res) => {
    const id = req.params.id
    beneficiario.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Beneficiario removido com sucesso"})
        }
    })
}
          

module.exports = {
    postBeneficiario,
    deleteBeneficiario, 
    updateBeneficiario
} 