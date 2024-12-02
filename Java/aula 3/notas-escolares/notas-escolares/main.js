function caucularNota(){
    let html = document.getElementById("html").value;

    let css = document.getElementById("css").value;

    let logica = document.getElementById("logica").value;

    let javascript = document.getElementById("javascript").value;

    let react = document.getElementById("react").value;
    


let pesoHtml = 1
let pesoCss = 1
let pespLogica = 2 
let pesoJavascript = 3
let pesoReact = 3

let qtdTotal = pesoHtml + pesoCss + pesoLogica + pesoJavascript + pesoReact


let totalNotas = (html * pesoHtml) + 
                 (css * pesoCss) +
                 (logica * pesoLogica) +
                 (javascript * pesoJavascript) +
                 (react * resoReat)

let resultado = totalNota / pesoTotal

document.getElementById("resultado_nota").innerHTML = resultado
}