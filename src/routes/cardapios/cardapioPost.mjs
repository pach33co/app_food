import express from 'express';

const roteador = express.Router();

roteador.post('/cardapios', (req, res) => {
    const novoCardapio = req.body;
    res.status(201).json(novoCardapio);
})

export default roteador;

