const leia = require("readline-sync")

let soma = 0;
let contagem = 0;
let numero = 0



do{
    numero = leia.questionInt("Digite um número: ")
    if(numero % 3 === 0 && numero > 0 ){
        soma += numero
        contagem ++
    }
} while(numero !== 0)

    if (contagem > 0) {
        let media = soma / contagem;
        console.log(`\nA média dos números múltiplos de 3 é: ${media.toFixed(2)}`);
    }