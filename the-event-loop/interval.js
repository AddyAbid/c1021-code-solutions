let currentCount = 3;

function countDown() {
  console.log(currentCount);
  currentCount--;
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(timerId);
  }
}

const timerId = setInterval(countDown, 1000);
