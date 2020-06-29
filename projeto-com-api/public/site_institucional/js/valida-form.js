// validação do formulário de cadastro -----------------------------------------------

/* enquanto o usuário digita um campo, uma validação (que está armazenada em uma função disparada por onkeyup) 
será acionada, caso todas as variáveis globais sejam iguais à TRUE, o usuário será cadastrado com sucesso,
caso contrário, será exibido uma mensagem de erro. */


let validado_nome = false;
let validado_email = false;
let validado_login = false;
let validado_senha = false;
let validado_nasc = false;
let validado_cpf = false;
let validado_tel = false;

let validado_nomeAc = false;
let validado_telAc = false;
let validado_tipo = false;
let validado_cnpj = false;
let validado_cep = false;
let validado_es = false;
let validado_cidade = false;
let validado_bairro = false;
let validado_rua = false;


// CADASTRO DE USUÁRIO

function validarNome() {
    let nome_usuario = input_nome_cad.value.trim();
    let msg = document.getElementById('mensagem_nome');

    if (nome_usuario) {
        msg.innerHTML = 'Nome OK!';
        msg.style.color = '#008000';
        validado_nome = true;

    } else {
        msg.innerHTML = 'Digite seu nome';
        msg.style.color = '#0078d7';

    }

}

function validarEmail() {
    let email = input_email_cad.value;
    let msg = document.getElementById('mensagem_email');

    msg.innerHTML = '';

    if (email) {
        for (let i = 0; i <= email.length - 1; i++) {

            if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0 && email.indexOf(' ') == -1) {
                msg.innerHTML = 'Email OK!';
                msg.style.color = '#008000'
                validado_email = true;

            } else {
                msg.innerHTML = 'Digite um email válido';
                msg.style.color = '#0078d7'
            }
        }
    }
}

