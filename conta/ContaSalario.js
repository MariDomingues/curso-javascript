import Conta from "./Conta.js";

export default class ContaSalario extends Conta {

    constructor(pCliente) {

        super(0, pCliente, 100);
    }

    sacar(pValor) {

        return super.sacar(pValor, 1.01);
    }
}