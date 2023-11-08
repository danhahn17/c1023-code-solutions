const $contactForm = document.querySelector('#contact-form');
const formValues = {};

function completedForm(event) {
  console.log(formValues);
  event.preventDefault();

  formValues.name = $contactForm['user-name'].value;
  formValues.email = $contactForm['user-email'].value;
  formValues.message = $contactForm['user-message'].value;

  $contactForm.reset();
}

$contactForm.addEventListener('submit', completedForm);
