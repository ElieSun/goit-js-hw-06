const textInput = document.querySelector('#validation-input');
textInput.addEventListener("blur", checkLength)
function checkLength() {
    let validLength = textInput.dataset.length;
    let strLength = textInput.value.length;
    if (validLength == strLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
};
