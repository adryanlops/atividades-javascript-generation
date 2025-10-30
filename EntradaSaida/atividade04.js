const leia = require('readline-sync')

console.log("\nVeja a diferença do produto dos dois primeiros números e dos dois últimos números\n")

let num1, num2, num3, num4, diferenca

num1 = leia.questionFloat("Digite o primeiro número: ")
num2 = leia.questionFloat("Digite o segundo número: ")
num3 = leia.questionFloat("Digite o terceiro número: ")
num4 = leia.questionFloat("Digite o quarto número: ")

diferenca = (num1 * num2) - (num3 * num4)


console.log("\nA diferença entre a multiplicação dos dois primeiros números\n", 
            "E a multiplicação dois últimos números é igual a: ", diferenca )