var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', classActive);

function classActive(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    var $tabList = $tab[i];
    if (event.target === $tabList) {
      $tabList.className = 'tab active';
    } else {
      $tabList.className = 'tab';
    }

    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      var $viewData = $view[j].getAttribute('data-view');
      if ($viewData === $dataView) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
}
