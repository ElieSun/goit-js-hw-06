const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const block = document.querySelector('#ingredients');
let listItems = ingredients.map((ingredient) => {
  let list = document.createElement("li");
  list.classList.add('item');
  list.textContent = ingredient;
  return list;
});
block.append(...listItems);
