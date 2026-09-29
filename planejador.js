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
        console.log("\n=== Custo de Combustível ===\n")
        custoCombustivel()
        break
        case("2"):

        break
        case("3"):

        break
        case("4"):

        break
        case("0"):
        sairSistema()
        break
        default:
            console.log("\nDigite uma opção correspondente!")
    }
}while(indice === true)

    function sairSistema(){
        console.log("\n...Saindo do sistema...\n")
        indice = false
    }

    function custoCombustivel(){
        let distancia = Number(prompt("Distância da viagem (km): "))
        if(isNaN(distancia) || distancia <= 0){
            console.log("\nDigite um valor correspondente\n")
            custoCombustivel()
        }
        let consumoCarro = Number(prompt("Consumo do carro (km por litro): "))
        if(isNaN(consumoCarro) || consumoCarro <= 0){
            console.log("\nDigite um valor correspondente\n")
            custoCombustivel()
        }
        let precoLitro = Number(prompt("Preço do litro (R$): "))
        if(isNaN(precoLitro) || precoLitro <= 0){
            console.log("\nDigite um valor correspondente\n")
            custoCombustivel()
        }

        let litros = distancia / consumoCarro
        let preco = litros * precoLitro

        console.log(`Custo estimado de combustível: R$ ${preco.toFixed(2)}`)
    }