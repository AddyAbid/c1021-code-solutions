var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var formValues = {
    name: $contactForm.name.value,
    email: $contactForm.email.value,
    message: $contactForm.message.value
  };
  console.log('Message Data:', formValues);
  $contactForm.reset();
}
