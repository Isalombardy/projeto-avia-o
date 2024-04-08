import { Piloto } from "./piloto.js";
import { Aeronave } from "./Aeronave.js";
import { Aerovia } from "./Aerovia.js";
import { PlanoVoo } from "./planosVoo.js";


// Classe Sistema
class Sistema {
    constructor() {
        this._pilotos = [];
        this._aeronaves = [];
        this._aerovias = [];
        this._planosVoo = [];
    }

    // Métodos para adicionar pilotos, aeronaves e aerovias ao sistema
    adicionarPiloto(piloto) {
        this._pilotos.push(piloto);
    }

    adicionarAeronave(aeronave) {
        this._aeronaves.push(aeronave);
    }

    adicionarAerovia(aerovia) {
        this._aerovias.push(aerovia);
    }

    // Métodos para listar aerovias existentes entre dois aeroportos
    listarAerovias(origem, destino) {
        const aerovias = this._aerovias.filter(aerovia => aerovia.origem === origem && aerovia.destino === destino);
        return aerovias;
    }

    // Método para listar altitudes livres em uma determinada aerovia em um determinado horário
    listarAltitudesLivres(identificadorAerovia, dataHora) {
        const aerovia = this._aerovias.find(aerovia => aerovia.identificador === identificadorAerovia);
        if (aerovia) {
            return aerovia.verificarAltitudesLivres(dataHora);
        } else {
            return null;
        }
    }

    // Método para submeter um plano de voo para aprovação
    submeterPlanoVoo(matriculaPiloto, prefixoAeronave, dataHora, identificadorAerovia, altitude) {
        const piloto = this._pilotos.find(piloto => piloto.matricula === matriculaPiloto);
        const aeronave = this._aeronaves.find(aeronave => aeronave.prefixo === prefixoAeronave);
        const aerovia = this._aerovias.find(aerovia => aerovia.identificador === identificadorAerovia);

        if (!piloto || !aeronave || !aerovia) {
            return null; // Piloto, aeronave ou aerovia não encontrados
        }

        // Verificar se a aeronave tem autonomia para o trecho
        if (aeronave.autonomia < aerovia.tamanho * 1.1) {
            return null; // Autonomia insuficiente
        }

        // Verificar se a altitude é compatível com o tipo de aeronave
        if ((aeronave.tipo === "Particular" && (altitude < 25000 || altitude > 27000)) ||
            (aeronave.tipo === "Comercial de Passageiros" && altitude < 28000) ||
            (aeronave.tipo === "Comercial de Carga" && (dataHora.getHours() < 6 || dataHora.getHours() >= 12))) {
            return null; // Altitude incompatível com o tipo de aeronave
        }

        // Verificar se os slots de horário necessários estão livres
        // Implementação dos slots de horário a ser feita

        // Se todas as condições forem atendidas, criar o plano de voo e marcar a aerovia/altitude como ocupada
        const novoPlanoVoo = new PlanoVoo(
            this._planosVoo.length + 1, // Identificador único incremental
            matriculaPiloto,
            prefixoAeronave,
            dataHora,
            identificadorAerovia,
            altitude,
            [], // Slots de horário ocupados inicialmente vazio
            false // Plano de voo não cancelado
        );

        this._planosVoo.push(novoPlanoVoo);
        // Implementação para marcar aerovia/altitude como ocupada a ser feita

        return novoPlanoVoo.identificador; // Retornar o identificador do plano de voo aprovado
    }

    // Métodos para listar um plano a partir do número
    listarPlanoVoo(identificadorPlanoVoo) {
        const planoVoo = this._planosVoo.find(plano => plano.identificador === identificadorPlanoVoo);
        return planoVoo;
    }

    // Método para listar todos os planos previstos para uma determinada data
    listarPlanosVooData(data) {
        const planosVooData = this._planosVoo.filter(plano => plano.dataHora.toDateString() === data.toDateString());
        return planosVooData;
    }

