const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./Controller')
const routes = require('./routes')


const app = express();
app.use(cors());
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes);

const port = 7437;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
