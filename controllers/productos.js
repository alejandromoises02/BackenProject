const express = require("express");
const router = express.Router();

const { mysql } = require("./DB/mysql.db");
const knex = require("knex")(mysql);

let productos = [];

/*knex.schema.createTable('productos', table =>{
  table.increments('id')
  table.string('timestamp', 50)
  table.string('nombre', 20)
  table.string('descripcion', 50)
  table.string('codigo', 20)
  table.string('foto', 20)
  table.integer('precio')
  table.integer('stock')
})
.then(()=>console.log('tabla productos creada'))
.catch((err)=> console.log(err))
.finally(()=>knex.destroy())*/

router.get("/", (req, res) => {
  let listados;
  knex
    .from("productos")
    .select("*")
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => console.log(err))
    //.finally(() => knex.destroy());
  
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  

  knex
    .from("productos")
    .select("*")
    .where("id", "=", id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err))
    //.finally(() => knex.destroy());


});

router.post("/", (req, res) => {
  try {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    console.log(nombre);
    let nuevoProducto = [
      {
        id: productos.length,
        timestamp: Date.now(),
        nombre : nombre,
        descripcion : descripcion,
        codigo : codigo,
        foto : foto,
        precio : precio,
        stock : stock,
      },
    ];
    knex("productos")
      .insert(nuevoProducto)
      .then(() => console.log("producto ingresado"))
      .catch((err) => console.log(err))
      //.finally(() => knex.destroy());

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
  const producto = productos.find((producto) => producto.id === id);
  if (!producto) {
    res.sendStatus(404);
  }
  producto.nombre = nombre;
  producto.descripcion = descripcion;
  producto.codigo = codigo;
  producto.foto = foto;
  producto.precio = precio;
  producto.stock = stock;
  res.sendStatus(201);
});

router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let producto = productos.find((producto) => producto.id === id);
  console.log(producto);
  if (!producto) {
    res.sendStatus(404);
  }
  productos = productos.filter((element) => element.id !== id);
  console.log(productos);
  res.sendStatus(200);
});

module.exports = router;
