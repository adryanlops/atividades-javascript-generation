const leia = require('readline-sync')
console.log("\nEscreva seu número e te falamos o que ele é!\n")

let numDigitado = leia.questionInt()

if(numDigitado % 2 === 0) {
    if(numDigitado > 0){
    console.log(`\nO Número ${numDigitado} é par e positivo!`)
    } else{
        console.log(`\nO Número ${numDigitado} é par e negativo!`)
    }
}else if(numDigitado % 2 === 1 || numDigitado % 2 === -1){
    if(numDigitado < 0){
        console.log(`\nO Número ${numDigitado} é ímpar e negativo!`)
    } else{
        console.log(`\nO Número ${numDigitado} é ímpar e positivo!`)
    }
}
