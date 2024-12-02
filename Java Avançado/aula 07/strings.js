const textto = `Isso é um texto que permite inserção de expressões`;

const soma = `Soma: ${10 + 10}`;

console.log(soma);

const data = new Date();

const hora = `Tenha uma boa ${verificarHora()}`;

function verificarHora(){
    if (data.getHours < 18) {
        return "tarde!";   
    } else {
        return "noite!";
    }
}

console.log(cumprimento);

