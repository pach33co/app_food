export class Cardapio {
    constructor(id = 0, estabelecimentoId = 0, nome = "", descricaoProduto = "", categoria = "", preco = 0, disponivel = false) {
        this.id = id;
        this.estabelecimentoId = estabelecimentoId;
        this.nome = nome;
        this.descricaoProduto = descricaoProduto;
        this.categoria = categoria;
        this.preco = preco;
        this.disponivel = disponivel;
    }
    
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getEstabelecimentoId() {
        return this.estabelecimentoId;
    }

    setEstabelecimentoId(estabelecimentoId) {
        this.estabelecimentoId = estabelecimentoId;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getDescricaoProduto() {
        return this.descricao_produto;
    }

    setDescricaoProduto(descricaoProduto) {
        this.descricaoProduto = descricaoProduto;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }

    getPreco() {
        return this.preco;
    }

    setPreco(preco) {
        this.preco = preco;
    }

    getDisponivel() {
        return this.disponivel;
    }

    setDisponivel(disponivel) {
        this.disponivel = disponivel;
    }
}