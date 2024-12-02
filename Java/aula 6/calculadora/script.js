
    const elementoResultado = document.getElementById('resultado');
    let resultado;
    let operador;
    let valorA;
    
    
    function contabilizar(numero){
        resultado = elementoResultado.innerText;

        
    if (resultado == 0) {
        resultado = numero;
    } else {
        resultado += numero;
    }

    elementoResultado.innerText = resultado;
}

function zerar() {
    elementoResultado.innerText = 0;
    resultado = 0;
}

function calcular(operadorRecebido) {
    operador = operadorRecebido;
    valorA = resultado; 
    resultado = 0;
    zerar();

}

function subitrair(operadorRecebido) {
    operador = operadorRecebido;
    valorA = resultado; 
    resultado = 0;
    zerar();

}

function multiplicar(operadorRecebido) {
    operador = operadorRecebido;
    valorA = resultado; 
    resultado = 0;
    zerar();

}

function dividir(operadorRecebido) {
    operador = operadorRecebido;
    valorA = resultado; 
    resultado = 0;
    zerar();

}

function nmrVirgula(operadorRecebido) {
    elementoResultado.innerText +="."

}



function calcularResultado() {
   switch (operador) {
    case '+':
        resultado = parseFloat(valorA) + parseFloat(resultado);
        elementoResultado.innerText = resultado;
        break;
   case '-':
    resultado = parseFloat(valorA) - parseFloat(resultado);
    elementoResultado.innerText = resultado;
        break;
    case '*':
        resultado = parseFloat(valorA) * parseFloat(resultado);
        elementoResultado.innerText = resultado;
        break;
    case '/': resultado = parseFloat(valorA) / parseFloat(resultado);
        elementoResultado.innerText = resultado;
    default:
        break;
   }
}
