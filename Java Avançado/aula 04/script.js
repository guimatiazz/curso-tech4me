const carros = ["Nivus", "Sandeiro", "Clio",  "Palio", "Sandeiro", "Palio", "Palio"];

let carroPedro = "palio";

let novoCarroPedro = "bmw";

for (const carro of carros) {
    if (carro == carroPedro) {
        carro[2] = novoCarroPedro;
        let index = carros.indexOf(carro);
        carros[index] = novoCarroPedro
    }
    
}

for (const carro of carros) {
    console.log(carro);
}

const novaLista  = carros.map((carro) => "Carro: " + carro);

novaLista.forEach(carro => console.log(carro));

const novaListaFiltrada = carros.filter(carro => console.log(carro))

