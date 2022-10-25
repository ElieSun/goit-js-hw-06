const controlInput = document.querySelector('#font-size-control');
const spanText = document. querySelector('#text');
controlInput.addEventListener("input", () => {
    let size = controlInput.value;
    spanText.style.fontSize = `${size}px`;
});
