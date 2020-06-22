const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        database.connect().then(() => {
            return database.sql
                    .query(`SELECT idArea, tipoArea, nomeArea, nivelAlerta FROM tbArea;`)
                    .then(result => {
                        response.send(result.recordset)
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    },

    async create(request, response) {
        const { tipoArea, nomeArea, nivelAlerta } = request.body;

        database.connect().then(() => {
            return database.sql
                    .query(`INSERT INTO tbArea(tipoArea, nomeArea, nivelAlerta) VALUES ('${tipoArea}', '${nomeArea}', '${nivelAlerta}');`)
                    .then(() => {
                        console.log("Registro inserido!");
                        response.sendStatus(200);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    }
}