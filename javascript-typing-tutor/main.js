var $span = document.querySelectorAll('span');

document.addEventListener('keydown', typeKeys);
var currentLetter = 0;
function typeKeys(event) {

  if ($span[currentLetter].textContent === event.key) {
    $span[currentLetter].classList.remove('red');
    $span[currentLetter].classList.remove('underline-red');
    $span[currentLetter].classList.add('green');
    $span[currentLetter].classList.remove('underline');
    currentLetter++;
    $span[currentLetter].classList.add('underline');
  } else {
    $span[currentLetter].classList.add('red');
    $span[currentLetter].classList.add('underline-red');
  }
}
