const tempo = 5 *60;
let tempRetante = tempo;

const atualizarRelogio = function(){
    const minutos = String(Math.floor(tempoRestante / 60)).padStart(2,"0");

    const segundos = String(tempRetante % 60).padStart(2,"0");
    atualizarRelogio.innerText = `${minutos}:${segundos}`;

    if (tempoRestante > 0) {
        tempRetante--;
    }
}

setInterval(atualizarRelogio, 1000);




