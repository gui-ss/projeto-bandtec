const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        database.connect().then(() => {
            return database.sql
                    .query(`SELECT idAcervo, nomeAcervo, telefoneAcervo, cnpj, tipoAcervo, ruaAvenida, numero, bairro, cidade, estado, cep FROM tbAcervo;`)
                    .then(result => {
                        response.send(result.recordset);
                    });
        }).catch(error => {
            console.log("ERRO: "+error  );
        }).finally(() => {
            database.sql.close();
        })
    },

    async create(request, response) {
        const { nomeAcervo, telefoneAcervo, cnpj, tipoAcervo, ruaAvenida, numero, bairro, cidade, estado, cep } = request.body;

        database.connect().then(() => {
            return database.sql
                    .query(`INSERT INTO tbAcervo (nomeAcervo, TelefoneAcervo, cnpj, tipoAcervo, ruaAvenida, numero, bairro, cidade, estado, cep) VALUES ('${nomeAcervo}', '${telefoneAcervo}', '${cnpj}', '${tipoAcervo}', '${ruaAvenida}', ${numero}, '${bairro}', '${cidade}', '${estado}', '${cep}');`)
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