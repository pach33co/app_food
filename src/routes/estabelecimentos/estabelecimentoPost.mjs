import express from 'express';

const roteador = express.Router()

roteador.post('/estabelecimentos', (req, res) => {
    const novoEstabelecimento = req.body;
    res.status(201).json(novoEstabelecimento);
})

export default roteador;

