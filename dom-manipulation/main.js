let counter = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function increaseCounter() {
  counter++;
  $clickCount.textContent = 'Clicks: ' + counter;

  if (counter >= 0 && counter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (counter >= 4 && counter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (counter >= 7 && counter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (counter >= 10 && counter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (counter >= 13 && counter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', increaseCounter);
