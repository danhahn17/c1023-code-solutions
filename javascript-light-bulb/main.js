const $turnLightOn = document.querySelector('.light-bulb-off');
const $turnContainerOn = document.querySelector('.container-off');
// const $turnLightOff = document.querySelector('.light-bulb-on');
// const $turnContainerOff = document.querySelector('.container-on');

function light() {
  if ($turnLightOn.className === 'light-bulb-off') {
    $turnLightOn.className = 'light-bulb-on';
    $turnContainerOn.className = 'container-on';
  } else {
    $turnLightOn.className = 'light-bulb-off';
    $turnContainerOn.className = 'container-off';
  }
}

$turnLightOn.addEventListener('click', light);
