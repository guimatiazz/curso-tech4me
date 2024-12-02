const alunos = [];
const listaDeAlunos = document.getElementById("lista-de-alunos");

class Aluno{
    constructor(nome, idade, matricula){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    identificar(){
        return `nome:${this.nome} idade:${this.idade} matricula:${this.matricula}`;
    }
}

function cadastrarAluno() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let matricula = document.getElementById('matricula').value;

    let aluno = new Aluno(nome, idade, matricula);

    alunos.push(aluno);
}

function exibirAlunos(){
    for(let i = 0; i < alunos.length; i++ ){
        let li = document.createElement("li");
        li.innerText = alunos[i].identificar();
        listaDeAlunos.appendChild(li);
        //listaDeAlunos.innerHTML = `<li>${alunos[i].identificar()}</li>`;

    }

}