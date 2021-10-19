var $openModal = document.querySelector('.modal');
var $modal = document.querySelector('.absolute');
var $noButton = document.querySelector('.button-no');
$openModal.addEventListener('click', toggleModal);
$noButton.addEventListener('click', toggleModal);
function toggleModal(event) {
  if ($modal.className === 'absolute hidden') {
    $modal.classList.remove('hidden');
  } else {
    $modal.classList.add('hidden');
  }
}
