const leia = require('readline-sync')

console.log("Descreva se seu animal é:")
console.log("\nVertebrado ou Invertebrado")
let vertebrado = leia.question()

let tipo, alimentacao

if(vertebrado === "Vertebrado"){

    console.log("\nAve ou Mamífero")
    tipo = leia.question()

    if(tipo === "Ave"){

        console.log("\nCarnívoro ou Onívoro")
        alimentacao = leia.question()

        if(alimentacao === "Carnívoro"){
            console.log("\nSeu animal descrito é: Águia!")
        } else if(alimentacao === "Onívoro"){
            console.log("\nSeu animal descrito é: Pomba!")
        }else{
            console.log("Você digitou errado sua opção, tente de novo!")
        }
    } else if(tipo === "Mamífero"){

        console.log("\nOnívoro ou Herbívoro")
        alimentacao = leia.question()

        if(alimentacao === "Onívoro"){
            console.log("\nSeu animal descrito é: Homem!")
        } else if(alimentacao ==="Herbívoro"){
            console.log("\nSeu animal descrito é: Vaca!")
        }else{
            console.log("Você digitou errado sua opção, tente de novo!")
        }
    }else{
        console.log("Você digitou errado sua opção, tente de novo!")
    }
}else if(vertebrado === "Invertebrado"){

    console.log("\nInseto ou Analídeo")
    tipo = leia.question()

    if(tipo === "Inseto"){

        console.log("\nHematófago ou Herbívoro")
        alimentacao = leia.question()

        if(alimentacao === "Hematófago"){
            console.log("\nSeu animal descrito é: Pulga!")
        } else if(alimentacao === "Herbívoro"){
            console.log("\nSeu animal descrito é: Lagarta!")
        } else{
            console.log("Você digitou errado sua opção, tente de novo!")
        }
    } else if(tipo === "Analídeo"){

        console.log("\nHematófago ou Onívoro")
        alimentacao = leia.question()

        if(alimentacao === "Hematófago"){
            console.log("\nSeu animal descrito é: Sanguessuga!")
        }else if(alimentacao === "Onívoro"){
            console.log("\nSeu animal descrito é: Minhoca!")
        } else{
            console.log("Você digitou errado sua opção, tente de novo!")
        }
    }else{
        console.log("Você digitou errado sua opção, tente de novo!")
    }

} else{
    console.log("Você digitou errado sua opção, tente de novo!")
}