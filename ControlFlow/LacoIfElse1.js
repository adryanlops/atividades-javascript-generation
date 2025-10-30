const leia = require('readline-sync')

console.log("\n Aqui A + B é maior, menor ou igual a C\n")
console.log("--------------------------------------------\n")

let num1 = leia.questionInt("Digite o número de A: ")
let num2 = leia.questionInt("Digite o número de B: ")
let num3 = leia.questionInt("Digite o número de C: ")

let soma = num1 + num2

if(soma > num3){
    console.log(`${num1} + ${num2} = ${soma} > ${num3} `)
    console.log("A soma de A e B é maior que C! ")
} else if(soma < num3){
    console.log(`${num1} + ${num2} = ${soma} < ${num3} `)
    console.log("A soma de A e B é menor que C!")
} else{ 
    console.log(`${num1} + ${num2} = ${soma} = ${num3} `)
    console.log("A soma de A e B é igual ao valor de C!")
}
