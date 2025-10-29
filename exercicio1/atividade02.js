const leia = require('readline-sync')

console.log("\nVamos calcular sua média!\n")

let notas = []
let soma = 0

for(let i = 0; i<4; i++){
 notas[i] = leia.questionFloat("Digite sua nota aqui: ")
soma += notas[i]
}

let media = soma / notas.length
media = media.toFixed(1)

console.log("Sua média total é de: ",media)

