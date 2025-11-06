# Baguncei Store

## 🎯 Visão Geral do Projeto
O projeto **Baguncei Store** é uma simulação de e-commerce com foco em demonstração de produtos e um formulário de cadastro/contato. O código-fonte passou por um extenso processo de **Refatoração Estrutural** para corrigir falhas críticas de organização e implementar boas práticas de front-end.

## 🛠️ Manual de Instalação e Execução
O projeto é **100% estático** (HTML, CSS e JavaScript) e não requer ambiente de backend (como PHP ou Node.js) para ser visualizado.

### Download
Baixe o repositório ou o arquivo `.zip` para sua máquina.

### Estrutura de Pastas
Certifique-se de que a estrutura esteja organizada conforme o padrão a seguir:
```
Baguncei-Store-main/
├── assets/
│   └── logo.png
├── css/
│   ├── app.css
│   ├── reset.css
│   └── style.css
├── js/
│   ├── main.js
│   └── utils.js
├── contato.html
└── index.html
```

### Execução
Abra o arquivo `index.html` no seu navegador de preferência (Chrome, Firefox, etc.). Para testar a página de contato, clique no link **"Contato"** ou abra o arquivo `contato.html`.

## ✨ Descrição das Melhorias e Refatoração
A refatoração seguiu os pilares de **Arquitetura, Usabilidade e Organização**, transformando a base de código de "caótica" para "estruturada".

| Categoria | Ações de Refatoração Realizadas | Benefício para o Sistema |
|----------|--------------------------------|--------------------------|
| **Arquitetura (Estrutura)** | 1. Correção de Links e Paths: Todos os caminhos de arquivos CSS/JS foram corrigidos para o padrão css/ e js/. | Elimina erros de carregamento e consolida o padrão de pastas. |
| | 2. Separação de Código: Lógica JS (funções editar, excluir, enviarContato) foi removida do style.css e consolidada em js/main.js e js/utils.js. | Garante a Separação de Responsabilidades (SoC), melhorando a manutenção. |
| | 3. Consistência Estrutural: Adicionado `<header>` e `<footer>` à página contato.html. | Mantém a consistência visual e semântica entre todas as páginas. |
| **Usabilidade (Experiência)** | 1. Responsividade: Adicionado `<meta name="viewport" ...>` em ambas as páginas. | Garante que o layout se adapte corretamente a dispositivos móveis. |
| | 2. Acessibilidade de Formulário: Relacionamento `<label for="id">` / `<input id="id">` implementado em todos os campos. | Melhora a acessibilidade para leitores de tela e a usabilidade (o clique na label foca o campo). |
| **Performance** | 1. Posicionamento de Scripts: Os arquivos js/main.js e js/utils.js são carregados no final do `<body>`. | O conteúdo da página carrega mais rápido, melhorando a percepção de performance. |
| **Código/Boas Práticas** | 1. Validação Básica: Adicionado o atributo `required` nos campos de formulário. | Previne o envio de dados vazios no lado do cliente. |
| | 2. Sintaxe Correta: Corrigido o erro de sintaxe no reset.css. | Garante que as folhas de estilo sejam interpretadas corretamente. |

## 💻 Diagrama Simples de Módulos (UML Conceitual)
Este diagrama representa a estrutura do sistema e como os módulos JavaScript se relacionam com o HTML:

| Módulo | Tipo | Responsabilidade Principal |
|--------|------|---------------------------|
| index.html | Visão | Exibe produtos e contém o formulário de cadastro (#novo). |
| contato.html | Visão | Exibe o formulário de contato (#fale). |
| css/reset.css | Estilo | Zera os estilos padrão do navegador. |
| css/app.css | Estilo | Define o layout principal, navegação e estilos da seção de produtos/cadastro. |
| css/style.css | Estilo | Define os estilos específicos para o formulário de contato. |
| js/main.js | Comportamento | Funções Globais (editar, excluir, enviarContato, salvar) chamadas via onclick. |
| js/utils.js | Comportamento | Listeners de submit para os formulários (#novo e #fale), incluindo lógica de fetch.

