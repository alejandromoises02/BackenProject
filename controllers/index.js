const express = require('express');
const router = express.Router();

const productoRouter = require('./productos');
const carritoRouter = require('./carrito');


router.use('/productos', productoRouter);
router.use('/carrito', carritoRouter);

module.exports = router;