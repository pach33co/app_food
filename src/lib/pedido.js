import { StatusPedido } from "../enums/status.pedido.js";

export class PedidoModel {
    constructor(id = 0, clienteId = 0, entregadorId = 0, estabelecimentoId = 0, status = StatusPedido.ABERTO, total = 0, criadoEm = "", avaliacaoEstabelecimento = 0, avaliacaoEntregador = 0) 
    {
        this.id = id;
        this.clienteId = clienteId;
        this.entregadorId = entregadorId;
        this.estabelecimentoId = estabelecimentoId;
        this.status = status;
        this.total = total;
        this.criadoEm = criadoEm;
        this.avaliacaoEstabelecimento = avaliacaoEstabelecimento;
        this.avaliacaoEntregador = avaliacaoEntregador;
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
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

    getEstabelecimentoId(){
        return this.estabelecimentoId;
    }
    setEstabelecimentoId(estabelecimentoId){
        this.estabelecimentoId = estabelecimentoId;
    }

    getStatusPedido() {
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

