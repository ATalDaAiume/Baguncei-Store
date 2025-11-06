// Lógica do Formulário 'novo' (Página index.html)
document.getElementById('novo').addEventListener('submit', function(e){
    e.preventDefault();
    var n = e.target.nome.value;
    var p = e.target.preco.value;
    var arr = [];
    arr.push({ n, p });
    console.log(arr);
});

// Lógica do Formulário 'fale' (Página contato.html)
document.getElementById('fale').addEventListener('submit', function(e){
    e.preventDefault();
    var dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };
    
    // Boa prática: Revalide o email aqui, caso a validação do 'enviarContato()' falhe
    if (dados.email.indexOf('@') == -1) {
        // Se a validação do 'enviarContato()' falhar, este preventDefault ainda impede o envio.
        return; 
    }
    
    fetch('/send.php', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(r => r.text())
    .then(t => { alert('ok'); });
});