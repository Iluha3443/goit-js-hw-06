 const counterEl = document.querySelector(`#value`);
 const decrementBtn = document.querySelector(`[data-action="decrement"]`)
 const incrementBtn = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;
 
 incrementBtn.addEventListener(`click`, () => {

    counterValue++;
    counterEl.textContent = counterValue;

});

 decrementBtn.addEventListener(`click`, () => {
     
    counterValue--;
    counterEl.textContent = counterValue;
 })







