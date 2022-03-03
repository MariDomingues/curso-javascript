import Funcionario from "./Funcionario";

export default class Gerente extends Funcionario {

    constructor(pNome, pCpf, pSalario) {

        super(pNome, pCpf, pSalario);
        super.bonificacao(1.1);
    }
}