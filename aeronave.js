// Classe Aeronave
export class Aeronave {
    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, empresa, capacidadePassageiros, pesoMaxCarga) {
        this._prefixo = prefixo;
        this._tipo = tipo;
        this._velocidadeCruzeiro = velocidadeCruzeiro;
        this._autonomia = autonomia;
        this._empresa = empresa;
        this._capacidadePassageiros = capacidadePassageiros;
        this._pesoMaxCarga = pesoMaxCarga;
    }

    // Métodos de acesso aos atributos privados
    get prefixo() {
        return this._prefixo;
    }

    get tipo() {
        return this._tipo;
    }

    get velocidadeCruzeiro() {
        return this._velocidadeCruzeiro;
    }

    get autonomia() {
        return this._autonomia;
    }

    get empresa() {
        return this._empresa;
    }

    get capacidadePassageiros() {
        return this._capacidadePassageiros;
    }

    get pesoMaxCarga() {
        return this._pesoMaxCarga;
    }

    // Métodos de acesso aos atributos privados
    set prefixo(prefixo) {
        this._prefixo = prefixo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    set velocidadeCruzeiro(velocidadeCruzeiro) {
        this._velocidadeCruzeiro = velocidadeCruzeiro;
    }

    set autonomia(autonomia) {
        this._autonomia = autonomia;
    }

    set empresa(empresa) {
        this._empresa = empresa;
    }

    set capacidadePassageiros(capacidadePassageiros) {
        this._capacidadePassageiros = capacidadePassageiros;
    }

    set pesoMaxCarga(pesoMaxCarga) {
        this._pesoMaxCarga = pesoMaxCarga;
    }
}