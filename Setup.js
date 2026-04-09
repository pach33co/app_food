import express from "express";
import router from "./src/routes/index.js";

const app = express();

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
    res.send("API rodando");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});