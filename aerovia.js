
// Classe Aerovia
export class Aerovia {
    constructor(identificador, origem, destino, tamanho) {
        this._identificador = identificador;
        this._origem = origem;
        this._destino = destino;
        this._tamanho = tamanho;
        this._altitudesOcupadas = {};
    }

    verificarAltitudesLivres(data) {
        // Implementação para verificar altitudes livres em uma determinada aerovia em um determinado horário
        // Você deve implementar essa lógica conforme as regras especificadas
        // Este é apenas um esqueleto de exemplo
    }

    // Métodos de acesso aos atributos privados
    get identificador() {
        return this._identificador;
    }

    get origem() {
        return this._origem;
    }

    get destino() {
        return this._destino;
    }

    get tamanho() {
        return this._tamanho;
    }

    // Métodos de acesso aos atributos privados
    set identificador(identificador) {
        this._identificador = identificador;
    }

    set origem(origem) {
        this._origem = origem;
    }

    set destino(destino) {
        this._destino = destino;
    }

    set tamanho(tamanho) {
        this._tamanho = tamanho;
    }
}