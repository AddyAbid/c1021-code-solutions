let currentCount = 3;

function countDown() {
  console.log(currentCount);
  currentCount--;
  if (currentCount === 0) {
    setTimeout(function () {
      console.log('Blast off!');
      clearInterval(timerId);
    }, 1000);
  }
}

const timerId = setInterval(countDown, 1000);
