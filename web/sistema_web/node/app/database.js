var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'Christian',
    password: 'CRLM1309c',
    database: 'bookcare'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;