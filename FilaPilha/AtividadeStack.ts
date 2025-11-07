import { Stack } from "./Stack";
import leia = require("readline-sync");
const pilha = new Stack<string>();

console.log("*****************************************\n");
console.log(`1 - Adicionar Livro na pilha`);
console.log(`2 - Listar todos os Livros`);
console.log(`3 - Retirar Livro da pilha`);
console.log(`0 - Sair`);
console.log("\n*****************************************\n");

let continuar: boolean = true;

while (continuar) {
  let opcao: number = leia.questionInt("Digite uma opção desejada: ");

  if (opcao === 0) {
    console.log("Programa finalizado!");
    break;
  } else {
    switch (opcao) {
      case 1:
        let nome: string = leia.question("Digite um nome: ");
        pilha.push(nome);
        break;
      case 2:
        console.log("Lista de Livros na pilha");
        pilha.printStack();
        break;
      case 3:
        pilha.pop();
        console.log("Livro removido");
        pilha.printStack();
        break;
      default:
        console.log("Escolha uma opção válida!");
    }
  }
}
