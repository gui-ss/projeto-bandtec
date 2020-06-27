const sql = require('mssql');

const connection = {
    config: {
        server: "serverchameleon.database.windows.net",
        user: "adminlocal",
        password: "chameleon11!",
        database: "bdchameleon1a",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 10000,
            connectionTimeout: 5000
        }
    }
}

function connect() {
    // sql.close();
    return sql.connect(connection.config);
}

module.exports = {
    connect: connect,
    sql: sql
}