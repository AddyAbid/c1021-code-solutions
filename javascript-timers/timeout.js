var $h1 = document.querySelector('h1');

function countDown() {
  $h1.textContent = 'Hello There';
}

setTimeout(countDown, 2000);
