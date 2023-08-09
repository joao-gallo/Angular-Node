const db = require('./db')

const getAll = () => {
    return new Promise((accepted, rejected) => {
        db.query('SELECT * FROM testNodeAngular', (error, results) => {
            if (error) { rejected(error); return; }
            accepted(results);
        })
    })
}

const getOne = (id) => {
    return new Promise((accepted, rejected) => {
        console.log('Recebendo o CPF:', id);
        db.query('SELECT * FROM testNodeAngular WHERE cpf = ?', [id], (error, results) => {
            if (error) { rejected(error); return; }
            if (results.length > 0) { //vai verificar se retornou mais de 1 e pegar o 1
                accepted(results[0]);
            } else {
                accepted(false);
            }
        });
    });
}
const register = (nome, dataNascimento, cpf, telefone) => {
    return new Promise((accepted, rejected) => {

        db.query('INSERT INTO testNodeAngular (nome, dataNascimento, cpf, telefone) VALUES ( ?, ?, ?, ?)',
            [nome, dataNascimento, cpf, telefone],
            (error, results) => {
                if (error) { rejected(error); return; }
                accepted(results);
            }
        );
    });
}
const update = (nome, dataNascimento, cpf, telefone, param) => {
    return new Promise((accepted, rejected) => {
        db.query('UPDATE testNodeAngular SET nome = ?, dataNascimento = ?, cpf = ?, telefone = ? WHERE nome = ?',
            [nome, dataNascimento, cpf, telefone, param],
            (error, results) => {
                if (error) { rejected(error); return; }
                accepted(results);
            }
        );
    });
}

const erase = (id) => {
    return new Promise((accepted, rejected) => {
        db.query('DELETE FROM testNodeAngular WHERE id = ?', [id], (error, results) => {
            if (error) { rejected(error); return; }
            accepted(results);
        });
    });
}


module.exports = {
    getAll,
    getOne,
    register,
    update,
    erase
}