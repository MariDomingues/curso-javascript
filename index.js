import Cliente from "./Cliente.js"
import ContaCorrente from "./conta/ContaCorrente.js"

const cliente1 = new Cliente("Mariane", 1234567890);
const contaCorrente1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("João", 1234567892);
const contaCorrente2 = new ContaCorrente(1001, cliente2);

console.log(`Cliente ${cliente1.nome} com o CPF ${cliente1.cpf}`);
contaCorrente1.depositar(150);
contaCorrente1.sacar(50);
console.log(`Conta Corrente - agência: ${contaCorrente1.agencia}, saldo: ${contaCorrente1.saldo} - do cliente ${contaCorrente1.cliente.nome}`)
console.log(contaCorrente1)