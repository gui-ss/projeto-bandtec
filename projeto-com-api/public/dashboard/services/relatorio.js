
function selectDadosRelatorio(area) {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", `http://localhost:3333/relatorio/${area}`);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == XMLHttpRequest.DONE) {
            let resposta = JSON.parse(ajax.responseText);
            sessionStorage.setItem('jsonRelatorio', JSON.stringify(resposta));
        }
    }
    ajax.send();
}