 





const element = document.querySelectorAll(`li.item`);
 console.log(element)

 const result = element.length;
 console.log(`Number of categories:${result}`);




element.forEach(elem => {
     const titleEl = elem.firstElementChild
     console.log(`Category: ${titleEl.textContent}`)
     
     const getElements = elem.querySelectorAll(`li`);
     console.log(`Elements: ${getElements.length}`)

});

