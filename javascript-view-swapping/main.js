const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

function matchymatchy(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === event.target) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
    const dataViewAtt = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewElements.length; i++) {
      if ($viewElements[i].getAttribute('data-view') === dataViewAtt) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', matchymatchy);
