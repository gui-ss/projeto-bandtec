let acervo = dadosUsuario.idAcervo;
let areas = [];

function selectAreas() {
    areas = [];

    let ajax = new XMLHttpRequest();
    ajax.open("GET", `http://localhost:3333/area/${acervo}`);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == XMLHttpRequest.DONE) {
            let resposta = JSON.parse(ajax.responseText);
            resposta.forEach(area => {
               areas.push({nome: area.nomeArea, id: area.idArea}); 
            });

            if(window.location.pathname == '/dashboard/index.html') {
                constroiCards(areas);
            }
        }
    }
    ajax.send();
}

selectAreas();

let input_nome = document.querySelector("#nome-area");
let input_tipo = document.querySelector("#tipo-area");


function cadastrarArea(event) {
    event.preventDefault();

    let nome = input_nome.value;
    let tipo = input_tipo.value;

    let params = "tipoArea=" + tipo + "&nomeArea=" + nome + "&fkAcervo=" + acervo;

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "http://localhost:3333/area");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            console.log(ajax.responseText);
            modalAmbiente();
            selectAreas();
        }
    }
    ajax.send(params);
}

let form_area = document.querySelector("#form-area");

if(form_area != null) {
    form_area.addEventListener("submit", cadastrarArea);
}

function deletarArea(id) {

    let ajax = new XMLHttpRequest();
    ajax.open("DELETE", `http://localhost:3333/area/${id}`);
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            console.log(ajax.responseText);
            selectAreas();
        }
    }
    ajax.send();
}