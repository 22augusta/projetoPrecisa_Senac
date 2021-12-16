const express = require("express")
const router = express.Router()
const controller = require("../controller/beneficiarioController")

router.post("/", controller.createBeneficiario)
router.delete("/:id", controller.deleteBeneficiario)
router.put("/:id", controller.updateBeneficiario)

module.exports = router;
