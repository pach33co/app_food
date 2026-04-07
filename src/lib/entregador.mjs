import { statusVeiculo } from "../enums/status_veiculo.mjs";

export class Entregador {
    constructor(id = 0, avaliacaoGeral = 0, nome = "", telefone = "", veiculo = statusVeiculo.MOTO, disponivel = false) {
        this.id = id;
        this.avaliacaoGeral = avaliacaoGeral;
        this.nome = nome;
        this.telefone = telefone;
        this.veiculo = veiculo;
        this.disponivel = disponivel;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getAvaliacaoGeral() {
        return this.avaliacaoGeral;
    }

    setAvaliacaoGeral(avaliacaoGeral) {
        this.avaliacaoGeral = avaliacaoGeral;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getTelefone() {
        return this.telefone;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    getVeiculo() {
        return this.veiculo;
    }

    setVeiculo(veiculo) {
        this.veiculo = veiculo;
    }

    getDisponivel() {
        return this.disponivel;
    }

    setDisponivel(disponivel) {
        this.disponivel = disponivel;
    }
}