const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const { acervo } = request.params;

        database.connect().then(async () => {
            return await database.sql
                    .query(`SELECT DISTINCT umidade, temperatura, dataLeitura, fkArea, nomeArea FROM tbSensor INNER JOIN tbArea ON fkArea = idArea INNER JOIN tbAcervo ON fkAcervo = ${acervo};`)
                    .then(result => {
                        let data = result.recordset;
                        response.send(data);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    },
}