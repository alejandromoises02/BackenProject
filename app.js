const express = require("express");
const app = express();
app.use(express.json());
const puerto = 8080;
const routes = require('./controllers/index.js')

//app.use("/productos", router);
app.use('/', routes)

app.listen(puerto, () => {
  console.log(`Servidor esuchando puerto ${puerto}`);
});

