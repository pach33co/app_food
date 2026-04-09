import { CardapioModel } from "../models/cardapio.js";

export class CardapioController {

    async listar(req, res) {
        try {
            const data = await CardapioModel.listar();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = Number(req.params.id);

            if (!id) return res.status(400).json({ error: "ID inválido" });

            const item = await CardapioModel.buscarPorId(id);

            if (!item) return res.status(404).json({ error: "Não encontrado" });

            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const item = await CardapioModel.criar(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const id = Number(req.params.id);

            if (!id) return res.status(400).json({ error: "ID inválido" });

            const item = await CardapioModel.atualizar(id, req.body);

            if (!item) return res.status(404).json({ error: "Não encontrado" });

            res.status(200).json(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async remover(req, res) {
        try {
            const id = Number(req.params.id);

            if (!id) return res.status(400).json({ error: "ID inválido" });

            const deleted = await CardapioModel.remover(id);

            if (!deleted) return res.status(404).json({ error: "Não encontrado" });

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}