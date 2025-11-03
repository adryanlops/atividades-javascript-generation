import leia = require("readline-sync");

const setNumero: Set<number> = new Set()

let continuar: boolean = true; 

while(continuar){
    let numero: number = leia.questionInt("Insira um número: ")
    setNumero.add(numero)

    continuar = leia.keyInYNStrict("Deseja insirir mais um número?")
}

console.clear()
console.log(`\n Você inseriu ${setNumero.size} valores!`)
console.log(`\n Listar dados do Set:`)
for(let numero of setNumero){
    console.log(numero)
}
