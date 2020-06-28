function selectDadosRelatorio() {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", `http://localhost:3333/relatorio`);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == XMLHttpRequest.DONE) {
            let resposta = JSON.parse(ajax.responseText);
            sessionStorage.setItem('jsonRelatorio', JSON.stringify(resposta));
        }
    }
    ajax.send();
}