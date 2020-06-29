let div_cards = document.querySelector("#area-cards");
let id_areas = [];

function constroiCards(areas) {

    id_areas = [];

    div_cards.innerHTML = "";

    areas.forEach(area => {
        div_cards.innerHTML +=
            `<div class='card' onclick='expandCard(this.id, event); construirGrafico(this.id); construirGraficoDoughnut(${area.id});' id='area${area.id}'>
            <div class="first-column">
                <div class="card-info">
                    <div class="info-area">
                        <h3 class='nome-area'>${area.nome}</h3>
                        <p class="temperatura">Temperatura: <span id="span_temperatura">0</span>ºC</p>
                        <p class="umidade">Umidade: <span id="span_umidade">0</span>%</p>
                        <p class='nivel' >Nivel: <span id="span_nivel">Normal</span></p>
                    </div>
                    <div class="alerta">
                        <div class="icone-alerta" id='div_alerta'>
                            <i class="material-icons" id="icone">add_alert</i>
                        </div>
                    </div>
                    <button onclick="deletarArea(${area.id})" class='deleteBtn'>Deletar área</button>
                </div>

                <div class='grafico-secundario'>
                    <div class="area-grafico">
					    <canvas id="dg-chart-area${area.id}"></canvas>
                    </div>
                </div>
            </div>

            <div class='grafico-principal'>
                <h3>Média de temperatura: <span id="span_media_temperatura">0</span>ºC </h3>
                <h3>Média de umidade: <span id="span_media_umidade">0</span> </h3>
                <div class="area-grafico">
					<canvas id="chart-area${area.id}"></canvas>
                </div>
            </div>
        </div>`;

        let alertas = {baixo: 0, medio: 0, ideal: 0, alto: 0, maximo: 0}
        id_areas.push({id: area.id, alertas: alertas});
    });

    div_cards.innerHTML += `
    <div id='add-card' onclick="modalAmbiente()">
        <span class="material-icons">
            add_circle
        </span>
        <p>Cadastrar nova área</p>
    </div>
    `;
}

setTimeout(() => {
    constroiCards(areas);
}, 3500);

function expandCard(id, event) {
    if (chart != null && dgchart != null) {
        chart.destroy();
        dgchart.destroy();
    }
    

    let cardClicado = document.querySelector(`#${id}`);
    let deleteButton = cardClicado.querySelector(".deleteBtn");
    let areaGrafico = cardClicado.querySelectorAll(".area-grafico");

    if (event.target != deleteButton && event.target != areaGrafico[0] && event.target != areaGrafico[1]) {
        let cards = document.querySelectorAll(".card");
        let addAreaButton = document.querySelector("#add-card");

        cards.forEach(card => {
            let cardId = card.getAttribute("id");

            if (cardId != id) {
                if (card.classList.contains('disabledCard')) {
                    setTimeout(() => {
                        card.classList.remove('disabledCard');
                    }, 400)
                }
                else {
                    card.classList.add('disabledCard');
                }

            }
            else {
                cardClicado.classList.toggle('expandedCard');
            }
        });

        if (addAreaButton.classList.contains('disabledCard')) {
            setTimeout(() => {
                addAreaButton.classList.remove("disabledCard");
            }, 400);
        }
        else {
            addAreaButton.classList.add("disabledCard");
        }
    }
}

function atualizarCard(temperatura, umidade, id, momento, media) {
    let card = document.querySelector(`#area${id}`);

    let span_temperatura = card.querySelector('#span_temperatura');
    let span_umidade = card.querySelector('#span_umidade');
    
    span_temperatura.innerHTML = temperatura;
    span_umidade.innerHTML = umidade;

    let span_nivel = card.querySelector('#span_nivel');
    let div_alerta = card.querySelector("#div_alerta");
    let div_icone = card.querySelector('#icone');

    let estiloAlerta = classificarAlerta(temperatura, id);

    div_icone.innerHTML = estiloAlerta[0];
    div_alerta.style.background = estiloAlerta[1];
    span_nivel.innerHTML = estiloAlerta[2];
    span_nivel.style.color = estiloAlerta[3];

    if (chart != null) {
        let chartId = chart.canvas.getAttribute('id');
        let subsChartId = chartId.substring(6, chartId.length);
        let cardId = card.getAttribute("id");

        if (subsChartId == cardId) {
            let media_temperatura = card.querySelector('#span_media_temperatura');
            let media_umidade = card.querySelector('#span_media_umidade');

            media_temperatura.innerHTML = media.Temp;
            media_umidade.innerHTML = media.Hum;

            fillChart(umidade, temperatura.toFixed(2), momento);
        }
    }
}

function classificarAlerta(temperatura, id) {
    let estilo = [];

    id_areas.forEach(area => {

        if (temperatura >= 1 && temperatura <= 10) {
            estilo = ['warning', 'rgb(238, 34, 44)', 'Baixo', 'rgb(238, 34, 44)'];
            if(area.id == id) {
                area.alertas.baixo++;
            }
    
        } else if (temperatura >= 11 && temperatura <= 18) {
            estilo = ['add_alert', '#0078d7', 'Médio', '#0078d7'];
            if(area.id == id) {
                area.alertas.medio++;
            }
    
        } else if (temperatura >= 19 && temperatura <= 23) {
            estilo = ['check_circle', 'rgb(35, 197, 62)', 'Ideal', 'rgb(35, 197, 62)'];
            if(area.id == id) {
                area.alertas.ideal++;
            }
    
        } else if (temperatura >= 24 && temperatura <= 25) {
            estilo = ['cancel', 'rgb(255,165,36)', 'Alto', 'rgb(255,165,36)'];
            if(area.id == id) {
                area.alertas.alto++;
            }
    
        } else {
            estilo = ['warning', 'rgb(238, 34, 44)', 'Máximo', 'rgb(238, 34, 44)'];
            if(area.id == id) {
                area.alertas.maximo++;
            }
        }
    });
    return estilo;
}