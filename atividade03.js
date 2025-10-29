const leia = require('readline-sync')

console.log("Vamos calcular o seu Salário Líquido!\n")

let salarioBruto, addNoturno, horaExtra, descontos, salarioLiquido

salarioBruto = leia.questionFloat("Qual o valor bruto do seu Salário: ")
addNoturno = leia.questionFloat("Quanto é o seu Adicional Noturno: ")
horaExtra = leia.questionFloat("Quanto você fez de Hora Extra: ")
descontos = leia.questionFloat("Qual o valor do Desconto: ")

salarioLiquido = salarioBruto + addNoturno  + (horaExtra * 5) - descontos

liquidoFormatado = salarioLiquido.toFixed(2)

console.log("\nSeu Salário Líquido total é de R$ ", liquidoFormatado)