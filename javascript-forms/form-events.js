function handleFocus(event) {
  console.log('Focus event fired.');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired.');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

const $focusControl = document.querySelector('#user-name');
const $blurControl = document.querySelector('#user-name');
const $inputControl = document.querySelector('#user-name');

$focusControl.addEventListener('focus', handleFocus);
$blurControl.addEventListener('blur', handleBlur);
$inputControl.addEventListener('input', handleInput);
