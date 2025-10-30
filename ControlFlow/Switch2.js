const leia = require('readline-sync')

console.log("\nVamos calcular o novo salário!")
let nome = leia.question("\nDigite aqui o Nome do Colaborador: ")

console.log("\nAgora selecione o código do seu cargo:\n")
console.log("| 1 ) - Gerente")
console.log("| 2 ) - Vendedor")
console.log("| 3 ) - Supervisor")
console.log("| 4 ) - Motorista")
console.log("| 5 ) - Estoquista")
console.log("| 6 ) - Técnico em TI")

let codigo = leia.questionInt()
let salarioAntigo, novoSalario, reajuste, cargo

switch (codigo){
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        salarioAntigo = leia.questionFloat("\nDigite o Salario Atual: ")
        novoSalario = salarioAntigo + (reajuste * salarioAntigo)
        break
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        salarioAntigo = leia.questionFloat("\nDigite o Salario Atual: ")
        novoSalario = salarioAntigo + (reajuste * salarioAntigo)
        break
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        salarioAntigo = leia.questionFloat("\nDigite o Salario Atual: ")
        novoSalario = salarioAntigo + (reajuste * salarioAntigo)
        break
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        salarioAntigo = leia.questionFloat("\nDigite o Salario Atual: ")
        novoSalario = salarioAntigo + (reajuste * salarioAntigo)
        break
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        salarioAntigo = leia.questionFloat("\nDigite o Salario Atual: ")
        novoSalario = salarioAntigo + (reajuste * salarioAntigo)
        break
    case 6:
        cargo = "Técnico do TI"
        reajuste = 0.08
        salarioAntigo = leia.questionFloat("\nDigite o Salario Atual: ")
        novoSalario = salarioAntigo + (reajuste * salarioAntigo)
        break
    default: 
        console.log("Selecione um dos 6 código válidos acima!")
}

console.log(`\nNome do Colaborador: ${nome}`)
console.log(`Cargo: ${cargo}`)
console.log(`Salário Reajustado: ${novoSalario}\n`)