function autenticar(){

    const eamilCorreto = "usuario@exemplo.com"
    const senhaCoreta = "1234"

    //pegar os dados do usuario
    const email = document.getElementById("email").Value;
    const senha = document.getElementById("senha").Value;
    //comparar os dados corretos com os dados do usuario
    //retornar o se esta autenticado ou não
    if (eamilCorreto === email && senhaCoreta === senha ) {
        alert("Autenticado")

    } else {
        alert("Não Autenticado")

    }



    //retornar o se esta autenticado ou não 

}
  


    
