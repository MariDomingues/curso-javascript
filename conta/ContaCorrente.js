import Conta from "./Conta.js";

export default class ContaCorrente extends Conta {

    static numeroContas = 0;

    constructor(pAgencia, pCliente) {

        super(pAgencia, pCliente, 0);

        ContaCorrente.numeroContas += 1;
    }

    sacar(pValor) {

        return super.sacar(pValor, 1.1);
    }
}