let nomeAcervo = document.querySelector("#input_nome_acervo");
let telefoneAcervo = document.querySelector("#input_telefone_acervo");
let tipoAcervo = document.querySelector("#input_tipo_acervo");
let cnpjAcervo = document.querySelector("#input_cnpj_acervo");
let ruaAcervo = document.querySelector("#input_rua_acervo");
let numeroAcervo = document.querySelector("#input_numero_acervo");
let cidadeAcervo = document.querySelector("#input_cidade_acervo");
let bairroAcervo = document.querySelector("#input_bairro_acervo");
let estadoAcervo = document.querySelector("#input_estado_acervo");
let cepAcervo = document.querySelector("#input_cep_acervo");

function cadastroAcervo(fkUsuario) {

    let params = `nomeAcervo=${nomeAcervo.value}&telefoneAcervo=${telefoneAcervo.value}&cnpj=${cnpjAcervo.value}&tipoAcervo=${tipoAcervo.value}&ruaAvenida=${ruaAcervo.value}&numero=${numeroAcervo.value}&bairro=${bairroAcervo.value}&cidade=${cidadeAcervo.value}&estado=${estadoAcervo.value}&cep=${cepAcervo.value}&fkUsuario=${fkUsuario}`;

    let ajax = new XMLHttpRequest();
    ajax.open('POST', "http://localhost:3333/acervo");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            let resposta = ajax.responseText;
        }
    }

    ajax.send(params);
}