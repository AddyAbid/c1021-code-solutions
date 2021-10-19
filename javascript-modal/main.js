var $openModal = document.querySelector('.modal');
var $modal = document.querySelector('.absolute');
var $noButton = document.querySelector('.button-no');
$openModal.addEventListener('click', toggleModal);
$noButton.addEventListener('click', toggleModal);
var modalOff = true;

function toggleModal(event) {

  if (modalOff === true) {
    $modal.classList.remove('hidden');
    modalOff = false;
  } else {
    modalOff = true;
    $modal.classList.add('hidden');
  }
}
