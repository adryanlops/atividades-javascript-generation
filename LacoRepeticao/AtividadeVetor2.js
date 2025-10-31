const leia = require('readline-sync');


let vetor = []
let soma = 0;

for(let i = 0; i < 10; i++){
    vetor[i]= leia.questionInt("Escreva ")
    soma += vetor[i]
}

let media = soma / vetor.length;

console.log("\nOs número nos índices ímpares são: ")
for(let i = 0; i< 10; i++){
    if(i % 2 != 0){
        console.log(vetor[i])
    }
}

console.log("\nOs número paress são: ")
for(let i = 0; i< 10; i++){
    if(vetor[i] % 2 === 0){
        console.log(vetor[i])
    }
}

console.log(`\nO valor da soma é: ${soma}`)
console.log(`O valor da média é: ${media}`)