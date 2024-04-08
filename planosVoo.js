// Classe Plano de Voo
export class PlanoVoo {
    constructor(identificador, matriculaPiloto, prefixoAeronave, dataHora, identificadorAerovia, altitude, slotsHorario, cancelado) {
        this._identificador = identificador;
        this._matriculaPiloto = matriculaPiloto;
        this._prefixoAeronave = prefixoAeronave;
        this._dataHora = dataHora;
        this._identificadorAerovia = identificadorAerovia;
        this._altitude = altitude;
        this._slotsHorario = slotsHorario;
        this._cancelado = cancelado;
    }

    // Métodos de acesso aos atributos privados
    get identificador() {
        return this._identificador;
    }

    get matriculaPiloto() {
        return this._matriculaPiloto;
    }

    get prefixoAeronave() {
        return this._prefixoAeronave;
    }

    get dataHora() {
        return this._dataHora;
    }

    get identificadorAerovia() {
        return this._identificadorAerovia;
    }

    get altitude() {
        return this._altitude;
    }

    get slotsHorario() {
        return this._slotsHorario;
    }

    get cancelado() {
        return this._cancelado;
    }

    // Métodos de acesso aos atributos privados
    set identificador(identificador) {
        this._identificador = identificador;
    }

    set matriculaPiloto(matriculaPiloto) {
        this._matriculaPiloto = matriculaPiloto;
    }

    set prefixoAeronave(prefixoAeronave) {
        this._prefixoAeronave = prefixoAeronave;
    }

    set dataHora(dataHora) {
        this._dataHora = dataHora;
    }

    set identificadorAerovia(identificadorAerovia) {
        this._identificadorAerovia = identificadorAerovia;
    }

    set altitude(altitude) {
        this._altitude = altitude;
    }

    set slotsHorario(slotsHorario) {
        this._slotsHorario = slotsHorario;
    }

    set cancelado(cancelado) {
        this._cancelado = cancelado;
    }
}