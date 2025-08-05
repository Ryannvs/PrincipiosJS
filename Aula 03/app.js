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

const { V4MAPPED } = require('dns')
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
                let taxaJuros = juros


                //entrada de dados para colocar as vezes que os juros são compostos por ano
                entradaDeDados.question('Digite o número de vezes que os juros são compostos (por ano): ', function (jurosAnos) {
                    let jurosAnual = jurosAnos

                    entradaDeDados.question('Digite a quantidade de meses: ', function (tempo) {
                        let tempoMeses = tempo

                        //Validação de tratamento de entrada vazia
                        if (capitalInicial == '' || taxaJuros == '' || jurosAnual == '' || tempoMeses == '' || nomeCliente == '' || nomeProduto == '') {
                            console.log(MESSAGE_ERROR_EMPTY)

                        } else if (!isNaN(nomeCliente)) {
                            console.log(MESSAGE_ERROR_NUMBERS_NOT_ALLOWED)

                        } else if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(jurosAnual) || isNaN(tempoMeses)) {
                            console.log(MESSAGE_ERROR_NOT_NUMBER)

                        }

                        function calcularJuros(valor1,valor2,valor3,valor4){
                            let capitalInicial = valor1
                            let taxaJuros = valor2
                            let jurosAnual = valor3
                            let tempoMeses = valor4

                        }
                    })
                })
            })
        })
    })
})