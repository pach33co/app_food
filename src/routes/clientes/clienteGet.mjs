import express from 'express';

const roteador = express.Router();

roteador.get('/clientes', (req, res) => {
    const clientes = req.body.clientes;
    res.json(clientes);
})

export default roteador;

