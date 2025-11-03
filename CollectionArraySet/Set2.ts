import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])

console.log(numeros)

let num: number = leia.questionInt("Digite o número que deseja encontrar: ")
let incluido: boolean = numeros.has(num)

if(incluido){
    console.log(`\nO número ${num} foi encontrado!`)
} else{
    console.log(`\nO número ${num} não foi encontrado!`)
}