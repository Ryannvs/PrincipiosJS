/**********************************************************************************
 * Objetivo: Arquivo responsável por mostrar a mensagem final ao cliente
 * Autor: Marcos Ryan
 * Data: 08/08/2025
 * Versão: 1.0
 ***********************************************************************************/

function mensagemCliente(nomeCliente, nomeProduto, capitalInicial, tempoMeses, montanteFinal) {
    console.log(`******************* [Viva Moda] *******************
Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
A compra do produto ${nomeProduto}, tem um valor de: R$ ${capitalInicial}.
A sua compra será parcelada em ${tempoMeses} vezes e o Sr(a) pagará: R$ ${montanteFinal}
Muito obrigado por escolher a [Viva Moda].
*******************************************************`)
}

module.exports = {
    mensagemCliente
}