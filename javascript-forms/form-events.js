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

const $focusName = document.querySelector('#user-name');
const $blurName = document.querySelector('#user-name');
const $inputName = document.querySelector('#user-name');

$focusName.addEventListener('focus', handleFocus);
$blurName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

const $focusEmail = document.querySelector('#user-email');
const $blurEmail = document.querySelector('#user-email');
const $inputEmail = document.querySelector('#user-email');

$focusEmail.addEventListener('focus', handleFocus);
$blurEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

const $focusMessage = document.querySelector('#user-message');
const $blurMessage = document.querySelector('#user-message');
const $inputMessage = document.querySelector('#user-message');

$focusMessage.addEventListener('focus', handleFocus);
$blurMessage.addEventListener('blur', handleBlur);
$inputMessage.addEventListener('input', handleInput);
