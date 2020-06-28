let contador = 0;

function inserirDadosSensor(areas) {
    let areaAtual = areas[contador].id;

    let params = "fkArea=" + areaAtual; 

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "http://localhost:3333/sensor");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            selectDadosSensor(areaAtual);
        }
    }
    ajax.send(params);

    contador++;

    if(contador >= areas.length) {
        contador = 0;
    }
}


function selectDadosSensor(area) {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", `http://localhost:3333/sensor/${area}`);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == XMLHttpRequest.DONE) {
            let resposta = JSON.parse(ajax.responseText);
            atualizarCard(resposta.data.Temp, resposta.data.Hum, area, resposta.lastMoment, resposta.average);
        }
    }
    ajax.send();
}

setInterval(() => {
    if(id_areas.length > 0) {
        inserirDadosSensor(id_areas);
    }
}, 5000);