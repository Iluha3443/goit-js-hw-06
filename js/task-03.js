const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
  
const markupParents = document.querySelector(`.gallery`);
 markupParents.style.display = `flex`;
 markupParents.style.gap = `30px`;
const elements = [];


images.forEach((image) => {
  const imgEl = `<li><img src="${image.url}" alt="${image.alt}"/></li>`;
  elements.push(imgEl);
});

 markupParents.insertAdjacentHTML('beforeend', elements);

  // Чудово що стилі для linkEl можна додати в imgEl, але не зрозуміло як саме, скоріш за все я роблю якусь синтаксичну помилку,
  // буду вдячний за допомогу

  
const linkEl = document.querySelectorAll(`.gallery img`);

  linkEl.forEach((link) => {
   link.style.width = `300px`;
   link.style.height = `200px`;
  });









// const markupParents = document.querySelector(`.gallery`);
// markupParents.style.display = `flex`;
// markupParents.style.gap = `30px`;



// images.forEach((image) => {
//   const imgEl = `<li><img src="${image.url}" alt="${image.alt}"/></li>`;
  
   
// });
//  markupParents.insertAdjacentHTML('beforeend', markupEl);
// const linkEl = document.querySelectorAll(`.gallery img`);

//  linkEl.forEach((link) => {
//   link.style.width = `300px`;
//    link.style.height = `200px`;
//  });

