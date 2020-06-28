const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const fkAcervo = request.params.acervo;

        database.connect().then(async() => {
            return await database.sql
                    .query(`SELECT idArea, tipoArea, nomeArea, fkAcervo FROM tbArea WHERE fkAcervo = ${fkAcervo};`)
                    .then(result => {
                        response.send(result.recordset)
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            // database.sql.close();
        });
    },

    async create(request, response) {
        const { tipoArea, nomeArea, fkAcervo} = request.body;

        database.connect().then(async () => {
            return await database.sql
                    .query(`INSERT INTO tbArea(tipoArea, nomeArea, fkAcervo) VALUES ('${tipoArea}', '${nomeArea}', ${fkAcervo});`)
                    .then(() => {
                        console.log("Registro inserido!");
                        response.sendStatus(200);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            // database.sql.close();
        });
    },

    async delete(request, response) {
        const idArea = request.params.id; 

        database.connect().then(async () => {
            return await database.sql
                    .query(`
                    DELETE FROM tbSensor WHERE fkArea = ${idArea};
                    DELETE FROM tbArea WHERE idArea = ${idArea};`)
                    .then(() => {
                        console.log("Registro deletado!");
                        response.sendStatus(200);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            // database.sql.close();
        });
    }
}