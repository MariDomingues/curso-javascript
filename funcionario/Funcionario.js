export default class Funcionario {

    #nome;
    #salario
    #cpf;
    #bonificacao;
    #senha;

    constructor(pNome, pCpf, pSalario) {

        this.#nome = pNome;
        this.#cpf = pCpf;
        this.#salario = pSalario;

        this.#bonificacao = 1;
        this.#senha;
    }

    set bonificacao(pBonificacao) {
        
        this.#bonificacao = pBonificacao;
    }

    autenticar(pSenha) {
        
        return this.#senha == pSenha;
    }

     set senha(pSenha) {

        this.#senha = pSenha;
    }
}