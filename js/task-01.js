
const listEl = document.querySelector('#categories');
const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    const elements = item.querySelectorAll('li');

    console.log(`Category: ${titleEl.textContent}\nElements: ${elements.length}`);
})

