let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');

incrementBtn.addEventListener("click", () => {
    counterValue++;
    span.innerHTML = counterValue;
});

decrementBtn.addEventListener("click", () => {
    counterValue--;
    span.innerHTML = counterValue;
});
