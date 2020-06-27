const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        database.connect().then(() => {
            return database.sql
                    .query(`SELECT idAcervo, nomeAcervo, telefoneAcervo, cnpj, tipoAcervo, ruaAvenida, numero, bairro, cidade, estado, cep, fkUsuario FROM tbAcervo;`)
                    .then(result => {
                        response.send(result.recordset);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        })
    },

    async create(request, response) {
        const { nomeAcervo, telefoneAcervo, cnpj, tipoAcervo, ruaAvenida, numero, bairro, cidade, estado, cep, fkUsuario } = request.body;

        database.connect().then(() => {
            return database.sql
                    .query(`INSERT INTO tbAcervo (nomeAcervo, TelefoneAcervo, cnpj, tipoAcervo, ruaAvenida, numero, bairro, cidade, estado, cep, fkUsuario) VALUES ('${nomeAcervo}', '${telefoneAcervo}', '${cnpj}', '${tipoAcervo}', '${ruaAvenida}', ${numero}, '${bairro}', '${cidade}', '${estado}', '${cep}', ${fkUsuario});`)
                    .then(() => {
                        console.log("Registro inserido!");
                        response.sendStatus(200);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        })
    }

}