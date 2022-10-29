const list = document.querySelector('#categories');
const allCategories = list.children;
console.log(`Number of categories: ${allCategories.length}`);
const items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
   const category = item.firstElementChild.textContent;
   console.log(`Category: ${category}`);
   const elements = item.lastElementChild.children.length;
   console.log(`Elements: ${elements}`);
});



