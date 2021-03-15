const express = require("express");
const router = express.Router()
let productos = [];


router.get("/", (req, res) => {
  let listados = productos.map((element) => 
  element.stock>0 ? (element):(null)
  );
  res.send(listados)
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  productos.map((element) =>
       element.id === id ? res.send(element) : null
      );
      res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
  productos.push({
    id : productos.length,
    timestamp : Date.now(),
    nombre,
    descripcion,
    codigo,
    foto,
    precio,
    stock
  });
  res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }

});

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
  const producto = productos.find(producto => producto.id === id)
      if(!producto){
        res.sendStatus(404)
      }
      producto.nombre = nombre
      producto.descripcion = descripcion
      producto.codigo = codigo
      producto.foto = foto
      producto.precio = precio
      producto.stock = stock
      res.sendStatus(201);
});

router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let producto = productos.find(producto => producto.id === id)
  console.log(producto);
      if(!producto){
        res.sendStatus(404)
      }
      productos = productos.filter(element => element.id !== id)
      console.log(productos);
      res.sendStatus(200)
});

module.exports = router