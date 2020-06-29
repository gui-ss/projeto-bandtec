function abrir() {
    document.getElementById("menu").classList.add("menuOpened");
    document.getElementById("principal").style.width = "80%";

    document.getElementById("open").style.display = "block";
    document.getElementById("closed").style.display = "none";

    var variavel = document.querySelectorAll('.funcao');
    for (let i = 0; i < variavel.length; i++) {
        variavel[i].style.display = "block";
    }

    document.getElementById("labelSwitch").style.display = 'block';
}

function fechar() {
    document.getElementById("menu").classList.remove("menuOpened");
    document.getElementById("principal").style.width = "95%";
    var variavel = document.querySelectorAll('.funcao');

    document.getElementById("open").style.display = "none";
    document.getElementById("closed").style.display = "block";

    for (let i = 0; i < variavel.length; i++) {
        variavel[i].style.display = "none";
    }


    document.getElementById("labelSwitch").style.display = 'none';

}

function enableDarkMode() {

    var teste = document.getElementById('checkDarkMode');
    if (teste.checked) {
        document.body.classList.add('darkMode');
        let logo = document.getElementById('open');
        logo.src = 'img/logos/logo-white.png';
    } else {
        document.body.classList.remove('darkMode');
        let logo = document.getElementById('open');
        logo.src = 'img/logos/logo-dark.png';
    }
}


// ----------------------------------------

let botoes = document.querySelectorAll('.funcao');

botoes.forEach(botao => {
    botao.addEventListener('click', chamarpagina)
});

function chamarpagina(event) {
    let caminho = event.target.getAttribute('id');
    fechar();
    setTimeout(function () {
        window.location.href = `${caminho}.html`;
    }, 1000);
}