    // Método para listar a ocupação de uma aerovia em uma determinada data
    listarOcupacaoAeroviaData(identificadorAerovia, data) {
        const planosVooAeroviaData = this._planosVoo.filter(plano => plano.identificadorAerovia === identificadorAerovia && plano.dataHora.toDateString() === data.toDateString());
        return planosVooAeroviaData;
    }

    // Método para cancelar um plano de voo
    cancelarPlanoVoo(identificadorPlanoVoo) {
        const planoVoo = this._planosVoo.find(plano => plano.identificador === identificadorPlanoVoo);
        if (planoVoo) {
            planoVoo.cancelado = true;
            // Implementação para liberar aerovia/altitude previamente bloqueadas
        }
    }

    // Método para encerrar o sistema
    encerrarSistema() {
        // Implementação para armazenar todos os dados que estão em memória em arquivos texto
        // e encerrar o sistema
        const data = {
            pilotos: this._pilotos,
            aeronaves: this._aeronaves,
            aerovias: this._aerovias,
            planosVoo: this._planosVoo
        };

        // Escrever os dados em arquivos de texto
        fs.writeFileSync('pilotos.json', JSON.stringify(data.pilotos));
        fs.writeFileSync('aeronaves.json', JSON.stringify(data.aeronaves));
        fs.writeFileSync('aerovias.json', JSON.stringify(data.aerovias));
        fs.writeFileSync('planosVoo.json', JSON.stringify(data.planosVoo));
    }
}

// Exemplo de uso do sistema
const sistema = new Sistema();

// Adicionar pilotos
const piloto1 = new Piloto('123', 'João', true);
const piloto2 = new Piloto('456', 'Maria', true);
sistema.adicionarPiloto(piloto1);
sistema.adicionarPiloto(piloto2);

// Adicionar aeronaves
const aeronave1 = new Aeronave('ABC123', 'Particular', 500, 2000, 'Empresa A', 4, 1000);
const aeronave2 = new Aeronave('DEF456', 'Comercial de Passageiros', 600, 2500, 'Empresa B', 150, 5000);
sistema.adicionarAeronave(aeronave1);
sistema.adicionarAeronave(aeronave2);

// Adicionar aerovias
const aerovia1 = new Aerovia('A1', 'Aeroporto A', 'Aeroporto B', 100);
const aerovia2 = new Aerovia('A2', 'Aeroporto B', 'Aeroporto C', 150);
sistema.adicionarAerovia(aerovia1);
sistema.adicionarAerovia(aerovia2);

// Listar aerovias entre dois aeroportos
const aeroviasEntreAeroportos = sistema.listarAerovias('Aeroporto A', 'Aeroporto B');
console.log("Listar Aerovias:");
console.log(aeroviasEntreAeroportos);

// Listar altitudes livres em uma aerovia em um determinado horário
const altitudesLivres = sistema.listarAltitudesLivres('A1', new Date());
console.log("\nListar Altitudes Livres:");
console.log(altitudesLivres);

// Submeter um plano de voo para aprovação
const identificadorPlanoVoo = sistema.submeterPlanoVoo('123', 'ABC123', new Date(), 'A1', 26000);
console.log("\nIdentificador do Plano de Voo Submetido:");
console.log(identificadorPlanoVoo);

// Listar um plano de voo a partir do número
const planoVoo = sistema.listarPlanoVoo(identificadorPlanoVoo);
console.log("\nDetalhes do Plano de Voo:");
console.log(planoVoo);

// Listar todos os planos previstos para uma determinada data
const planosVooData = sistema.listarPlanosVooData(new Date());
console.log("\nListar Planos de Voo para a Data Atual:");
console.log(planosVooData);

// Listar a ocupação de uma aerovia em uma determinada data
const ocupacaoAeroviaData = sistema.listarOcupacaoAeroviaData('A1', new Date());
console.log("\nListar Ocupação da Aerovia para a Data Atual:");
console.log(ocupacaoAeroviaData);

// Cancelar um plano de voo
sistema.cancelarPlanoVoo(identificadorPlanoVoo);

// Encerrar o sistema
sistema.encerrarSistema();