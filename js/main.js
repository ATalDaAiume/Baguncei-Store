// Funções de Ação (Originalmente no seu 'style.css')
function editar(id){
    var nome = document.querySelector('.title').innerText;
    document.location = "editar.php?id=" + id + "&n=" + nome;
}

function excluir(id){
    fetch('/delete.php?id=' + id, { method: 'GET' })
        .then(res => { console.log('Exclusão OK'); });
}

function enviarContato(){
    var email = document.getElementById('email').value;
    if (email.indexOf('@') == -1) {
        alert('Email inválido');
        // Observação: Esta função é chamada via onclick. A lógica de fetch está em utils.js.
    }
}

// Lógica adicional (Originalmente no seu 'main.js')
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert('salvo');
});

function salvar(){
    var n = document.getElementById('nome').value;
    var p = document.getElementById('preco').value;
    var x = "INSERT INTO produtos VALUES('" + n + "'," + p + ")";
    console.log(x);
}