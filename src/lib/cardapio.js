import { connection } from "../config/db.context.js";

export class CardapioModel {
    constructor(id = 0, estabelecimentoId = 0, nome = "", descricaoProduto = "", categoria = "", preco = 0, imagemUrl = "", disponivel = false) {
        this.id = id;
        this.estabelecimentoId = estabelecimentoId;
        this.setNome(nome);
        this.setDescricaoProduto(descricaoProduto)
        this.setCategoria(categoria)
        this.setPreco(preco);
        this.setImageUrl(imagemUrl)
        this.setDisponivel(disponivel);
    }

    setNome(nome) {
        if (!nome || nome.length < 3) {
            throw new Error("Nome inválido (mínimo 3 caracteres)");
        }
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }

    setDescricaoProduto(descricaoProduto) {
        this.descricaoProduto = descricaoProduto;
    }
    getDescricaoProduto() {
        return this.descricaoProduto;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }
    getCategoria() {
        return this.categoria;
    }

    setPreco(preco) {
        if (preco <= 0) {
            throw new Error("Preço deve ser maior que zero");
        }
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }

    setImageUrl(imagemUrl) {
        this.imagemUrl = imagemUrl;
    }
    getImageUrl() {
        return this.imagemUrl;
    }

    setDisponivel(disponivel) {
        this.disponivel = Boolean(disponivel);
    }
    getDisponivel() {
        return this.disponivel;
    }

    static async listar() {
        const [rows] = await connection.query("SELECT * FROM cardapio");

        return rows.map(r => new CardapioModel(
            r.id,
            r.estabelecimentoId,
            r.nome,
            r.descricaoProduto,
            r.categoria,
            r.preco,
            r.imagemUrl,
            r.disponivel
        ));
    }

    static async buscarPorId(id) {
        const [rows] = await connection.query(
            "SELECT * FROM cardapio WHERE id = ?",
            [id]
        );

        if (rows.length === 0) return null;

        const r = rows[0];

        return new CardapioModel(
            r.id,
            r.estabelecimentoId,
            r.nome,
            r.descricaoProduto,
            r.categoria,
            r.preco,
            r.imagemUrl,
            r.disponivel
        );
    }

    static async criar(data) {
        const item = new CardapioModel(
            0,
            data.estabelecimentoId,
            data.nome,
            data.descricaoProduto,
            data.categoria,
            data.preco,
            data.imagemUrl,
            data.disponivel
        );

        const [result] = await connection.query(
            `INSERT INTO cardapio 
      (estabelecimentoId, 
      nome, 
      descricaoProduto, 
      categoria, 
      preco,
      imageUrl, 
      disponivel)
      VALUES (?, ?, ?, ?, ?, ?)`,
            [
                item.estabelecimentoId,
                item.nome,
                item.descricaoProduto,
                item.categoria,
                item.preco,
                item.imagemUrl,
                item.disponivel
            ]
        );

        item.id = result.insertId;
        return item;
    }

    static async atualizar(id, data) {
        const item = new CardapioModel(
            id,
            data.estabelecimentoId,
            data.nome,
            data.descricaoProduto,
            data.categoria,
            data.preco,
            data.imagemUrl,
            data.disponivel
        );

        const [result] = await connection.query(
            `UPDATE cardapio SET
        estabelecimentoId = ?,
        nome = ?,
        descricaoProduto = ?,
        categoria = ?,
        preco = ?,
        imageUrl = ?,
        disponivel = ?,
      WHERE id = ?`,
            [
                item.estabelecimentoId,
                item.nome,
                item.descricaoProduto,
                item.categoria,
                item.preco,
                item.imagemUrl,
                item.disponivel,
                id
            ]
        );

        if (result.affectedRows === 0) return null;

        return this.buscarPorId(id);
    }

    static async remover(id) {
        const [result] = await connection.query(
            "DELETE FROM cardapio WHERE id = ?",
            [id]
        );

        return result.affectedRows;
    }
}