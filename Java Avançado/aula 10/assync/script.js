document.getElementById("iniciar").addEventListener('click', () =>{
    setTimeout(() => {
        const dados = `os dados recebidos do servidor: ${new Date().toLocaleDateString()}`;
        document.getElementById('resultado').innerText = dados;
    }, 5000);
});