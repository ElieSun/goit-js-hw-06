const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const block = document.querySelector('#ingredients');
const listItems = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add('item');
  
});

block.append(listItems);
