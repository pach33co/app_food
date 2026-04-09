import { PerfilCliente } from "../enums/perfil.cliente.js";
import { connection } from "../config/db.context.js";

export class ClienteModel {
    constructor(id = 0, nome = "", email = "", telefone = "", enderecoEntrega = "", observacaoEndereco = "", senha = "", perfil = PerfilCliente.CLIENTE) {
        this.id = id;
        this.setNome(nome);
        this.setEmail(email);
        this.setTelefone(telefone);
        this.setEnderecoEntrega(enderecoEntrega);
        this.setObservacaoEndereco(observacaoEndereco);
        this.setSenha(senha);
        this.setPerfil(perfil);
    }

    setNome(nome) {
        if (!nome || nome.length < 3) {
            throw new Error("Nome inválido");
        }
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }

    setEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !regex.test(email)) {
            throw new Error("Email inválido");
        }
        this.email = email;
    }
    getEmail() {
        return this.email;
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

    setEnderecoEntrega(enderecoEntrega) {
        this.enderecoEntrega = enderecoEntrega;
    }
    getEnderecoEntrega() {
        return this.enderecoEntrega;
    }

    setObservacaoEndereco(obs) {
        this.observacaoEndereco = obs;
    }
    getObservacaoEndereco() {
        return this.observacaoEndereco;
    }
    //depois melhora a validação da senha, por enquanto deixa assim só para testes
    setSenha(senha) {
        if (!senha || senha.length < 6) {
            throw new Error("Senha deve conter no mínimo 6 caracteres");
        }
        this.senha = senha;
    }
    getSenha() {
        return this.senha;
    }

    setPerfil(perfil) {
        this.perfil = perfil;
    }
    getPerfil() {
        return this.perfil;
    }

    static async listar() {
        const [rows] = await connection.query("SELECT * FROM cliente");

        return rows.map(r => new ClienteModel(
            r.id,
            r.nome,
            r.email,
            r.telefone,
            r.enderecoEntrega,
            r.observacaoEndereco,
            r.senha,
            r.perfil
        ));
    }

    static async buscarPorId(id) {
        const [rows] = await connection.query(
            "SELECT * FROM cliente WHERE id = ?",
            [id]
        );

        if (rows.length === 0) return null;

        const r = rows[0];

        return new ClienteModel(
            r.id,
            r.nome,
            r.email,
            r.telefone,
            r.enderecoEntrega,
            r.observacaoEndereco,
            r.senha,
            r.perfil
        );
    }

    static async criar(data) {
        const item = new ClienteModel(
            0,
            data.nome,
            data.email,
            data.telefone,
            data.enderecoEntrega,
            data.observacaoEndereco,
            data.senha,
            data.perfil
        );

        const [result] = await connection.query(
            `INSERT INTO cliente 
          (nome, 
          email, 
          telefone, 
          enderecoEntrega,
          observacaoEndereco, 
          senha,
          perfil)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                item.nome,
                item.email,
                item.telefone,
                item.enderecoEntrega,
                item.observacaoEndereco,
                item.senha,
                item.perfil
            ]
        );

        item.id = result.insertId;
        return item;
    }

    static async atualizar(id, data) {
        const item = new ClienteModel(
            id,
            data.nome,
            data.email,
            data.telefone,
            data.enderecoEntrega,
            data.observacaoEndereco,
            data.senha,
            data.perfil
        );

        const [result] = await connection.query(
            `UPDATE cliente SET
            nome = ?,
            email = ?,
            telefone = ?,
            enderecoEntrega = ?,
            observacaoEndereco = ?,
            senha = ?,
            perfil = ?
          WHERE id = ?`,
            [
                item.nome,
                item.email,
                item.telefone,
                item.enderecoEntrega,
                item.observacaoEndereco,
                item.senha,
                item.perfil,
                id
            ]
        );

        if (result.affectedRows === 0) return null;

        return this.buscarPorId(id);
    }

    static async remover(id) {
        const [result] = await connection.query(
            "DELETE FROM cliente WHERE id = ?",
            [id]
        );

        return result.affectedRows;
    }
}