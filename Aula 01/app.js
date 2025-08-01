/******************************************************************
 * Objetivo: Iniciar os primeiros comandos em Node.JS
 * Autor: Ryan
 * Data: 29/07/2025
 * Versão: 1.0
 * **************************************************************** */

/* Comentário em bloco */
//Comentário em linha

//Import da biblioteca para fazer entrada de dados via terminal
//(Iremos utilizar ela de forma provisória)
var readline = require('readline')

//Criando um objeto de entradaDdeDados para captar o printar dados via terminal
    var entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    entradaDeDados.question('Digite seu nome:', function(nome){
        var nomeUsuario = nome

        if(nomeUsuario == ''){
            console.log('Não foi possível processar a solicitação')
        }else{
        //String() -> Converte um objeto em String
        //toUpperCase() - Converte o conteudo de uma string em MAIUSCULO
        console.log('O nome digitado foi: ' + String(nomeUsuario).toUpperCase()) 
        }
        entradaDeDados.close()
    })

/*
console.log('Aula 01 de Node.JS')

//Declarando uma variável
var nome = 'Ryan'

//Exemplo de concatenação de dados (símbolo de (+))
console.log('O nome digitado foi ' + nome)

//Exemplo de concatenação de método reduzido
console.log(`O nome digitado foi ${nome}`)

//typeof -> permite mostrar o tipo de dados de um objeto ou variável
console.log(typeof(nome))*/