setInterval(countDown, 1000);

const $countDown = document.querySelector('.countdown-display');
let i = 4;

function countDown() {
  i--;
  if (i > 0) {
    $countDown.textContent = i;
  } else {
    $countDown.textContent = '~Earth Beeeeloooww Us~';
    clearInterval(countDown);
  }
}
