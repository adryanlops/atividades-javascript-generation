const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], numero, i

console.log("Vetor: ", vetor)

numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")

let achado = true 

for (i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`\nO numero ${numero} esta localizado na posição: ${i}`)
    }else{ 
        achado = false
    }
}

if(!achado){
    console.log(`O número ${numero} não foi encontrado`)
}