function validarSenha() {
    let senha = input_pass_cad.value;
    let msg = document.getElementById('mensagem_senha');

    msg.innerHTML = '';

    if (senha) {
        for (let i = 0; i <= senha.length - 1; i++) {

            if (senha.length >= 8) {
                msg.innerHTML = 'Senha OK!';
                msg.style.color = '#008000';
                validado_senha = true;

            } else {
                msg.innerHTML = 'Sua senha deve conter pelo menos 8 caracteres'
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validarLogin() {
    let login = input_login_cad.value.trim();
    let msg = document.getElementById('mensagem_login');

    msg.innerHTML = '';

    if (login) {
        for (let i = 0; i <= login.length - 1; i++) {

            if (login.length >= 8) {
                msg.innerHTML = 'Login OK!'
                msg.style.color = '#008000';
                validado_login = true;
            }
            else {
                msg.innerHTML = 'Seu login deve conter pelo menos 8 caracteres'
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validarNasc() {
    let nasc_usuario = input_datanasc_cad.value;
    msg = document.getElementById('mensagem_nasc');


    if (nasc_usuario) {
        for (let i = 0; i <= nasc_usuario.length - 1; i++) {

            if (nasc_usuario.length == 10 && nasc_usuario.indexOf('/') >= 0 && nasc_usuario.indexOf(' ') == -1) {
                msg.innerHTML = 'Data de nascimento OK!';
                msg.style.color = '#008000'
                validado_nasc = true;

            } else {
                msg.innerHTML = 'O formato válido é: mm/dd/aaaa'
                msg.style.color = '#0078d7'
            }
        }
    }

}

function validarCPF() {
    let cpf = input_cpf_cad.value.trim();
    let msg = document.getElementById('mensagem_cpf');

    msg.innerHTML = '';

    if (cpf) {
        for (let i = 0; i <= cpf.length - 1; i++) {

            if (cpf.length == 14) {
                msg.innerHTML = 'CPF OK!'
                msg.style.color = '#008000';
                validado_cpf = true;
            }
            else {
                msg.innerHTML = 'Digite seu CPF'
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validarTel() {
    let telefone = input_telefone.value.trim();
    let msg = document.getElementById('mensagem_tel');

    if (telefone) {
        msg.innerHTML = 'Telefone OK!';
        msg.style.color = '#008000';
        validado_tel = true;

    } else {
        msg.innerHTML = 'Digite seu telefone';
        msg.style.color = '#0078d7';

    }

}

// CADASTRO DE ACERVO

function validarAcervo() {
    let acervo = input_nome_acervo.value.trim();
    let msg = document.getElementById('mensagem_acervo');

    if (acervo) {
        msg.innerHTML = 'Nome OK!';
        msg.style.color = '#008000';
        validado_nomeAc = true;

    } else {
        msg.innerHTML = 'Digite o nome do seu acervo';
        msg.style.color = '#0078d7';

    }
}

function validarTelAc() {
    let telefone = input_telefone_acervo.value.trim();
    let msg = document.getElementById('mensagem_telAc');

    if (telefone) {
        msg.innerHTML = 'Telefone OK!';
        msg.style.color = '#008000';
        validado_telAc = true;

    } else {
        msg.innerHTML = 'Digite seu telefone';
        msg.style.color = '#0078d7';

    }

}

function validarTipo() {
    let acervo = input_tipo_acervo.value.trim();
    let msg = document.getElementById('mensagem_tipo');

    if (acervo) {
        msg.innerHTML = 'Tipo de acervo OK!';
        msg.style.color = '#008000';
        validado_tipo = true;

    } else {
        msg.innerHTML = 'Ex: biblioteca, sebo, etc.';
        msg.style.color = '#0078d7';

    }
}

function validarCNPJ() {
    let cnpj = input_cnpj_acervo.value.trim();
    let msg = document.getElementById('mensagem_cnpj');

    msg.innerHTML = '';

    if (cnpj) {
        for (let i = 0; i <= cnpj.length - 1; i++) {

            if (cnpj.length == 18) {
                msg.innerHTML = 'CNPJ OK!'
                msg.style.color = '#008000';
                validado_cnpj = true;
            }
            else {
                msg.innerHTML = 'Digite o CNPJ no formato: 99.999.999/9999-99'
                msg.style.color = '#0078d7';
            }
        }
    }
}

function validarRua() {
    let rua = input_rua_acervo.value.trim();
    let msg = document.getElementById('mensagem_rua');

    if (rua) {
        msg.innerHTML = 'Lagradouro OK!';
        msg.style.color = '#008000';
        validado_rua = true;

    } else {
        msg.innerHTML = 'Informe o Lagradouro';
        msg.style.color = '#0078d7';

    }
}

function validarBairro() {
    let bairro = input_bairro_acervo.value.trim();
    let msg = document.getElementById('mensagem_bairro');

    if (bairro) {
        msg.innerHTML = 'Bairro OK!';
        msg.style.color = '#008000';
        validado_bairro = true;

    } else {
        msg.innerHTML = 'Informe o Bairro';
        msg.style.color = '#0078d7';

    }
}

function validarCidade() {
    let cidade = input_cidade_acervo.value.trim();
    let msg = document.getElementById('mensagem_cidade');

    if (cidade.length >= 3) {
        msg.innerHTML = 'Cidade OK!';
        msg.style.color = '#008000';
        validado_cidade = true;

    } else {
        msg.innerHTML = 'Informe a Cidade';
        msg.style.color = '#0078d7';

    }
}


function validarEstado() {
    let es = input_estado_acervo.value.trim();
    let msg = document.getElementById('mensagem_es');

    msg.innerHTML = '';

    if (es) {
        for (let i = 0; i <= es.length - 1; i++) {

            if (es.length == 2) {
                msg.innerHTML = 'Estado OK!'
                msg.style.color = '#008000';
                validado_es = true;
            }
            else {
                msg.innerHTML = 'Informe a sigla do Estado'
                msg.style.color = '#0078d7';
            }
        }
    }
}


function validarCEP() {
    let cep = input_cep_acervo.value.trim();
    let msg = document.getElementById('mensagem_cep');

    msg.innerHTML = '';

    if (cep) {
        for (let i = 0; i <= cep.length - 1; i++) {

            if (cep.length == 9) {
                msg.innerHTML = 'CEP OK!'
                msg.style.color = '#008000';
                validado_cep = true;
            }
            else {
                msg.innerHTML = 'Informe um CEP no formato: xxxxx-xxx'
                msg.style.color = '#0078d7';
            }
        }
    }
}

