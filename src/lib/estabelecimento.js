import { connection } from "../config/db.context.js";

export class EstabelecimentoModel {
    constructor(id = 0, avaliacaoGeral = 0, nome = "", telefone = "", endereco = "", disponivel = false) {
        this.id = id;
        this.setAvaliacaoGeral(avaliacaoGeral);
        this.setNome(nome);
        this.setTelefone(telefone);
        this.setEndereco(endereco);
        this.setAberto(disponivel);
    }

    setAvaliacaoGeral(avaliacaoGeral) {
        if (avaliacaoGeral < 0 || avaliacaoGeral > 5) {
            throw new Error("Avaliação invalida, avalie entre 0 a 5)");
        }
        this.avaliacaoGeral = avaliacaoGeral;
    }
    getAvaliacaoGeral() {
        return this.avaliacaoGeral;
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

    setTelefone(telefone) {
        if (!telefone || telefone.length < 11) {
            throw new Error("Telefone inválido");
        }
        this.telefone = telefone;
    }
    getTelefone() {
        return this.telefone;
    }

    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getEndereco() {
        return this.endereco;
    }

    setAberto(disponivel) {
        this.disponivel = disponivel;
    }
    getAberto() {
        return this.disponivel;
    }

    static async listar() {
        const [rows] = await connection.query("SELECT * FROM estabelecimento");

        return rows.map(r => new EstabelecimentoModel(
            r.id,
            r.avaliacaoGeral,
            r.nome,
            r.telefone,
            r.endereco,
            r.disponivel
        ));
    }

    static async buscarPorId(id) {
        const [rows] = await connection.query(
            "SELECT * FROM estabecimento WHERE id = ?",
            [id]
        );

        if (rows.length === 0) return null;

        const r = rows[0];

        return new EstabelecimentoModel(
            r.id,
            r.avaliacaoGeral,
            r.nome,
            r.telefone,
            r.endereco,
            r.disponivel
        );
    }

    static async criar(data) {
        const item = new EstabelecimentoModel(
            0,
            data.avaliacaoGeral,
            data.nome,
            data.telefone,
            data.endereco,
            data.disponivel
        );

        const [result] = await connection.query(
            `INSERT INTO estabelecimento 
          (avaliacaoGeral, 
          nome, 
          telefone, 
          endereco, 
          disponivel)
          VALUES (?, ?, ?, ?, ?)`,
            [
                item.avaliacaoGeral,
                item.nome,
                item.telefone,
                item.endereco,
                item.disponivel
            ]
        );

        item.id = result.insertId;
        return item;
    }

    static async atualizar(id, data) {
        const item = new EstabelecimentoModel(
            id,
            data.avaliacaoGeral,
            data.nome,
            data.telefone,
            data.endereco,
            data.disponivel
        );

        const [result] = await connection.query(
            `UPDATE estabelecimento SET
            avaliacaoGeral = ?,
            nome = ?,
            telefone = ?,
            endereco = ?,
            disponivel = ?
          WHERE id = ?`
            [
            item.avaliacaoGeral,
            item.nome,
            item.telefone,
            item.endereco,
            item.disponivel,
            id
            ]
        );

        if (result.affectedRows === 0) return null;

        return this.buscarPorId(id);
    }

    static async remover(id) {
        const [result] = await connection.query(
            "DELETE FROM estabelecimento WHERE id = ?",
            [id]
        );

        return result.affectedRows;
    }
}