const leia = require('readline-sync')


console.log("\nPara descobrir se você está apto a doar sangue, vamos fazer algumas perguntas!")

let nome = leia.question("Quando o seu nome: ")
let idade = leia.questionInt("Qual a sua idade: ")
let doacao = leia.keyInYNStrict("Você já doou sangue?")

function negativa(){
    console.log(`\n${nome} Não é está apto a doar sangue!`)
}

if(idade >= 18 && idade <= 69){
    
    if(idade >= 60 && idade <= 69  && doacao ){
       negativa()
    } else{
        console.log(`\n${nome} Está apto a doar sangue!`)
    }

}else{
    negativa()
}