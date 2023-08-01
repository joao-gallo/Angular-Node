const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, este é o servidor Node.js do aplicativo Angular!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
