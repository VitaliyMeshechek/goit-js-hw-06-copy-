const refs = {
  increaseСounterBtn: document.querySelector('[data-action="increment"]'),
  decreaseСounterBtn: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector('#value'),
};

let counterValue = 0;

refs.increaseСounterBtn.addEventListener('click', () => {
   console.log(counterValue += 1);
   document.getElementById('value').textContent = counterValue;
});
refs.decreaseСounterBtn.addEventListener('click', () => {
  console.log(counterValue -= 1);
  document.getElementById('value').textContent = counterValue;
});
