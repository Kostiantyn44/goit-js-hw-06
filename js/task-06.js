const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const input = event.target;
  const inputLength = input.getAttribute('data-length');
  const inputValue = input.value.length;

  if (inputValue < inputLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
}
