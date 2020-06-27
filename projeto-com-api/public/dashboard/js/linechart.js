let chart = null;

function construirGrafico(area) {
    let config = {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Temperatura',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Umidade',
                data: [],
                backgroundColor: [
                    'rgba(0,0,255,0.3)'
                ],
                borderColor: [
                    'rgba(0,0,255,0.3)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            responsive: true,
            maintainAspectRatio: true
        }
    }
    
    let context = document.getElementById(`chart-${area}`).getContext("2d");
    chart = new Chart(context, config);    
}





function getData() {
    let ajax = new XMLHttpRequest();

    ajax.open('GET', 'http://localhost:3333/sensor');
    ajax.onreadystatechange = function () {
        if (ajax.readyState == XMLHttpRequest.DONE) {
            let arr = JSON.parse(ajax.responseText);

            msg.innerHTML = `
					<p>Média Umidade: ${arr.average.Hum}</p>
					<p>Média Temperatura: ${arr.average.Temp}</p>
				`;
        }
    }
    ajax.send();
}

function fillChart(umidade, temperatura, data) {
    let date = new Date(data);
    date.setHours(date.getHours() + 3);
    let hours = date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds();

    let moment = `${hours}:${minutes}:${seconds}`;

    chart.data.labels.push(moment);

    if (chart.data.labels.length > 7) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
    }

    chart.data.datasets[0].data.push(parseFloat(temperatura));
    chart.data.datasets[1].data.push(umidade);
    chart.update();
}

setInterval(() => {
    if(chart != null) {
        chart.resize();
    }
}, 1000);