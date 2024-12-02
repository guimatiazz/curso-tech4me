function enviarMensagem(){
    //criae variasveis necessarias
    const respostaCorreta = "tech4fm é show!"
    const resposta = document.getElementById('resposta')

    //criar repetição

    do{  //verificar se a resposta esta correta 

        let mensagem = document.getElementById("mensagem").value
        const resposta = document.getElementById("resposta");

        //definir quando o loop vai interromper

        if (mensagem.toLowerCase() == respostaCorreta) {
            resposta.innerText = "Parabéns, ganhou a camisa";
            resposta.style.color = "green"
            break
        }else{
            resposta.innerText = 'Não foi dessa vez!!'
            resposta.style.color = "red"
        }    
          

        
}while(!estaCorreto);
} 
