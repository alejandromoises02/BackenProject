const express = require("express");
const app = express();
app.use(express.json());
const puerto = 8080;
const productos = [];
const carrito = []

//app.use("/productos", router);
app.use('/productos', require('controllers/productos'))
app.use('/carrito', require('controllers/carrito'))

app.listen(puerto, () => {
  console.log(`Servidor esuchando puerto ${puerto}`);
});

