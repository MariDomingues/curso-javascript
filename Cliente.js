export default class Cliente {

    nome;
    #cpf;

    constructor(pNome, pCpf) {

        this.nome = pNome;
        this.#cpf = pCpf;
    }

    get cpf() {
        
        return this.#cpf;
    }
}