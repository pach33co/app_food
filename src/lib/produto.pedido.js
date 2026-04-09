export class ProdutoPedidoModel {
    constructor(id = 0, pedidoId = 0, cardapioId = 0, quantidade = 0, precoUnitario = 0) 
    {
        this.id = id;
        this.pedidoId = pedidoId;
        this.cardapioId = cardapioId;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }

    getPedidoId() {
        return this.pedidoId;
    }
    setPedidoId(pedidoId) {
        this.pedidoId = pedidoId;
    }

    getCardapioId() {
        return this.cardapioId;
    }
    setCardapioId(cardapioId) {
        this.cardapioId = cardapioId;
    }

    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }

    getPrecoUnitario() {
        return this.precoUnitario;
    }
    setPrecoUnitario(precoUnitario) {
        this.precoUnitario = precoUnitario;
    }
}

