const instituicao = require("../models/instituicao")


const getAllInstituicao = (req, res) => {
    console.log(req.url);
    instituicao.find(function(err, instituicao){
      res.status(200).send(instituicao);
    })
  };

const createInstituicao = (req, res) => {
    console.log(req.body);

    let instituicao = new instituicao(req.body)

    instituicao.save(function(err){
        if(err) {
          res.status(500).send({ message: err.message })
        }
        res.status(201).send(instituicao.toJSON())
    })
};


const getInstituicaoId = (req, res) => {
    const id = req.params.id;

    instituicao.find({ id }, function(err, instituicao){
      if(err) { 
        res.status(500).send({ message: err.message })
      }
  
      res.status(200).send(instituicao);
    })
}

const getInstituicaoBairro = (req, res) => {
    const id = req.params.Bairro;

    instituicao.find({ Bairro }, function(err, instituicao){
      if(err) { 
        res.status(500).send({ message: err.message })
      }
  
      res.status(200).send(instituicao);
    })
}



const updateInstituicao = (req, res) => {
    const id = req.params.id
    instituicao.updateMany({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Instituicao atualizada com sucesso"})
        }
    })
}

const deleteInstituicao = (req, res) => {
    const id = req.params.id
    instituicao.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Instituicao removida com sucesso"})
        }
    })
}
          

module.exports = {
    getAllInstituicao,
    getInstituicaoId,
    getInstituicaoBairro,
    createInstituicao,
    deleteInstituicao, 
    updateInstituicao
} 

