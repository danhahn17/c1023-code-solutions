const $contactForm = document.querySelector('#contact-form');
const formValues = {};

function completedForm(event) {
  formValues.name = $contactForm['user-name'].value;
  formValues.email = $contactForm['user-email'].value;
  formValues.message = $contactForm['user-message'].value;

  console.log(formValues);
  event.preventDefault();
  document.querySelector('#contact-form').reset();
}

$contactForm.addEventListener('submit', completedForm);
