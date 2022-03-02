import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta {

    constructor(pAgencia, pCliente, pSaldo) {

        super(pAgencia, pCliente, pSaldo);
    }

    sacar(pValor) {

        return super.sacar(pValor, 1.02);
    }
}