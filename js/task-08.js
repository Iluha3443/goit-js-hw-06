const formLoginValue = document.querySelector(`.login-form`);
const valueControl = document.querySelectorAll(`label input`);
const firstInput = valueControl[0];
const secondInput = valueControl[1];

formLoginValue.addEventListener('submit', (event) => {
     event.preventDefault();
    if (firstInput.value === ''||secondInput.value === '') {
         alert(`Для отправки формы обязательно заполнить все поля`);
         return;
     };
     
     const { email, password } = event.target.elements;
     const formUser = {
          email: email.value,
          password: password.value,
          
    };
     console.log(formUser);
     event.target.reset();
})
