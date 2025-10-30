const leia = require('readline-sync')

console.log("Aqui é sua calculadora!")
let numero1 = leia.questionFloat("Digite o primeiro número: ")
let numero2 = leia.questionFloat("Digite o segundo número: ")

console.log("------------------------------")
console.log("Selecione a sua operação!")
console.log("| 1 ) - Soma")
console.log("| 2 ) - Subtração")
console.log("| 3 ) - Multiplicação")
console.log("| 4 ) - Divisão\n")

let operacao = leia.questionInt()

switch(operacao){
    case 1:
        let soma = numero1 + numero2
        console.log(`\n${numero1} + ${numero2} = ${soma}`)
        break
    case 2:
        let subtracao = numero1 - numero2
        console.log(`\n${numero1} - ${numero2} = ${subtracao}`)
        break
    case 3:
        let multi = numero1 * numero2
        console.log(`\n${numero1} x ${numero2} = ${multi}`)
        break
    case 4:
        let divisao = numero1 / numero2
        console.log(`\n${numero1} / ${numero2} = ${divisao}`)
        break
    default:
        console.log("\n Operação inválida!")
}