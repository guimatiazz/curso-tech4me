console.log(document.title);

const titulo = document.getElementById("titulo");

titulo.innerText = "Aula 01";

const titulo = document.createElement("h1");

console.log(titulo);

document.body.appendChild(titulo);

console.log(document.body.childElementCount);

titulo .innerText = "Aula 01";

titulo.id = "titulo";

titulo.className = "titulos";

titulo.style.color = "black";

console.log(titulo.textContent);