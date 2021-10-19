var $circle = document.querySelector('.circle');
var $bodyColor = document.querySelector('.bg');
$circle.addEventListener('click', handleSwitch);
function handleSwitch(event) {

  if ($circle.className === 'circle color gray') {
    $circle.className = 'circle color light';
    $bodyColor.className = 'bg light';
  } else {
    $circle.className = 'circle color gray';
    $bodyColor.className = 'bg dark';
  }
}
