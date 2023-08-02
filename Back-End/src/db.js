const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'containers-us-west-193.railway.app',
    port: '7437',
    user: 'root',
    password: 'WWSQbHI1xV6UGAN0UYMl',
    database: 'railway',
});

connection.connect((error) => {
    if (error) throw error;
    console.log(`conectado`)
});

module.exports = connection;