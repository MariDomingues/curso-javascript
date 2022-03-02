import Cliente from "./../Cliente.js";

export default class Conta {

    agencia;

    #cliente;
    #saldo;

    constructor(pAgencia, pCliente, pSaldo) {
        
        if (this.constructor == Conta) {
            throw new Error("Não deve ser instanciado uma classe Conta!");
        }

        this.agencia = pAgencia;
        this.#cliente = pCliente;
        this.#saldo = pSaldo;
    }

    //método abstrato, ou seja, tem que ser sempre reescrito
    sacar(pValor) {
        throw new Error("O método sacar deve ser reescrito!");
    }

    sacar(pValor, pTaixa) {

        const valorSacado = pTaixa * pValor;

        if (this.#saldo < valorSacado)
            return 0;

        this.#saldo -= valorSacado;

        return valorSacado;
    }

    depositar(pValor) {

        if (pValor <= 0)
            return;

        this.#saldo += pValor;
    }

    get saldo() {

        return this.#saldo;
    }

    transferir(pValor, pConta) {

        if (!pConta instanceof this) {
            return;
        }

        const valorSacado = this.sacar(pValor);

        pConta.depositar(valorSacado);
    }

    set cliente(pCliente) {

        if (!pCliente instanceof Cliente) {
            return;
        }

        this.#cliente = pCliente;
    }

    get cliente() {

        return this.#cliente;
    }   
}