class Produto{
    constructor(nome, codigo, categoria, precoBase){
        this.nome = nome;
        this.codigo = codigo;
        this.categoria = categoria;
        this. precoBase = precoBase;
        this.precoFinal = this.calcularPrecoFinal(precoBase, categoria);
    }

    // nome que vai ser armazenado
    calcularPrecoFinal = (precoBase, categoria) => {
        let taxaImposto
        if (categoria == "Eletrônico") {
            taxaImposto = 0.18;
        } else {
            taxaImposto = 0.12;
        }

        return precoBase + (precoBase * taxaImposto);
    }

}


const produtos = [];

// const produto1 = new Produto("Smartfone", "001", "Eletrônico", 2000.00);
// const produto2 = new Produto("Cadeiro Gamer", "002", "Móveis", 1000.00);
// const produto3 = new Produto("Mesa de computador", "003", "Móveis", 1500.00);

// produtos.push(produto1);
// produtos.push(produto2);
// produtos.push(produto3);

// produtos.forEach((produto) => {
//     console.log(`Nome: ${produto.nome}, preço base: ${produto.precoBase}, Preço Final: ${produto.precoFinal}`)
// });

function cadastrarProduto(){
    if (nome == '' || codigoProduto == '' || categoria == '' || precoBase == '') {
        alert('preencha todos os campos!');
    } else {
        const produto = new Produto(nome.value, codigoProduto.value, categoria.value, parseFloat(precoBase.value))
    }
}