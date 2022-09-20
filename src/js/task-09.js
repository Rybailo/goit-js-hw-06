function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector("span.color");

changeBtn.addEventListener("click", (evt) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
});
