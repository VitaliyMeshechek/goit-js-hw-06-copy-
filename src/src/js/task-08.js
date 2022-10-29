const refs = {
   form: document.querySelector('.login-form'),
};

refs.form.addEventListener("submit", onInputChange);

function onInputChange(event) {
   event.preventDefault();
   const {
    elements: {email, password}
  } = event.currentTarget;
  console.log(email.value, password.value);

  if (email.value === "" || password.value === "") {
   alert(`Всі поля повинні бути заповненні`)
  }
  console.log('email: ${email.value}, password: ${password.value}');
  event.currentTarget.reset();
};

