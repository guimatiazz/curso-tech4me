class Usuario {
    constructor (nome, sobrenome, email, senha){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
    }
}

const form = document.getElementById("form");

const cadastrar = () => {
    const nome = docuent.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    if (confirmarSenha != senha) {
        alert("Senhas não correpondem");
        return
    } else {
        
    }

    new usuario = new Usuario(nome, sobrenome, email, senha);

    const ususario = new Usuario (nome,sobrenome, email, senha);

    ususario.push(usuario);

}

form.addEventListener("submit", (evento)=> {
    evento.defaultPrevented()
    cadastrar()
});

const usuarios = [];

const buttonExibir = document.getElementById("Exibir");

buttonExibir.addEventListener("click", () => {
    usuarios.forEach(usuario => {
        alert(`${usuario.nome} ${usuario.sobrenome} - ${usuario.email} - ${usuario.senha}`);
    })
})

