import express from "express";
import cardapioRoutes from "./cardapio.routes.js";
import clienteRoutes from "./cliente.routes.js";
import entregadorRoutes from "./entregador.routes.js";
import estabelecimentoRoutes from "./estabelecimento.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ status: "ok /" });
});

router.use("/cardapio", cardapioRoutes);
router.use("/cliente", clienteRoutes);
router.use("/entregador", entregadorRoutes);
router.use("/estabelecimento", estabelecimentoRoutes);
export default router;