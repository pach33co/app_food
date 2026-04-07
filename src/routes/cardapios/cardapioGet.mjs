import express from 'express';

const roteador = express.Router();

roteador.get('/cardapios', (req, res) => {
    const cardapios = req.body.cardapios;
    res.json(cardapios);
})

export default roteador;