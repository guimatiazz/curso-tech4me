class Aluno {
    constructor(nome, nota, turma){
        this.nome = nome;
        this.nota = nota;
        this.turma = turma;
    }
}

const alunos = [new Aluno("Matias", 8.0, "A"),
                new Aluno("Leo", 8.1, "B"),
                new Aluno("Arthur", 9.5, "A"),
                new Aluno("Pedro", 6.0, "C"),
];

const novaLista = alunos.filter(aluno => aluno.nota >= 7 && aluno.turma == "A");

console.log("alunos da turma A com nota maoir ou igual a 7:");

novaLista.forEach(aluno => console.log(aluno)); 

const aluno = alunos.find(aluno => aluno.nome == "Matias");

console.log("Aluno filtrado:");
    
console.log(aluno);