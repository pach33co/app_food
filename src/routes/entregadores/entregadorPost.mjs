import express from 'express';

const roteador = express.Router()

roteador.post('/entregadores', (req, res) => {
    const novoEntregador = req.body;
    res.status(201).json(novoEntregador);
})

export default roteador;