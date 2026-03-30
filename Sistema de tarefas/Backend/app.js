import express from 'express';
const app = express();
const porta = 3000


app.get('/', (req, res) => {
    


});

app.listen(porta, () => console.log("Servidor rodando  na porta http://localhost:3000"));
