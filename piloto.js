// Classe Piloto
export class Piloto {
    constructor(matricula, nome, ativo) {
        this._matricula = matricula;
        this._nome = nome;
        this._ativo = ativo;
    }

    // Métodos de acesso aos atributos privados
    get matricula() {
        return this._matricula;
    }

    get nome() {
        return this._nome;
    }

    get ativo() {
        return this._ativo;
    }

    // Métodos de acesso aos atributos privados
    set matricula(matricula) {
        this._matricula = matricula;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set ativo(ativo) {
        this._ativo = ativo;
    }
}
// module.exports = Piloto;