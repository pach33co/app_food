import express from 'express';

const roteador = express.Router()

roteador.post('/produtosPedidos', (req, res) => {
    const produtosPedidos = req.body;
    res.status(201).json(produtosPedidos);
})

export default roteador;

