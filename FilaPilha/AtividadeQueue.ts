import { Queue } from "./Queue";
import leia = require("readline-sync");

const fila = new Queue<string>();

console.log("*****************************************\n");
console.log(`1 - Adicionar Cliente na fila`);
console.log(`2 - Listar todos os Clientes`);
console.log(`3 - Retirar Cliente da fila`);
console.log(`0 - Sair`);
console.log("\n*****************************************\n");

let continuar: boolean = true;

while (continuar) {
  let opcao: number = leia.questionInt("Digite uma opção desejada: ");

  if(opcao === 0) {
    console.log("Programa finalizado!");
    break
  }else{
    switch (opcao) {
      case 1:
        let nome: string = leia.question("Digite um nome: ");
        fila.enqueue(nome);
        break;
      case 2:
        console.log("Lista de Clientes na fila");
        fila.printQueue();
        break;
      case 3:
        fila.dequeue();
        fila.printQueue();
        break;
      default:
        console.log("Escolha uma opção válida!");
    }
    continuar = leia.keyInYNStrict("Deseja realizar outra operação?")
  }
}
