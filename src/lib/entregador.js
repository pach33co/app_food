import { StatusVeiculo } from "../enums/status.veiculo.js";
import { connection } from "../config/db.context.js";

export class EntregadorModel {
    constructor(id = 0, avaliacaoGeral = 0, nome = "", telefone = "", veiculo = StatusVeiculo.MOTO, disponivel = false) {
        this.id = id;
        this.setAvaliacaoGeral(avaliacaoGeral);
        this.setNome(nome);
        this.setTelefone(telefone);
        this.setVeiculo(veiculo);
        this.setDisponivel(disponivel);
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

    setVeiculo(veiculo) {
        if (!Object.values(StatusVeiculo).includes(veiculo)) {
            throw new Error("Veículo inválido");
        }
        this.veiculo = veiculo;
    }
    getVeiculo() {
        return this.veiculo;
    }

    setDisponivel(disponivel) {
        this.disponivel = Boolean(disponivel);
    }
    getDisponivel() {
        return this.disponivel;
    }

    static async listar() {
        const [rows] = await connection.query("SELECT * FROM entregador");

        return rows.map(r => new EntregadorModel(
            r.id,
            r.avaliacaoGeral,
            r.nome,
            r.telefone,
            r.veiculo,
            r.disponivel
        ));
    }

    static async buscarPorId(id) {
        const [rows] = await connection.query(
            "SELECT * FROM entregador WHERE id = ?",
            [id]
        );

        if (rows.length === 0) return null;

        const r = rows[0];

        return new EntregadorModel(
            r.id,
            r.avaliacaoGeral,
            r.nome,
            r.telefone,
            r.veiculo,
            r.disponivel
        );
    }

    static async criar(data) {
        const item = new EntregadorModel(
            0,
            data.avaliacaoGeral,
            data.nome,
            data.telefone,
            data.veiculo,
            data.disponivel
        );

        const [result] = await connection.query(
            `INSERT INTO entregador 
          (avaliacaoGeral, 
          nome, 
          telefone, 
          veiculo, 
          disponivel)
          VALUES (?, ?, ?, ?, ?)`,
            [
                item.avaliacaoGeral,
                item.nome,
                item.telefone,
                item.veiculo,
                item.disponivel
            ]
        );

        item.id = result.insertId;
        return item;
    }

    static async atualizar(id, data) {
        const item = new EntregadorModel(
            id,
            data.avaliacaoGeral,
            data.nome,
            data.telefone,
            data.veiculo,
            data.disponivel
        );

        const [result] = await connection.query(
            `UPDATE entregador SET
            avaliacaoGeral = ?,
            nome = ?,
            telefone = ?,
            veiculo = ?,
            disponivel = ?
          WHERE id = ?`
            [
            item.avaliacaoGeral,
            item.nome,
            item.telefone,
            item.veiculo,
            item.disponivel,
            id
            ]
        );

        if (result.affectedRows === 0) return null;

        return this.buscarPorId(id);
    }

    static async remover(id) {
        const [result] = await connection.query(
            "DELETE FROM entregador WHERE id = ?",
            [id]
        );

        return result.affectedRows;
    }
}