var nome = "matias";

function name(params) {
    nome = "outro nome";

    var outroNome = "arthut";
}

class Pizza{
    constructor(tamanho, sabor, valor){
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.valor = valor;
    }

    get tamanho(){
        return this._tamanho;
    }

    set tamanho(novoTamanho){
        if (novoTamanho == "P" || novoTamanho == "m" || novoTamanho == "g"){
            this._tamanho = tamanho;
        } else {
            console.log("tamnho inválido");
        }
    }

    descricao(){
        return`Pizza Sabor: ${this.sabor}, tamanho: ${this.tamanho}, valor: ${this.valor}`
    }

}

const pizza = new Pizza ("p", "frago com catupiry", 39.80)

console.log(pizza.descricao());

const outraPizza = new Pizza("GG", "calabresa", 39.80);

const objetoPizza = {
    tamanho: "GG",
    sabor: "calabresa", 
    valor: 38.80
}

const textoJson = JSON.stringify(objetoPizza);

const texto = '{"tamanho":"GG", "sabor": "calabresa","valor":38.8}';

const novoObjeto = JSON.parse(texto);

const novaPizza = new Pizza(novoObjeto.tamanho, novoObjeto.sabor)
