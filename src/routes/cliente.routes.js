import express from "express";
import { ClienteController } from "../controllers/cliente.controller.js";

const router = express.Router();

const controller = new ClienteController();

router.get("/", (req, res) => controller.listar(req, res));
router.get("/:id", (req, res) => controller.buscarPorId(req, res));
router.post("/", (req, res) => controller.criar(req, res));
router.put("/:id", (req, res) => controller.atualizar(req, res));
router.delete("/:id", (req, res) => controller.remover(req, res));

export default router;

