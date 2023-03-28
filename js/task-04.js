let value = 0;
const valueEl = document.querySelector('#value');
const incrementEL = document.querySelector('[data-action="increment"]');
const decrementEL = document.querySelector('[data-action="decrement"]');

incrementEL.addEventListener('click', () => {
  value += 1;
  valueEl.textContent = value;
});

decrementEL.addEventListener('click', () => {
  value -= 1;
  valueEl.textContent = value;
});
