import leia = require("readline-sync");

const cores: Array<string> = []

let continuar: boolean = true; 

while(continuar){
    cores.push(leia.question("Insira uma cor: "))

    continuar = leia.keyInYNStrict("Deseja insirir mais uma cor?")
}

console.clear()
console.log("\nListar todas as cores: ")
for(let cor of cores){
    console.log(cor)
}

console.log("\n Ordenar as cores: ")
cores.sort()
for(let cor of cores){
    console.log(cor)
}