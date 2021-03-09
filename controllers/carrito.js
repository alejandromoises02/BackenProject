const express = require("express");
const router = express.Router()

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  carrito.map((element) =>
        element.id === id ? res.send(element) : null
      );
      res.sendStatus(404);
});

router.post("/", (req, res) => {
console.log(req.body);
  try {
    const { productos } = req.body;
  productos.push({
    id : carrito.length,
    timestamp : Date.now(),
    productos : productos
  });
  res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }

});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const carritoF = carrito.find(carrito => carrito.id === id)
      if(!carritoF){
        res.sendStatus(404)
      }
      carrito = carrito.filter(element => element.id ==! id)
      
      res.sendStatus(200)
});

module.exports = router