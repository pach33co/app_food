import express from 'express';

const roteador = express.Router()

roteador.get('/entregadores', (req, res) => {
    const entregadores = req.body.entregadores;
    res.json(entregadores)
})

export default roteador;

