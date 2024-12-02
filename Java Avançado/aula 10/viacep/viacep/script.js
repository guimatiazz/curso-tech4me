function buscarDados() {
    const cepInput = document.getElementById('cep');
    const cepValue = cepInput.value.trim();

    if (cepValue.length !== 8) {
      alert('CEP inválido. Por favor, insira um CEP válido.');
      return;
    }

        fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then(response => response.json())
      .then(data => {
        const ruaInput = document.getElementById('rua');
        const complementoInput = document.getElementById('complemento');
        const bairroInput = document.getElementById('bairro');
        const cidadeInput = document.getElementById('cidade');
        const estadoInput = document.getElementById('estado');

        ruaInput.value = data.logradouro;
        complementoInput.value = data.complemento;
        bairroInput.value = data.bairro;
        cidadeInput.value = data.localidade;
        estadoInput.value = data.uf;
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }

  function limparDados() {
    const formInputs = document.querySelectorAll('#formulario input');

    formInputs.forEach(input => {
      input.value = '';
    });
  }