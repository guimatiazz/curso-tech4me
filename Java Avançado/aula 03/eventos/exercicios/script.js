class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}
const alunos = [];
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-alunos")

const cadatrarAluno = () =>{
    const nome = document.getElementById("nome").value;
    const nota = docuemnt.getElementById("nota").value;
    const aluno = new Aluno(nome.toUppercase(), nota);

    aluno.push(aluno);

}

const adicionarNaLista = () => {
    const li = document.createElement("li");
    li.innerText = ``
}