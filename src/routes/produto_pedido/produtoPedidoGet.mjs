import express from 'express';

const roteador = express.Router();

roteador.get('/produtosPedidos', (req, res) => {
    const produtosPedidos = req.body.produtoPedido;
    res.json(produtosPedidos);
})

export default roteador;

