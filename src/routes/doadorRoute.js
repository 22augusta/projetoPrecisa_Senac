const express = require("express")
const router = express.Router()
const controller = require("../controller/doadorController")

router.get("/", controller.getAllDoador)
router.get("/:id", controller.getDoador)
router.post("/", controller.createDoador)
router.delete("/:id", controller.deleteDoador)
router.put("/:id", controller.updateDoador)

module.exports = router;

