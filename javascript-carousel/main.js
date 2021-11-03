var $rightArrow = document.querySelector('.right-arrow');
var $leftArrow = document.querySelector('.left-arrow');
var $imgSlides = document.querySelectorAll('.slides');
var $dotContainer = document.querySelector('.icon-container');
var $progressDots = document.querySelectorAll('.dot');

$rightArrow.addEventListener('click', clickRight);
$leftArrow.addEventListener('click', clickLeft);
$dotContainer.addEventListener('click', progressDotClick);

var imgCounter = 1;

function progressDotClick(event) {
  if (!event.target.matches('.dot')) {
    return;
  }
  for (var i = 0; i < $progressDots.length; i++) {
    var dotsList = $progressDots[i];
    imgCounter = Number(event.target.getAttribute('dataid'));
    if (event.target === dotsList) {
      dotsList.className = 'fas fa-circle pd-lf dot';
    } else {
      dotsList.className = 'far fa-circle pd-lf dot';
    }
  }
  var dotView = event.target.getAttribute('data-view');
  for (var j = 0; j < $imgSlides.length; j++) {
    var imgDataView = $imgSlides[j].getAttribute('data-view');

    if (imgDataView === dotView) {
      $imgSlides[j].className = 'slides';
    } else {
      $imgSlides[j].className = 'hidden slides';
    }
  }
}

function clickRight(event) {
  imgCounter++;
  for (var i = 0; i < $imgSlides.length; i++) {
    var dataIdNumber = $imgSlides[i].getAttribute('dataid');
    var imgDataView = $imgSlides[i].getAttribute('data-view');
    if (imgCounter === Number(dataIdNumber)) {
      for (var j = 0; j < $progressDots.length; j++) {
        var dotAttribute = $progressDots[j].getAttribute('data-view');
        if (imgDataView === dotAttribute) {
          $progressDots[j].className = 'fas fa-circle pd-lf dot';
        } else {
          $progressDots[j].className = 'far fa-circle pd-lf dot';
        }
      }
      $imgSlides[i].className = 'slides';
    } else {
      $imgSlides[i].className = 'hidden slides';
    }
  }
  if (imgCounter > 4) {
    imgCounter = 0;
  }
}

function clickLeft(event) {
  imgCounter--;
  if (imgCounter < 1) {
    imgCounter = 5;
  }
  for (var i = 0; i < $imgSlides.length; i++) {
    var dataIdNumber = $imgSlides[i].getAttribute('dataid');
    if (imgCounter === Number(dataIdNumber)) {
      $imgSlides[i].className = 'slides';
    } else {
      $imgSlides[i].className = 'hidden slides';
    }
    for (var j = 0; j < $progressDots.length; j++) {
      var dotIdNumber = $progressDots[j].getAttribute('dataid');
      if (imgCounter === Number(dotIdNumber)) {
        $progressDots[j].className = 'fas fa-circle pd-lf dot';
      } else {
        $progressDots[j].className = 'far fa-circle pd-lf dot';
      }
    }
  }
}

function imgSlide() {
  imgCounter++;
  if (imgCounter > 5) {
    imgCounter = 1;
  }
  for (var i = 0; i < $imgSlides.length; i++) {
    var imgId = $imgSlides[i].getAttribute('dataid');
    if (imgCounter === Number(imgId)) {
      $imgSlides[i].className = 'slides';
    } else {
      $imgSlides[i].className = 'hidden slides';
    }
    for (var j = 0; j < $progressDots.length; j++) {
      var dotIdNumber = $progressDots[j].getAttribute('dataid');
      if (imgCounter === Number(dotIdNumber)) {
        $progressDots[j].className = 'fas fa-circle pd-lf dot';
      } else {
        $progressDots[j].className = 'far fa-circle pd-lf dot';
      }
    }
  }
}

setInterval(imgSlide, 3000);
