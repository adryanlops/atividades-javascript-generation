const leia = require("readline-sync")


let joven = 0;
let idoso = 0;
let contagem = true;

while(contagem){
    let idade = leia.questionInt("Digite uma idade: ")
    if( idade > 0 && idade < 21 ){
        joven++
    } else if(idade > 0 && idade > 50){
        idoso++
    } else if(idade<0){
        contagem = false
    }
}

console.clear()
console.log(`Total de pessoas menores que 21 anos é : ${joven}`)
console.log(`Total de pessoas maiores que 50 anos é : ${idoso}`)