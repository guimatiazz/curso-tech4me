let listaDeNomes = [];

function cadastrarNome() {
    listaDeNomes.push(prompt("digite um nome:"));
}

function sortearNome() {
    const posicaoAleatoria = math.floor(Math.random() * listaDeNomes.length);

    const nomeSortado = listaDeNomes[posicaoAleatoria];

    alert(nomeSortado);

    listaDeNomes.splice(posicaoAleatoria, 1);
}

