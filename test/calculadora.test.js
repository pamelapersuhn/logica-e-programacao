const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function() {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(30, 10);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(40);
    });

    it('A função deve ser capaz de somar um número positivo e negativo', function() {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -10);

        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(40);
    });

});