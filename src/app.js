const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/senac", {
                 useNewUrlParser: true,
                 useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})

const index = require("./routes/index")
const doador = require("./routes/doadorRoute.js")
const instituicao = require("./routes/instituicaoRoute.js")
const beneficiario = require("./routes/beneficiarioRoute.js")

app.use(express.json())

app.use(function ( req,res,next ){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    )
    next()
})

app.use("/",index)
app.use("/doador", doador)
app.use("/instituicao", instituicao)
app.use("/beneficiario", beneficiario)

module.exports = app;
