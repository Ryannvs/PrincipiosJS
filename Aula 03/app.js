/********************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Viva
   Moda que calcule os juros compostos por ano de uma venda parcelada
 * Autor: Marcos Ryan
 * Data: 05/08/2025
 * Versão: 1.0
 ********************************************************************/

const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NUMBERS_NOT_ALLOWED = 'ERRO: Não pode ter números no nome.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO:Não é possível calcular com a entrada de letras.'

//import calculo de juros
var calculo = require('./calculoJuros')

//import da mensagem para o cliente
var mensagemCliente = require('./messageClient')

//import da biblioteca da readline
var readline = require('readline')

//Criando um objeto para entrada e saída de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados para o nome do cliente
entradaDeDados.question('Digite seu nome: ', function (nome) {
    let nomeCliente = String(nome).toUpperCase()

    //entrada de dados para o nome do produto
    entradaDeDados.question('Digite o nome do produto: ', function (produto) {
        let nomeProduto = String(produto).toUpperCase()


        //entrada de dados para o inserir a capital inicial
        entradaDeDados.question('Digite a capital inicial: ', function (capital) {
            let capitalInicial = capital


            //entrada de dados para colocar a taxa de juros anual
            entradaDeDados.question('Digite a taxa de juros anual: ', function (juros) {
                let taxaJuros = parseFloat(juros)/100


                //entrada de dados para colocar as vezes que os juros são compostos por ano
                entradaDeDados.question('Digite o número de vezes que os juros são compostos (por ano): ', function (jurosAnos) {
                    let jurosAnual = jurosAnos

                    //entrada de dados para colocar as quantidade de meses parcelados
                    entradaDeDados.question('Digite a quantidade de meses: ', function (tempo) {
                        let tempoMeses = tempo

                        //Validação de tratamento de entrada vazia
                        if (capitalInicial == '' || taxaJuros == '' || jurosAnual == '' || tempoMeses == '' || nomeCliente == '' || nomeProduto == '') {
                            console.log(MESSAGE_ERROR_EMPTY)
                        
                        //Validação de tratamento de entrada para número invés de letra    
                        } else if (!isNaN(nomeCliente)) {
                            console.log(MESSAGE_ERROR_NUMBERS_NOT_ALLOWED)

                        //Validação de tratamento de entrada com letra invés de número    
                        } else if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(jurosAnual) || isNaN(tempoMeses)) {
                            console.log(MESSAGE_ERROR_NOT_NUMBER)
                        
                        //Fazendo o import do cálculo e mensagem do cliente para aparecer ao final da entrada de dados
                        } else {

                        
                            let montanteFinal = calculo.calcularJuros(capitalInicial, taxaJuros, jurosAnual, tempoMeses)
                            mensagemCliente.mensagemCliente(nomeCliente, nomeProduto, capitalInicial, tempoMeses, montanteFinal)

                            entradaDeDados.close()


                        }
                    })
                })
            })
        })
    })
})