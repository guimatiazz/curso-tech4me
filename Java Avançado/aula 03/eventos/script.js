const botao = document.getElementById("botao");

// botao.onclick = () => alert("Mensagem enviada");

botao.addEventListener("click", () => alert("Mensagem enviada")
);

const nomes = [] 

const adicionarNomes =() => nomes.push(document.getElementById("nome").value);

const formulario = document.getElementById("meuFormulario");

const botaoExbir = document.getElementById("exibir");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    adicionarNomes();
    formulario.reset();
    nome.focus();
    alert("Nome cadasttro!")
})

botaoExbir.addEventListener("click", () => alert(nomes.join(", ")));
