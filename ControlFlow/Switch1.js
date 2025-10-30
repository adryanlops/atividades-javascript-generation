const leia = require('readline-sync')

console.log("\n#################################")
console.log("\n------------ MENU ---------------")
console.log("\n#################################")
console.log("\nFaça a escolah de seu pedido!")
console.log(`\n| 1) - Cachorro Quente - R$ 10.00`)
console.log("\n| 2) - X-Salada - R$ 15.00")
console.log("\n| 3) - X-Bacon - R$ 18.00")
console.log("\n| 4) - Bauru - R$ 12.00")
console.log("\n| 5) - Refigerante - R$ 8.00")
console.log("\n| 6) - Suco de Laranja - R$ 13.00")

let opcao = leia.questionInt("\n")
let quantidade, total

switch(opcao){
    case 1:
        console.log("\nVocê selecionou Cachorro Quente, escolha a quantidade:\n")
        quantidade = leia.questionInt()
        total = quantidade * 10.00
        break
    case 2:
        console.log("\nVocê selecionou X-Salada, escolha a quantidade:\n")
        quantidade = leia.questionInt()
        total = quantidade * 15.00 
        break
    case 3:
        console.log("\nVocê selecionou X-Bacon, escolha a quantidade:\n")
        quantidade = leia.questionInt()
        total = quantidade * 18.00 
        break
    case 4:
        console.log("\nVocê selecionou Bauru, escolha a quantidade:\n")
        quantidade = leia.questionInt()
        total = quantidade * 12.00 
        break
    case 5:
        console.log("\nVocê selecionou Refrigerante, escolha a quantidade:\n")
        quantidade = leia.questionInt()
        total = quantidade * 8.00 
        break
    case 6:
        console.log("\nVocê selecionou Suco de Laranja, escolha a quantidade:\n")
        quantidade = leia.questionInt()
        total = quantidade * 13.00 
    default:
        console.log("Selecione uma opção válida!")
}


console.log(`\nO valor total do seu pedido é: R$ ${total.toFixed(2)}`)