let form_login = document.querySelector("#form_login");
let email_login = document.querySelector("#input_email");
let senha_login = document.querySelector("#input_pass");


function verificarUsuario(event) {
    event.preventDefault();
    // luana@gmail.com
    // nuvem11

    let email = email_login.value;
    let senha = senha_login.value;
    

    let params = "email="+email+"&senha="+senha;

    let ajax =  new XMLHttpRequest();
    ajax.open("POST", "http://localhost:3333/sessao");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            let resposta = JSON.parse(ajax.responseText);
            
            if(resposta.length != 0){
                criarSessao(resposta[0]);
            }
            else {
                alert("Usuaário não encontrado!")
            }
        }
    }
    ajax.send(params);
}

function criarSessao(dados) {
    console.log(dados);
    

    let usuario = {
        id: dados.idUsuario,
        nome: dados.nomeUsuario,
        acervo: dados.nomeAcervo,
        idAcervo: dados.fkAcervo
    }

    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    window.location = "./../dashboard/index.html";
}


form_login.addEventListener('submit', verificarUsuario);