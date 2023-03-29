const rangeEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.dir(text)
rangeEl.addEventListener("input", sizeOfText);
function sizeOfText(event) {
    const range = event.target;
    const rangeValue = range.value;
    text.style.fontSize = `${rangeValue}px`;
}