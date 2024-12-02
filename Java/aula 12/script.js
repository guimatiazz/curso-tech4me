let alunos = ["Leo", "Davi","Matias"];

let index = alunos.indexOf("Leo");

console.log(index);

if (index != -1) {
    console.log(`encontrei o ${alunos[index]}`)
} else {
    console.log("Não encontrei");
}

alunos.push("Arthur");
alunos.push("Fabio");
alunos.push("Pedro");
alunos.push("Matheus");

console.log(`lista de alunos: ${alunos}`);

let alunosPresentes = []

alunos.sort();

for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const estaPresente = confirm(`${aluno} esta presente?`)

    if (estaPresente) {
        alunosPresentes.push(aluno);
    }

}

console.log(`Alunos presentes: ${alunosPresentes}`);

const texto = "Leo, Davi, Matias";

let novaLista = texto.slipt(", ");

console.log(novaLista);

let grupoA = ["Matheus", "Matias", "Pedro", "Davi"];
let grupoB = ["Leo", "Arthur", "Fabio"];

let turma = grupoA.concat(grupoB)

let novaTurma = turma.slice(0,3);

console.log(novaTurma);

turma.slice(1, 3);



