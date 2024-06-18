const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const conn = require("./db/conn");
const Task = require('./models/Task')

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

conn.sync().then(()=> {
    app.listen(3000)
}).catch((err) => {console.log(err);})
