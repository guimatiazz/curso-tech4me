let aluno = {
            id:"1",
            nome: "granito",
            media: 8,
            status: "aprovado",
}


const requisicaoGet = async () => {
    let response = await fetch("http://localhost:3000/alunos");
    listaDeAlunos = await response.json();

 
    console.log(response);
    console.log(listaAlunos);
}