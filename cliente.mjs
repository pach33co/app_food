export class Cliente {
    constructor(id=0, nome="", email="", telefone="", enderecoEntrega="", observacaoEndereco="", senha="") {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.enderecoEntrega = enderecoEntrega;
        this.observacaoEndereco = observacaoEndereco;
        this.senha = senha;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getTelefone() {
        return this.telefone;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    getEnderecoEntrega() {
        return this.enderecoEntrega;
    }

    setEnderecoEntrega(enderecoEntrega) {
        this.enderecoEntrega = enderecoEntrega;
    }

    getObservacaoEndereco() {
        return this.observacaoEndereco;
    }

    setObservacaoEndereco(observacaoEndereco) {
        this.observacaoEndereco = observacaoEndereco;
    }

    getSenha() {
        return this.senha;
    }

    setSenha(senha) {
        this.senha = senha;
    }
}

