const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const conn = require("./db/conn");

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello world.')
})

app.listen(3000, function(error){
    if(error){
        console.log(`Erro ao subir servidor: ${erro}`);
    }
    console.log(`Servidor rodando na porta 3000`);
})
