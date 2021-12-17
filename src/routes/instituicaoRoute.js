const { Router } = require('express');
const express = require("express")
const router = express.Router()
const controller = require("../controller/instituicaoController")

router.get("/", controller.getAllInstituicao)
router.get("/:id", controller.getInstituicaoId)
router.get("/:Bairro", controller.getInstituicaoBairro)
router.post("/", controller.postInstituicao)
router.delete("/:id", controller.deleteInstituicao)
router.put("/:id", controller.updateInstituicao)

module.exports = router;
