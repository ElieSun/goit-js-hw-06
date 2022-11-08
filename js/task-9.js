function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
const refs = {
    span: document.querySelector('.color'),
    button : document.querySelector('.change-color'),
    body: document.body,

}
refs.button.addEventListener('click', changeColor);
function changeColor() {
const color = getRandomHexColor();
refs.body.setAttribute('style', `background-color: ${color}`);
refs.span.textContent = color;
}