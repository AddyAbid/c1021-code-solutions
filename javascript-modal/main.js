var $openModal = document.querySelector('.modal');
var $modal = document.querySelector('.absolute');
var $noButton = document.querySelector('.button-no');
$openModal.addEventListener('click', toggleModal);
$noButton.addEventListener('click', toggleModal);
var tracker = true;

function toggleModal(event) {

  if (tracker === true) {
    $modal.classList.remove('hidden');
    tracker = false;
  } else {
    tracker = true;
    $modal.classList.add('hidden');
  }
}
