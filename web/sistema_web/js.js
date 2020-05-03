function abrir(){
    document.getElementById("menu").classList.add("menuOpened");
    document.getElementById("principal").style.width="80%";
   
    document.getElementById("open").style.display="block";
    document.getElementById("closed").style.display="none";

    var variavel = document.querySelectorAll('.funcao');
    for (let i = 0; i < variavel.length; i++) {
        variavel[i].style.display="block";
    }

    var circulo = document.querySelectorAll('.circle');
    for (let i = 0; i < circulo.length; i++) {
        circulo[i].style.width="17%";
    }
   
    document.getElementById("chart").style.width="90%";
    document.getElementById("chart-area").style.width="90%";
    document.getElementById("chart-area").style.height="90%";

    document.getElementById("labelSwitch").style.display = 'block';
}

function fechar(){
    document.getElementById("menu").classList.remove("menuOpened");
    document.getElementById("principal").style.width="95%";
    var variavel = document.querySelectorAll('.funcao');

    document.getElementById("open").style.display="none";
    document.getElementById("closed").style.display="block";

    for (let i = 0; i < variavel.length; i++) {
        variavel[i].style.display="none";
    }

    var circulo = document.querySelectorAll('.circle');
    for (let i = 0; i < circulo.length; i++) {
        circulo[i].style.width="15%";
    }

    document.getElementById("chart").style.width="100%";

    document.getElementById("labelSwitch").style.display = 'none';

}

function enableDarkMode(){
    
    var teste = document.getElementById('checkDarkMode');
    if(teste.checked){
        document.body.classList.add('darkMode');
    }else{
        document.body.classList.remove('darkMode');
    }
}

