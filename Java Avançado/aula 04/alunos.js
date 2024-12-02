class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [new Aluno("Matias", 8.0),
                new Aluno("Leo", 8.1),
                new Aluno("Arthur", 9.5),
                new Aluno("Pedro", 6.0),
                
];

const novaLista = alunos.filter(aluno => aluno.nota < 7);

novaLista.forEach(aluno => console.log(aluno));

console.log("lista não ordenada:");
alunos.forEach(aluno => console.log(aluno));

// const alunosOrdenadosPorNome = alunos.sort((aluno1, alunos2) => {
//     if (aluno1.nome > alunos2.nome){
//         return 1;
//     } else {
//         return -1;
//     }
    
// })

console.log("lista em ordem alfabetica:");

const alunosOrdenadosPorNome = alunos.sort((aluno1, aluno2) => aluno1.nome.localeCompare(aluno2.nome));

alunosOrdenadosPorNome.forEach(aluno => console.log(aluno));

console.log("lista da maior para menor nota:");

const alunosOrdenadosPelaNota = alunos.sort((aluno1, aluno2) => aluno2.nota - aluno1.nota);

const somaDasMedias = alunos.reduce((acumulador, aluno) => (acumulador + aluno.nota), 0);

const mediaDaTurma = somaDasMedias / alunos.length;

console.log(`a média da turma é de: ${mediaDaTurma}`);