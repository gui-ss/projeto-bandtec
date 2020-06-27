let nomeUsuario = document.querySelector("#input_nome_cad");
let emailUsuario = document.querySelector("#input_email_cad");
let loginUsuario = document.querySelector("#input_login_cad");
let senhaUsuario = document.querySelector("#input_pass_cad");
let dataNascUsuario = document.querySelector("#input_datanasc_cad");
let cpfUsuario = document.querySelector("#input_cpf_cad");
let telefoneUsuario = document.querySelector("#input_telefone");

function convertData(userDate) {
    let date = new Date(userDate);
    let formatedDate = `${date.toLocaleDateString()}`;
	return formatedDate;
}

function cadastroUsuario(event) {
    event.preventDefault();

    let date = convertData(dataNascUsuario.value);
    
    let params = `nomeUsuario=${nomeUsuario.value}&dataNasc=${date}&cpf=${cpfUsuario.value}&telefoneUsuario=${telefoneUsuario.value}&email=${emailUsuario.value}&login=${loginUsuario.value}&senha=${senhaUsuario.value}`;

    let ajax = new XMLHttpRequest();
    ajax.open('POST', "http://localhost:3333/usuario");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            let resposta = ajax.responseText;
            selectUsuario();
        }
    }

    ajax.send(params);
}

function selectUsuario() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', "http://localhost:3333/usuario");
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            let resposta = JSON.parse(ajax.responseText);

            let idUltimoUsuario = resposta[resposta.length-1].idUsuario;
            cadastroAcervo(idUltimoUsuario);
            
        }
    }
    ajax.send();
}