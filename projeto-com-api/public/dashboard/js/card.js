let div_cards = document.querySelector("#area-cards");
let id_areas = [];

function constroiCards(areas) {

    id_areas = [];

    div_cards.innerHTML = "";

    areas.forEach(area => {
        div_cards.innerHTML += 
        `<div class='card' onclick='expandCard(this.id, event)' id='area${area.idArea}'>
            <div class="first-column">
                <div class="card-info">
                    <div class="info-area">
                        <h3 class='nome-area'>${area.nomeArea}</h3>
                        <p class="temperatura">Temperatura: <span id="span_temperatura">0</span>ºC</p>
                        <p class="umidade">Umidade: <span id="span_umidade">0</span></p>
                        <p class='nivel' >Nivel: <span id="span_nivel">Normal</span></p>
                    </div>
                    <div class="alerta">
                        <div class="icone-alerta" id='div_alerta'>
                            <i class="material-icons" id="icone">add_alert</i>
                        </div>
                    </div>
                    <button onclick="deletarArea(${area.idArea})" class='deleteBtn'>Deletar área</button>
                </div>

                <div class='grafico-secundario'>
                    <div class="area-grafico">
                    
                    </div>
                </div>
            </div>

            <div class='grafico-principal'>
                <div class="area-grafico">
                    
                </div>
            </div>
        </div>`;

        id_areas.push(area.idArea);
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

function atualizarCard(temperatura, umidade, id) {
    let card = document.querySelector(`#area${id}`);
    

    let span_temperatura = card.querySelector('#span_temperatura');
    let span_umidade = card.querySelector('#span_umidade');
    let span_nivel = card.querySelector('#span_nivel');

    let div_alerta = card.querySelector("#div_alerta");
    let div_icone = card.querySelector('#icone');

    span_temperatura.innerHTML = temperatura;
    span_umidade.innerHTML = umidade;

    if(temperatura>= 1 && temperatura<=10){
        div_icone.innerHTML = 'warning';
        div_alerta.style.background = 'rgb(238, 34, 44)';
        span_nivel.innerHTML = 'Baixo';
        span_nivel.style.color = 'rgb(238, 34, 44)';
    }else if(temperatura>=11 && temperatura<=18){
        div_icone.innerHTML = 'add_alert';
        div_alerta.style.background = '#0078d7';
        span_nivel.innerHTML = 'Médio';
        span_nivel.style.color = '#0078d7'; 
    }else if(temperatura>=19 && temperatura<=23){
        div_icone.innerHTML = 'check_circle';
        div_alerta.style.background = 'rgb(35, 197, 62)';
        span_nivel.innerHTML = 'Ideal';
        span_nivel.style.color = 'rgb(35, 197, 62)'; 
    }else if(temperatura>=24 && temperatura<=25){
        div_icone.innerHTML = 'cancel';
        div_alerta.style.background = 'rgb(255,165,36)';
        span_nivel.innerHTML = 'Alto';
        span_nivel.style.color = 'rgb(255,165,36)';
    }else{
        div_icone.innerHTML = 'warning';
        div_alerta.style.background = 'rgb(238, 34, 44)';
        span_nivel.innerHTML = 'Máximo';
        span_nivel.style.color = 'rgb(238, 34, 44)';
    }
}