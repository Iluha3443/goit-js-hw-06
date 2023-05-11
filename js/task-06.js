const inputFocus = document.querySelector(`#validation-input`);

inputFocus.addEventListener('blur', () => {
    const inputValue = inputFocus.value;
    const maxLen = inputFocus.getAttribute(`data-length`);
    

    if (inputValue.length > maxLen) {
        inputFocus.classList.add(`valid`);
        inputFocus.classList.remove(`invalid`);
    } else {
        inputFocus.classList.add(`invalid`)
        inputFocus.classList.remove(`valid`);
    }

});