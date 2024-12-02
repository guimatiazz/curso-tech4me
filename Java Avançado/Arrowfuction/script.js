class Carro{
    constructor(marca, modelo, placa, cor, ano){
        this.marca = marca
        this.modelo = modelo
        this.placa = placa
        this.cor = cor
        this.ano = ano
    }
}

const carros = [];

carros.push(new Carro("Porche","911","mts-0711","cinza",2023));
carros.push(new Carro("Voltkswagen","nivus","mts-1107","preto",2022));
carros.push(new Carro("","","","",));
carros.push(new Carro("","","","",));
carros.push(new Carro("","","","",));