/****************************************************************************************************************
 * Objetivo: Realizar o cálculo de média escolares, trabalhando com entrada de dados, variáveis, e condicionais
 * Autor: Marcos Ryan 
 * Data: 01/08/2025
 * Versão: 1.0 
 * **************************************************************************************************************/

/*** 
 * Formas de criar variáveis
 * LET -> Permite criar um espaço em memória (variável), deve-se obrigatoriamente utilizar apenas dentro de um bloco
 *        (IF, LOOP, function, etc.). Essa variável nasce e morre dentro desse bloco
 * VAR -> Permite criar um espaço de memória (variável), porém é um método mais antigo do JS, quase não se utiliza mais 
 *        em projetos
 * CONST -> Permite criar um espaço em memória (constante), cujo conteúdo não sofre mudança durante o programa.
 *          Podemos criar uma const em qualquer parte do código. OBS: Recomenda-se que a escrita de uma CONST seja em 
 *          MAIUSCULO
 * 
 * 
 * Formas de conversão de dados
 * STIRNG() -> Permite converter um objeto ou variável em string
 * Number() -> Permite converter um objeto ou variável em número (inteiro ou float)
 * parseInt() -> Permite converter um objeto ou variável em inteiro
 * parseFloat() -> Permite converter um objeto ou variável em decimal
 * Boolean () -> Permite converter um objeto valor em booleano (true/false)
 * Object () -> Permite converter um objeto ou variável em objeto (ARRAY, JSON, CLASS)
 * 
 * toUpperCase() -> converte uma string para MAISCULO
 * toLowerCase() -> converte uma string para minusculo
 * 
 * toFixed() -> Permite limitar a quantidade de casas decimais
 * 
 * Opereadores de comparação
 * 
 * == -> Validação de igualdade entre conteúdos
 * > -> Validação de maior valor
 * < -> Validação de menor valor
 * >= -> Validação de maior valor ou igualdade
 * <= -> Validação de menor valor ou igualdade
 * != -> Validação de diferença entre conteúdos
 * === -> Validação de igualdade em conteúdo e igualdade nos tipos de dados
 * !== -> Validação de diferemça entre conteúdos e igualdade nos tipos de dados 
 *        (Sempre verificar a documentação da linguagem)
 * !=! -> Validação de diferemça entre conteúdos e diferença nos tipos de dados 
 *        (Sempre verificar a documentação da linguagem)
 * 
 * Operadores lógicos
 * E    AND     &&
 * OU   OR      ||
 * Não  NOT     !
 * 
 * 
 * 
 ***/
//import da biblioteca da readline
var readline = require('readline')

//Criando um objeto para entrada e saída de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function (nome) {
    //Recebe o callback e converte para MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()

    //entrada de dados da nota1
    entradaDeDados.question('Digite a nota1:', function (valor1) {
        let nota1 = valor1

        //entrada de dados da nota2
        entradaDeDados.question('Digite a nota2:', function (valor2) {
            let nota2 = valor2

            //entrada de dados da nota3
            entradaDeDados.question('Digite a nota3:', function (valor3) {
                let nota3 = valor3

                //entrada de dados da nota4
                entradaDeDados.question('Digite a nota4:', function (valor4) {
                    let nota4 = valor4

                    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == '') {

                        console.log('ERRO: Existem campos que não foram preenchidos.')

                    } else if (!isNaN(nomeAluno)) {
                        console.log('ERRO: Não pode ter números no nome')

                    }else if (isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                        console.log('ERRO:Não é possível calcular com a entrada de letras')

                    } else if (Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10) {
                        console.log('ERRO: Os valores informados precisam ser entre 0 até 10')
                        
                    } else {
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

                        let statusAluno

                        if (media < 5) {
                            statusAluno = 'REPROVADO'
                        } else if (media < 7 && media >= 5) {
                            statusAluno = ' EM EXAME'
                        } else if (media >= 7 && media <= 10) {
                            statusAluno = 'APROVADO'
                        }
                        console.log(`O aluno(a) ${nomeAluno} teve a média: ${media.toFixed(1)} e está: ${statusAluno}`)

                        entradaDeDados.close()
                    }
                })
            })
        })
    })
})