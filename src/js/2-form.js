const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};
form.email.value = formData.email;
form.message.value = formData.message;
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.email.value || !form.message.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
});
