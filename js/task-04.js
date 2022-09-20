let counterValue = 0;

const result = document.querySelector("#value");
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');

minus.addEventListener("click", () => {
  counterValue -= 1;
  result.textContent = counterValue;
});
plus.addEventListener("click", () => {
  counterValue += 1;
  result.textContent = counterValue;
});
