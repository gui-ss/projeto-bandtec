var email_login = 'admin@admin.com';
var pass_login = 'admin';

var buttonLogin = document.querySelector('#btlogin');

function log(e) {
    e.preventDefault();

    let user_login = document.querySelector('#input_email').value;
    let user_pass = document.querySelector('#input_pass').value;

    if(user_login == email_login && user_pass == pass_login) {
        window.location.href = './../sistema_web/index.html'
    }

    console.log('vrau')
}

buttonLogin.addEventListener("click", log);