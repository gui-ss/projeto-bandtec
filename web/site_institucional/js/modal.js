var modal = document.getElementById('modal-login');
var closeIcon = document.getElementById('icon-close-modal');
var contModal = document.getElementById('container-modal');

function openModal () {
    modal.classList.add('modal-active');
}

function closeModal() {
   if(event.target == modal || event.target == closeIcon || event.target == contModal) {
        modal.classList.remove('modal-active');
   }
}

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