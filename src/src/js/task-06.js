
const refs = {
   input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur() {
   if (refs.input.getAttribute('data-length') > refs.input.value.length) {
      refs.input.classList.add('invalid');
   } else {
      refs.input.classList.remove('invalid');
      refs.input.classList.add('valid');
   }
}
