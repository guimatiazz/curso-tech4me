const contador = document.getElementById('contador');

const atualizarContador = () =>{
    const horaAtual = new Date();

    const horas19 = new Date();

    horas19.setHours(19,0,0,0);

    const diferença = horas19 - horaAtual;

    const horas = Math.floor(diferença / (1000 * 60 * 60)) / 1000 * 60;

    contador.innerText = `${horas}`
}

setInterval(atualizarContador, 1000);