export default class Cliente {

    nome;
    #cpf;
    #senha;

    constructor(pNome, pCpf, pSenha) {

        this.nome = pNome;
        this.#cpf = pCpf;
        this.#senha = pSenha;
    }

    get cpf() {
        
        return this.#cpf;
    }

    autenticar() {

        return true;
    }
}