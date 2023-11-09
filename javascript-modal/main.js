const $clickModal = document.querySelector('.modalButton');
const $clickPopUp = document.querySelector('.hide');
function popup() {
  $clickPopUp.className = 'container-popup';
}
$clickModal.addEventListener('click', popup);

const $clickNo = document.querySelector('.container-popup');
function popdown() {
  $clickNo.className = 'hide';
}
$clickNo.addEventListener('click', popdown);
