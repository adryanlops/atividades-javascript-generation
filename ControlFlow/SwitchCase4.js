const leia = require('readline-sync')

console.log("Aqui é sua calculadora!")

let saldo = 1000.00

console.log("------------------------------")
console.log("Selecione a sua operação!")
console.log("| 1 ) - Saldo")
console.log("| 2 ) - Saque")
console.log("| 3 ) - Depósito\n")


let operacao = leia.questionInt()

switch(operacao){
    case 1:
        console.log(`Operação - Saldo\n`)
        console.log(`Seu saldo é: R$ ${saldo}`)
        break
    case 2:
        console.log('Operação - Saque\n')
        let saque = leia.questionFloat("Digite o valor: ")
        if(saque < saldo){
            console.log(`Novo saldo é ${saldo - saque}`)
        }else{
            console.log("Saldo insuficiente!")
        }
        break
    case 3:
        console.log(`Operação - Depósito\n`)
        let deposito = leia.questionFloat("Digite o valor: ")
        console.log(`Novo saldo: R$ ${saldo + deposito}`)
        break
    default:
        console.log("\n Operação inválida!")
}