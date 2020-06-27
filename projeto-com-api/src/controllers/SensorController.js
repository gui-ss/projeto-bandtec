const database = require('./../database/connection');

const { ArduinoDataTemp } = require('./../sensors/serialTemperature');
const { ArduinoDataHumidity } = require('./../sensors/serialHumidity');

module.exports = {
    async index(request, response) {
        const fkArea = request.params.area;

        database.connect().then(async () => {
            return await database.sql
                    .query(`SELECT umidade, temperatura, dataLeitura FROM tbSensor WHERE fkArea = ${fkArea};`)
                    .then(result => {
                        let data = result.recordset[result.recordset.length - 1];

                        let temperature = data.temperatura;
                        let humidity = data.umidade;

                        let sumTemp = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
                        let averageTemp = (sumTemp / ArduinoDataTemp.List.length).toFixed(2);

                        let sumHum = ArduinoDataHumidity.List.reduce((a, b) => a + b, 0);
                        let averageHum = (sumHum / ArduinoDataHumidity.List.length).toFixed(2);

                        response.json({
                            data: {
                                Hum: humidity,
                                Temp: temperature
                            },  
                            total: {
                                Hum: ArduinoDataHumidity.List.length,
                                Temp: ArduinoDataTemp.List.length
                            },
                            average: {
                                Hum: isNaN(averageHum) ? 0 : averageHum,
                                Temp: isNaN(averageTemp) ? 0 : averageTemp
                            },
                            lastMoment: data.dataLeitura
                        });
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    },

    async create(request, response) {
        const registros_mantidos_tabela_leitura = 50;
        const { fkArea } = request.body;

        let temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];
        let humidity = ArduinoDataHumidity.List[ArduinoDataHumidity.List.length - 1];

        let data = new Date();
        let moment = `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;

        database.connect().then(async () => {
            return await database.sql
                .query(`INSERT into tbSensor (umidade, temperatura, dataLeitura, fkArea)
                values (${humidity}, ${temperature}, CONVERT(Datetime, '${moment}', 120), ${fkArea});
                
                delete from tbSensor where idSensor not in 
                (select top ${registros_mantidos_tabela_leitura} idSensor from tbSensor order by idSensor desc);`)
                .then(() => {
                    console.log('Registro inserido com sucesso!');
                    response.sendStatus(200);
                })
        }).catch(error => {
            console.log("Erro: "+error);
        }).finally(() => {
            database.sql.close();
        });
    },
}