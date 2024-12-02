function verificarTipo(tipo){
    return typeof tipo
}

var nome = "guilherme"
var idade = 17

console.log(verificarTipo(nome))
console.log(verificarTipo(idade))

var texto = "Hoje tem mengão"

var quantidade = texto.length

console.log(quantidade)

console.log(texto)

texto = texto.replace("mengão", "fogão")

console.log(texto.toLowerCase())