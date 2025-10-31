const leia = require("readline-sync")

let continuar = true
let idade = 0;
let mulheres =0 ;
let homens = 0;
let noBinario = 0;
let media, soma 

let idGen = ["","Mulher Cis", "Homem Cis", "Não Binário", "Mulher Trans", "Homen Trans", "Outros"]
let dev = ["", "Backend", "Frontend", "Mobile", "FullStack"]

while(continuar){ 
    idade = leia.questionInt("Idade: ")
    
    leia.keyInSelect(idGen)
}