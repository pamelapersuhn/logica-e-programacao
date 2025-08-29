function somarDoisNumeros(valor1, valor2){      
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumero(valor1, valor2){
    const resultadoSomaDoisValores = somarDoisNumeros(valor1, valor2);

    const resultadoDaMediaDeDoisValores = resultadoSomaDoisValores / 2;

    return resultadoDaMediaDeDoisValores;

}

module.exports = {somarDoisNumeros}