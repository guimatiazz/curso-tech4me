class Player{
    constructor(nome, posicao, imagem){
        this.nome = nome;
        this.posicao = posicao,
        this.imagem = imagem   
    }
}
const players = [];

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const posicao = document.getElementById('posicao').value;
    const imagem = document.getElementById('imagem').value;

    const jogador = new Player(nome, posicao, imagens)

    players.push(jogador);

    document.getElementById("playerForm").reset();
}

function exibir() {
    const exibirPosicao = document.getElementById("exibirPosicao").value;

    const playersFiltrados = [];

    for (let i =0; i < players.length; i++) {
        const jogador = players[i];
        if (jogador.posicao == exibirPosicao) [
            playersFiltrados.push(jogador);
        ]

    }

    for (let i = 0; i < playersFiltrados.length; i++); {
        const player = playersFiltrados[i]; 

        
    }

}