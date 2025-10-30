const leia = require('readline-sync')

let num1, num2, num3 

console.log("\n Aqui A + B é maior, menor ou igual a C\n")
console.log("--------------------------------------------\n")

num1 = leia.questionInt("Digite o número de A: ")
num2 = leia.questionInt("Digite o número de B: ")
num3 = leia.questionInt("Digite o número de C: ")

if(num1 + num2 > num3){
    console.log("A soma de A e B é maior que C! ")
} else if(num1 + num2 < num3){
    console.log("A soma de A e B é menor que C!")
} else{ 
    console.log("A soma de A e B é igual ao valor de C!")
}
