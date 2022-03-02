import Cliente from "./../Cliente.js";

export default class Conta {

    agencia;

    #cliente;
    #saldo;

    constructor(pAgencia, pCliente, pSaldo) {

        this.agencia = pAgencia;
        this.#cliente = pCliente;
        this.#saldo = pSaldo;
    }

    sacar(pValor, pTaixa) {

        if (this.#saldo < pValor)
            return;

        this.#saldo -= pValor;

        return pValor;
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