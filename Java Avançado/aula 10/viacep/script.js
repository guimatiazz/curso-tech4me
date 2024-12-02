class Endereco {
    constructor(cep, rua, complemento, estado, cidade, bairro) {
        this.cep = cep;
        this.rua = rua;
        this.complemento = complemento;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
    }
    exibirDados(){
        return`Bairro: ${this.bairro}
        Rua: ${this.rua}, Cidade: ${this.cidade}`;

    }
}

const url = "https://viacep.com.br/ws/25960-520/json/";

fetch(url) //buscar -> retorna uma promise

.then(response => response.json())

.then(endereco => criarEndereco(endereco));

const criarEndereco = (endereco) =>{
    const novoEndereco =  new Endereco(endereco.cep, endereco.logradouro, endereco.complemento,endereco.uf , endereco.localidade, endereco.bairro)
    alert(novoEndereco.exibirDados());
}