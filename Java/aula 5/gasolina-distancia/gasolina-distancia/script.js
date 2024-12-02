function calcularGasolina() {
    const distancia = document.getElementById
("distancia").value;

const consumo = document.getElementById
("consumo").value;

const preco = document.getElementById("preco").value;

const litros = distancia/consumo;

const resultado = litros*preco;

document.getElementById
("resultado_gasolina_litros").innerHTML = `${litros}`;

document.getElementById("resultado_custo").
innerHTML = `R$ ${resultado}`;

}
