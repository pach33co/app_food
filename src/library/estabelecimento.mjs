export class Estabelecimento {
    constructor(id=0, avaliacaoGeral=0, nome="", telefone="", endereco="", aberto=false) {
        this.id = id;
        this.avaliacaoGeral = avaliacaoGeral;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.aberto = aberto;
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

    getEndereco() {
        return this.endereco;
    }

    setEndereco(endereco) {
        this.endereco = endereco;
    }

    getAberto() {
        return this.aberto;
    }

    setAberto(aberto) {
        this.aberto = aberto;
    }
}

