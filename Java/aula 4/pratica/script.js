function verificar(){

    const temperatura = document.getElementById("temperatura").value;

    const clima = document.getElementById("clima").value;
    if(temperatura > 32 && clima === "não"){
        alert("pode sair sem guarda chuva!")
    } else {
        alert("tem que sair com guarda chuva!")
    }
}

