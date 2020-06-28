let dgchart = null;
let id_area = null;

function updateDgChart(idArea) {
    console.log(idArea);
    
    let data = [
        id_areas[idArea].alertas.baixo,
        id_areas[idArea].alertas.medio,
        id_areas[idArea].alertas.ideal,
        id_areas[idArea].alertas.alto,
        id_areas[idArea].alertas.maximo
    ];
    dgchart.data.datasets[0].data = data;
    dgchart.update();
}

function construirGraficoDoughnut(idArea) {
    id_area = idArea;
    let data = [
        id_areas[idArea].alertas.baixo,
        id_areas[idArea].alertas.medio,
        id_areas[idArea].alertas.ideal,
        id_areas[idArea].alertas.alto,
        id_areas[idArea].alertas.maximo
    ];
    

    let config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: data,
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

    let dgcontext = document.getElementById(`dg-chart-area${idArea}`).getContext("2d");
    dgcontext.canvas.height = 250;
    dgchart = new Chart(dgcontext, config);    
}

setInterval(() => {
    if(dgchart != null) {
        dgchart.resize();
        updateDgChart(id_area);
    }
}, 1000);