const database = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { email, senha } = request.body;

        database.connect().then(() => {
            return database.sql
                .query(`SELECT idUsuario, nomeUsuario, fkAcervo, nomeAcervo FROM tbUsuario INNER JOIN tbAcervo ON idAcervo = fkAcervo WHERE email = '${email}' AND senha = '${senha}';`)
                .then(result => {
                    response.send(result.recordset);
                });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    }
}