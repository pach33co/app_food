import express from 'express';

const roteador = express.Router();

roteador.get('/estabelecimentos', (req, res) => {
    const estabelecimentos = req.body.estabelecimento;
    res.json(estabelecimentos);

})

export default roteador;