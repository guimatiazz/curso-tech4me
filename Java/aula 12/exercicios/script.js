let alunosCadastrados = [];

function cadastrar() {
    let aluno = prompt("Digite o  nome do aluno");

    alunos.push(aluno);
}

function mostrarAlunos() {
    alert(`Seu alunos são: ${alunosCadastrados.join(',')}`);

}

