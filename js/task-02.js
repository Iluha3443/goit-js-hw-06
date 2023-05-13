const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngridients = document.getElementById(`ingredients`)




const listElements = [];
  
const jkd = ingredients.forEach((ingredient) => {
  const listEl = document.createElement(`li`);
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  listElements.push(listEl);
});

 listIngridients.append(...listElements)
  



