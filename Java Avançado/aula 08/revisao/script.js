const nome = document.getAnimations("nome");
const idade = document.getElementById("idade");
const cpf = docuemnt.getElementById("cpf");
const form  = document.getElementById("form");

class Pessoa {
    constructor (nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cf;
    }
    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        const cpfPadrao = /^[0-9]{3}.[0-9]{3}.[0.9]{3}.[0-9]{2}$/;
        return cpfPadrao.test(cpf) ? (this._cpf = cpf, alert(`${this.nome} - ${this.idade} - ${this.cpf}`)) : alert("cpf invalido!");      
    }
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (nome.value == '' || idade.value == ) {
        
    } else {
        
    }
})




