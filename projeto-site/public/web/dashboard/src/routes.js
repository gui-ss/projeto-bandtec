const express = require('express');

const { ArduinoDataTemp } = require('./controllers/serialTemperature');
const { ArduinoDataHumidity } = require('./controllers/serialHumidity');

const connection = require('./database/connection');

const router = express.Router();

router.get('/getData', (request, response) => {
    let sql = "SELECT * FROM tbSensor";

    connection.query(sql, function (err, result) {
        if (err) throw err;

        let data = result[result.length - 1];

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
}) 

router.post('/sendData', (request, response) => {
    temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];
    humidity = ArduinoDataHumidity.List[ArduinoDataHumidity.List.length - 1];

    let data = new Date();

    let sql = "INSERT INTO tbSensor (umidade, temperatura, dataLeitura) VALUES (?, ?, ?)";

    connection.query(sql, [humidity, temperature, data], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });


    response.sendStatus(200);
});

module.exports = router;