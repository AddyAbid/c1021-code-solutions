var $h1 = document.querySelector('h1');
var intervalId = 4;
function countDown() {
  intervalId--;
  $h1.textContent = intervalId;
  if (intervalId === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(time);
  }
}

var time = setInterval(countDown, 1000);
