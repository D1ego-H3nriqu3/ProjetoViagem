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
        console.log("\n=== Tempo de Viagem ===\n")
        tempoViagem()
        break
        case("3"):
        console.log("\n=== Dividir Despesas ===\n")
        dividirDespesa()
        break
        case("4"):
        console.log("\n=== Conversão para dólar ===\n")
        conversaoR()
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
            return custoCombustivel()
        }
        let consumoCarro = Number(prompt("Consumo do carro (km por litro): "))
        if(isNaN(consumoCarro) || consumoCarro <= 0){
            console.log("\nDigite um valor correspondente\n")
            return custoCombustivel()
        }
        let precoLitro = Number(prompt("Preço do litro (R$): "))
        if(isNaN(precoLitro) || precoLitro <= 0){
            console.log("\nDigite um valor correspondente\n")
            return custoCombustivel()
        }

        let litros = distancia / consumoCarro
        let preco = litros * precoLitro

        console.log(`Custo estimado de combustível: R$ ${preco.toFixed(2)}`)
    }

    function tempoViagem(){
        let distancia = Number(prompt("Distância da viagem (km): "))
        if(isNaN(distancia) || distancia <= 0){
            console.log("\nDigite um valor correspondente\n")
            return tempoViagem()
        }
        let velocidadeM = Number(prompt("Velocidade média (km/h): "))
        if(isNaN(velocidadeM) || velocidadeM <= 0){
            console.log("\nDigite um valor correspondente\n")
            return tempoViagem()
        }

        let tempoEstimado = distancia / velocidadeM

        console.log(`Tempo estimado de viagem: ${tempoEstimado.toFixed(1)} Horas`)
    }

    function dividirDespesa(){
        let totalD = Number(prompt("Total de despesas (R$): "))
        if(isNaN(totalD) || totalD <= 0){
            console.log("\nDigite um valor correspondente\n")
            return dividirDespesa()
        }
        let numPessoas = Number(prompt("Número de pessoas: "))
        numPessoas = parseInt(numPessoas)
        if(isNaN(numPessoas) || numPessoas <= 0){
            console.log("\nDigite um valor correspondente\n")
            return dividirDespesa()
        }

        let quantia = totalD / numPessoas

        console.log(`Cada pessoa paga: R$ ${quantia.toFixed(2)}`)
    }

    function conversaoR(){
        let valor = Number(prompt("Valor em reais (R$): "))
        if(isNaN(valor) || valor <= 0){
            console.log("\nDigite um valor correspondente\n")
            return conversaoR()
        }
        let dolar = Number(prompt("Cotação do dólar (R$): "))
        if(isNaN(dolar) || dolar <= 0){
            console.log("\nDigite um valor correspondente\n")
            return conversaoR()
        }

        let cotacao = valor / dolar

        console.log(`R$ ${valor} equivalem a US$ ${cotacao.toFixed(2)}`)
    }