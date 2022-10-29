const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
    const ingredientsListEl = document.querySelector('#ingredients');
    const elements = ingredients.map(ingredient => {
    const itemsEl = document.createElement('li');
    itemsEl.textContent = ingredient;
    itemsEl.classList.add('item');
    return itemsEl;
  })
console.log(elements);
  
ingredientsListEl.append(...elements);