let dgchart = null;

function construirGraficoDoughnut(area) {
    let config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [1, 10, 20, 5, 1],
                backgroundColor: [
                    'rgb(238, 34, 44)',
                    '#0078d7',
                    'rgb(35, 197, 62)',
                    'rgb(255,165,36)',
                    'rgb(238, 34, 44)'
                ]
            }],
            labels: [
                'Baixo',
                'Médio',
                'Ideal',
                'Alto',
                'Máximo'
            ],
        },
        options: {
            title: {
                display: true,
                text: 'Níveis de alerta ao longo do dia'
            },
            responsive: true
        }
    };

    let dgcontext = document.getElementById(`dg-chart-${area}`).getContext("2d");
    dgcontext.canvas.height = 250;
    dgchart = new Chart(dgcontext, config);    
}

setInterval(() => {
    if(dgchart != null) {
        dgchart.resize();
    }
}, 1000);