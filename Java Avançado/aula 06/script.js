class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

const produtos = [];

const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const formulario = document.getElementById("form");
const listaFinal = document.getElementById("listaFinal");

formulario.addEventListener('submit', (evento) => {
    if (nome.value == '' || preco.value == '' || quantidade.value == '') {
        evento.preventDefault();
        alert("É necessario que preencha os dados");
    } else {
        evento.preventDefault();
        const precoFinal = (parseFloat(preco.value) * parseFloat(quantidade.value)).toFixed(2);
        const produto = new Produto(nome.value, precoFinal, quantidade.value);
        produtos.push(produto);
        atualizarProdutos();
        formulario.reset();
    }
})

function atualizarProdutos(){
    listaFinal.innerText = '';
    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = 'remover';
        li.innerText = `${produto.nome} - ${produto.quantidade} unidades - R$${produto.preco}`; 
        li.appendChild(button);
        listaFinal.appendChild(li);

        button.addEventListener('click', () => removerProduto(index));

    })
}

function removerProduto(i) {
    produtos.splice(i, 1);
    atualizarProdutos();

}


