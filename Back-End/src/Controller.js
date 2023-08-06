const service = require('./Service')

const getAll = async (req, res) => {
    let json = { error: '', result: [] };
    let users = await service.getAll();

    for (let i in users) {
        json.result.push({
            id: users[i].id,
            nome: users[i].nome,
            dataNascimento: users[i].dataNascimento,
            cpf: users[i].cpf,
            telefone: users[i].telefone,
        })
    }
    res.json(json.result);
}

const getOne = async (req, res) => {
    let json = { error: '', result: {} };
    let nome = req.params.nome;
    let user = await service.getOne(nome);
    if (user) {
        json.result = user;
    }
    res.json(json.result);
}

const register = async (req, res) => {
    let json = { error: '', result: {} };
    //let id = req.body.id;
    let nome = req.body.nome;
    let dataNascimento = req.body.dataNascimento;
    let cpf = req.body.cpf;
    let telefone = req.body.telefone;
    console.log(nome, dataNascimento, cpf, telefone);
    if (nome && dataNascimento && cpf && telefone) {
        let newUser = await service.register(nome, dataNascimento, cpf, telefone);
        json.result = {
            nome,
            dataNascimento,
            cpf,
            telefone
        };
    } else {
        json.error = 'Campos não enviados';
    }
    res.json(json);
}

const update = async (req, res) => {
    let json = { error: '', result: {} };
    let nome = req.body.nome;
    let dataNascimento = req.body.dataNascimento;
    let cpf = req.body.cpf;
    let telefone = req.body.telefone;
    let param = req.params.nome
    if (nome && dataNascimento && cpf && telefone) {
        await service.update(nome, dataNascimento, cpf, telefone, param);
        json.result = {
            nome,
            dataNascimento,
            cpf,
            telefone
        };
    } else {
        json.error = 'Campos não enviados';
    }
    res.json(json);
}

const erase = async (req, res) => {
    let json = { error: '', result: {} };
    await service.erase(req.params.id);
    res.json(json);
}


module.exports = {
    getAll,
    getOne,
    register,
    update,
    erase
}