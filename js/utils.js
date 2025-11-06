/* ================================================= */
/* utils.js - Lógica Funcional (CRUD Simulado) */
/* CORREÇÃO: Lógica de Edição e Modal Customizado */
/* ================================================= */

const PRODUTOS_KEY = 'bagunceiStoreProdutos';
let editandoId = null; 
let produtoParaExcluirId = null; 

// --- 1. Funções de Simulação de Banco de Dados (localStorage) ---

function getProdutos() {
    const data = localStorage.getItem(PRODUTOS_KEY);
    if (!data) {
        return [
            { id: 1, nome: 'Mesa em L', preco: 400.00 },
            { id: 2, nome: 'Cadeira', preco: 30.00 },
        ];
    }
    return JSON.parse(data);
}

function setProdutos(produtos) {
    localStorage.setItem(PRODUTOS_KEY, JSON.stringify(produtos));
}

// --- 2. Funções de Renderização (Index.html) ---

function renderizarProdutos() {
    const produtos = getProdutos();
    const produtosSection = document.getElementById('produtos');
    
    // Remove todos os cards existentes, exceto o título h1
    const cards = produtosSection.querySelectorAll('.card');
    cards.forEach(card => card.remove());

    produtos.forEach(produto => {
        const cardHtml = `
            <div class="card" data-id="${produto.id}">
                <h2 class="title">${produto.nome}</h2>
                <p class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                <button onclick="iniciarEdicao(${produto.id})">EDITAR</button>
                <button onclick="abrirModalExclusao(${produto.id})">EXCLUIR</button>
            </div>
        `;
        produtosSection.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// --- 3. Funções de Ação (CRUD) ---

window.iniciarEdicao = function(id) {
    const produtos = getProdutos();
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    editandoId = id;
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco.toFixed(2).replace('.', ','); 
    
    document.querySelector('#novo h2').innerText = 'EDITAR PRODUTO';
    document.querySelector('#novo button[type="submit"]').innerText = 'ATUALIZAR';
};

window.excluirProduto = function() {
    if (produtoParaExcluirId === null) return;
    
    let produtos = getProdutos();
    // Filtra e mantém todos os produtos cujo ID não é o que queremos excluir
    produtos = produtos.filter(p => p.id !== produtoParaExcluirId); 
    setProdutos(produtos);
    renderizarProdutos();
    
    fecharModalExclusao();
};

function salvarProduto(nome, precoStr) {
    let produtos = getProdutos();
    const precoNum = parseFloat(precoStr.replace(',', '.'));

    if (isNaN(precoNum) || precoNum <= 0) {
        alert('Preço inválido. Use um formato como 10,00.');
        return;
    }

    if (editandoId !== null) {
        // CORREÇÃO: Edição (Update) - Localiza o item e o substitui
        produtos = produtos.map(p => {
            if (p.id === editandoId) {
                return { ...p, nome: nome, preco: precoNum };
            }
            return p;
        });
        
        // Reseta o modo de edição
        editandoId = null; 
        document.querySelector('#novo h2').innerText = 'Cadastro de Produto';
        document.querySelector('#novo button[type="submit"]').innerText = 'SALVAR';
    } else {
        // Cadastro (Create)
        const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
        produtos.push({ id: novoId, nome: nome, preco: precoNum });
    }

    setProdutos(produtos);
    renderizarProdutos();
    // Limpar formulário
    document.getElementById('novo').reset(); 
}

// --- 4. Funções do Modal Customizado ---

window.abrirModalExclusao = function(id) {
    produtoParaExcluirId = id;
    document.getElementById('custom-modal').style.display = 'flex';
};

window.fecharModalExclusao = function() {
    produtoParaExcluirId = null;
    document.getElementById('custom-modal').style.display = 'none';
};


// --- 5. Event Listeners ---

// Lógica do Formulário 'novo' (Página index.html)
const formNovo = document.getElementById('novo');
if (formNovo) {
    formNovo.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = e.target.nome.value;
        const preco = e.target.preco.value;
        salvarProduto(nome, preco);
    });
}

// Lógica do Formulário 'fale' (Página contato.html)
const formFale = document.getElementById('fale');
if (formFale) {
    formFale.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem de contato enviada (simulação)!');
        e.target.reset(); 
    });
}

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    // Apenas renderiza se estiver na página index.html
    if (document.getElementById('produtos')) {
        renderizarProdutos();
    }
});
