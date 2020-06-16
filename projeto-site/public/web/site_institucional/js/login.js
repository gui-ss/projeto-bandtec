
function cadastro(){
    document.getElementById('removeLogin').style.display="none";
    document.getElementById('imagemLogin').style.display="none";
    document.getElementById('addCadastro').style.display="block";
    document.getElementById('imagemCadastro').style.display="block";
}

function voltarLogin(){
    document.getElementById('removeLogin').style.display="block";
    document.getElementById('imagemLogin').style.display="block";
    document.getElementById('addCadastro').style.display="none";
    document.getElementById('imagemCadastro').style.display="none";
}


var buttonLogin = document.querySelector('#btlogin');
var buttonCad = document.querySelector('#btcad');

var email = '';
var pass = '';

function cadastrar(e){
    e.preventDefault();

    if(input_pass_cad.value == input_pass_confirm.value){
        email = document.getElementById('input_email_cad').value;
        pass = document.getElementById('input_pass_cad').value;
        alert('Você foi cadastrado :)');
        voltarLogin();
    } else {
        alert('As senhas não coincidem');
        document.getElementById('input_pass_confirm').value = '';
        document.getElementById('input_pass_cad').value = '';
    }
}

function log(e) {
    e.preventDefault();

    let user_login = document.querySelector('#input_email').value;
    let user_pass = document.querySelector('#input_pass').value;

    if(user_login == '' && user_pass == ''){
        alert('Você deve preencher os campos :)');
    } else if(user_login == email && user_pass == pass) {
        window.location.href = 'splash.html';
    } else {
        alert('Login ou senha incorreta');
        document.getElementById('input_email').value = '';
        document.getElementById('input_pass').value = '';
    }
}



buttonLogin.addEventListener("click", log);
buttonCad.addEventListener("click", cadastrar);