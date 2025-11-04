const leia = require("readline-sync");

let num1 = leia.questionInt("Escreva o primeiro numero do intervalo: \n");
let num2 = leia.questionInt("Escreva o segundo número do intervalo: \n");

if (num1 > num2 || (num1 & num2) < 0) {
  console.log("\nIntervalo inválido!");
} else {
  console.clear();
  console.log(`No intervalo entre ${num1} e ${num2}:`);

  for (let i = num1; i <= num2; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      console.log(`\n${i} é múltiplo de 3 e de 5`);
    }
  }
}


