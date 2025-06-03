// 1. Importar o módulo Express
const express = require('express');

// 2. Criar uma instância do aplicativo Express
const app = express();

// 3. Definir a porta em que o servidor irá escutar
// A porta 3000 é comum para desenvolvimento, mas você pode usar outra.
const PORT = process.env.PORT || 3000;

// 4. Configurar o Express para servir arquivos estáticos
// Isso permite que o navegador acesse seus arquivos HTML, CSS e JavaScript diretamente.
// A pasta 'public' é onde colocaremos todos os arquivos do frontend.
app.use(express.static('public'));



// 5. Definir uma rota para a página inicial (Landing Page)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// 6. Definir uma rota para a página 'Sobre Nós'
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/public/sobre.html');
});

// 7. Iniciar o servidor (o número do passo mudou porque adicionamos um acima)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Pressione Ctrl+C para parar o servidor');
});