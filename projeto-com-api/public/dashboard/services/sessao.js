let dadosUsuario = {};
let span_acervo = document.querySelector("#nomeAcervo");
let span_usuario = document.querySelector("#nomeUsuario");

function verificarLogin() {
    if(sessionStorage.usuario == undefined) {
        window.location = "../site_institucional/index.html";     
    }
    else {
        dadosUsuario = JSON.parse(sessionStorage.usuario);
        span_acervo.innerHTML = dadosUsuario.acervo;  
        span_usuario.innerHTML = dadosUsuario.nome;
    }
}

function logout() {
    sessionStorage.removeItem('usuario');
    verificarLogin();
}

verificarLogin();