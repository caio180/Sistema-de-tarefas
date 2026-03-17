const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
       <h1>Tela inicial</h1>
     <p>Escolha uma opção:</p>
     <a href='/cadastro'>Cadastro</a> ou <a href='/login'>Login</a>
        `);

});

app.get('/cadastro', (req, res) => {
    res.send(`
        <h2>Tela de cadastro</h2>
        
        <input type="email" placeholder="Digite seu email">
        <input type="password" placeholder="Digite sua senha">          
        
        `);
});
app.get('/login', (req, res) => {
    res.send(`<h2>Tela de login</h2>
        
        
        `);

});

app.listen(3000, () => console.log("Servidor rodando, http://localhost:3000"));