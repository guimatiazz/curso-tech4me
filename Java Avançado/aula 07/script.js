class Carro {
    constructor(modelo, ano, placa){
        this.modelo = modelo;
        this.ano = ano;
        this.placa = placa;
        this.estado = this.verificarEstado();
    }
}

verificarEstado = () => {
    const data = new Date();
    return (this.ano >= (data.getFullYear() - 2) ? "Seminovo" : "Usado");
}

const carro = new Carro("palio", 2010, "ABC1234");

console.log(carro);