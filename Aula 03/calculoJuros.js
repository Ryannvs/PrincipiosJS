/**********************************************************************************
 * Objetivo: Arquivo responsável por calcular os juros compostos
 * Autor: Marcos Ryan
 * Data: 08/08/2025
 * Versão: 1.0
 ***********************************************************************************/

function calcularJuros(valor1, valor2, valor3, valor4) {
    let capitalInicial = valor1
    let taxaJuros = valor2
    let jurosAnual = valor3
    let tempoMeses = valor4

    let montanteFinal = capitalInicial * (1 + taxaJuros / jurosAnual) ^ jurosAnual * tempoMeses
    return Number (montanteFinal).toFixed (2)

}

module.exports = {
    calcularJuros
}