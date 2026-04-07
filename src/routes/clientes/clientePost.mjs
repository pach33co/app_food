import express from 'express';

const roteador = express.Router();

roteador.post('/clientes', (req, res) => {
    const novoCliente = req.body;
    res.status(201).json(novoCliente);
})

export default roteador;


