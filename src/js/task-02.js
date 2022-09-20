const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const a = document.querySelector("#ingredients");
const elements = [];

for (const ingredient of ingredients) {
  const navItem = document.createElement("li");
  navItem.textContent = ingredient;
  navItem.classList.add("item");
  console.log(navItem);
  elements.push(navItem);
}
console.log(elements);
a.append(...elements);
