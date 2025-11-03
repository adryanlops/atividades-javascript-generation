import leia = require("readline-sync");

const cores: Array<number> = [2,5,1,3,4,9,7,8,10,6]

console.log(cores)

let numero: number = leia.questionInt("Digite o número que deseja encontrar: ")
let incluido: boolean = cores.includes(numero)

if(incluido){
    console.log(`\nO número ${numero} está na posicação ${cores.indexOf(numero)}`)
} else{
    console.log(`\nO número ${numero} não foi encontrado!`)
}