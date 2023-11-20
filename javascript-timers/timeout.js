setTimeout(message, 2000);

const $changedMessage = document.querySelector('.message');

function message() {
  $changedMessage.textContent = 'Hello There';
}
