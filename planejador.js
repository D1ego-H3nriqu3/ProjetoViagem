import PromptSync from "prompt-sync";
const prompt = PromptSync()

let indice = true

do{
    console.log(`\n=== Planejador de Viagem ===\n
1. Custo de combustível
2. Tempo de viagem
3. Dividir despesas
4. Converter reais para dólares
0. Sair `)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case("1"):

        break
        case("2"):

        break
        case("3"):

        break
        case("4"):

        break
        case("0"):

        break
        default:
            console.log("\nDigite uma opção correspondente!")
    }
}while(indice === true)