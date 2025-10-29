const leia = require('readline-sync')

let salario, abono, novoSalario

console.log("Iremos calcular o valor do seu Salário junto ao Abono\n")

salario = leia.questionFloat("Digite seu salário atual: \n")
abono = leia.questionFloat("Digite o abono: \n")

novoSalario = salario + abono

let salarioFormatado = novoSalario.toFixed(2)

console.log("Seu Novo Salário é: R$", salarioFormatado)