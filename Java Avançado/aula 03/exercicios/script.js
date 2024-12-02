//classe Carro(marca, modelo, ano, valorCompra, valorAtual, cor);

class Carro {
    constructor (marca, modelo, ano, valorCompra, valorAtual, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valorCompra = parseFloat(valorCompra);
        this.valorAtual = parseFloat(valorAtual);
        this.cor = cor;
        this.lucroLoja = parseFloat( this.caucularLucro());
        this.ipva =  parseFloat(this.caucularIPVA());
        this.licenciamento = parseFloat(this.caucularLicenciamento()); 
    }

    caucularLucro = () => this.valorCompra * 0.03;

    caucularIPVA = () => this.valorAtual * 0.04;

    caucularLicenciamento = () => {
        const data = new Date();
        const anoAtual = data.getFullYear();

        if (this.ano >= (anoAtual - 10)) {
            return 160.0; 
        } else {
            return 0.00;
        }
    }

    toString() {
        return `Veículo: ${this.marca} ${this.modelo} (${this.ano})\n` +
               `Cor: ${this.cor}\n` +
               `Valor de Compra: R$ ${this.valorCompra.toFixed(2)}\n` +
               `Valor Atual: R$ ${this.valorAtual.toFixed(2)}\n` +
               `Lucro da Loja: R$ ${this.lucroLoja.toFixed(2)}\n` +
               `IPVA: R$ ${this.ipva.toFixed(2)}\n` +
               `Licenciamento: R$ ${this.licenciamento.toFixed(2)}`;
    }

}

// Criando instâncias da classe Veiculo
const carros = [ 
];
 



function exibirCadastro(){
    carros.forEach(carro => alert("\n" + carro.toString()));

                               
}

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const ano = document.getElementById("valorCompra")
const valorAtual = document.getElementById("valorAtual");
const cor = document.getElementById("cor");

function cadastro(){
    const carro = new Carro (marca.value , modelo.value , ano.value , valorCompra.value , valorAtual.value , cor.value);
    carros.push(carro);
}