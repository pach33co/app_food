import { statusPedido } from "../enums/status_perfil.mjs";

export class Pedido {
    constructor(id = 0, clienteId = 0, entregadorId = 0, status = statusPedido.ABERTO, total = 0, criadoEm = "", avaliacaoEstabelecimento = 0, avaliacaoEntregador = 0) {
        this.id = id;
        this.clienteId = clienteId;
        this.entregadorId = entregadorId;
        this.status = status;
        this.total = total;
        this.criadoEm = criadoEm;
        this.avaliacaoEstabelecimento = avaliacaoEstabelecimento;
        this.avaliacaoEntregador = avaliacaoEntregador;
    }

    getId() {
        return this.id;
    }
    setId(Id) {
        this.id = Id;
    }

    getClienteId() {
        return this.clienteId;
    }
    setClienteId(clienteId) {
        this.clienteId = clienteId;
    }

    getEntregadorId() {
        return this.entregadorId;
    }
    setEntregadorId(entregadorId) {
        this.entregadorId = entregadorId;
    }

    getStatus() {
        return this.status;
    }
    setStatusPedido(status) {
        this.status = status;
    }

    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }

    getCriadoEm() {
        return this.criadoEm;
    }
    setCriadoEm(criadoEm) {
        this.criadoEm = criadoEm;
    }

    getAvaliacaoEstabelecimento() {
        return this.avaliacaoEstabelecimento;
    }
    setAvaliacaoEstabelecimento(avaliacaoEstabelecimento) {
        this.avaliacaoEstabelecimento = avaliacaoEstabelecimento;
    }

    getAvaliacaoEntregador() {
        return this.avaliacaoEntregador;
    }
    setAvaliacaoEntregador(avaliacaoEntregador) {
        this.avaliacaoEntregador = avaliacaoEntregador;
    }
}

