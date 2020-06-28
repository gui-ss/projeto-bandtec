const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const fkArea = request.params.area;

        database.connect().then(async () => {
            return await database.sql
                    .query(`SELECT umidade, temperatura, dataLeitura FROM tbSensor WHERE fkArea = ${fkArea};`)
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