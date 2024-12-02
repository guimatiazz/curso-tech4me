var contador = 0


function helloWord(){
    if ( contador == 0 ){
        const h1 = document.createElement("h1");
        h1.textContent = "Hello World!!!";
        h1.style.color = "white"
        document.getElementById("box").appendChild(h1)
        contador = 1 
    } else {
        console.console.log("limite atingido de Hello Word!!!");
    }
    

 
}