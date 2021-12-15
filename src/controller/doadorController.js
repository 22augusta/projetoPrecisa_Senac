const instituicao = require("../models/doador")


const getAllDoador = (req, res) => {
    console.log(req.url);
    doador.find(function(err, doador){
      res.status(200).send(doador);
    })
  };

const createDoador = (req, res) => {
    console.log(req.body);

    let doador = new doador(req.body)

    doador.save(function(err){
        if(err) {
          res.status(500).send({ message: err.message })
        }
        res.status(201).send(doador.toJSON())
    })
};


const getDoadorId = (req, res) => {
    const id = req.params.id;

    doador.find({ id }, function(err, doador){
      if(err) { 
        res.status(500).send({ message: err.message })
      }
  
      res.status(200).send(doador);
    })
}


const updateDoador = (req, res) => {
    const id = req.params.id
    doador.updateMany({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Doador atualizado com sucesso"})
        }
    })
}

const deleteDoador = (req, res) => {
    const id = req.params.id
    doador.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Doador removido com sucesso"})
        }
    })
}
          

module.exports = {
    getAllDoador,
    getDoadorId,
    createDoador,
    deleteDoador, 
    updateDoador
} 