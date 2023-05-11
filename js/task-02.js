const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.getElementById(`ingredients`)
// console.log(listEl)




const ingredientsMarkup = ingredients.reduce((acc, ingredient) => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  listEl.append(itemEl);
  
  return acc;

}, '');
  




