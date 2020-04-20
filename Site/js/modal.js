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