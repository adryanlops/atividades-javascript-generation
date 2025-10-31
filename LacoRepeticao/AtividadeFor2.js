const leia = require("readline-sync")


let par = 0
let impar = 0

for(let i = 1; i <= 10; i++){
    let pergunta = leia.questionInt(`Digite o  ${i}º número: `)
    if(pergunta % 2 ===0){
        par++
    } else{
        impar++
    }
}

console.clear()
console.log(`Total de números pares: ${par}`)
console.log(`Total de números ímpares: ${impar}`)