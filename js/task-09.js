const colorBtn = document.querySelector(`button.change-color`);
const colorSpan = document.querySelector(`span.color`);
const colorBody = document.querySelector(`body`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  colorBody.style.backgroundColor = color;
  colorSpan.textContent = color;

})