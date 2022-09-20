const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: `, categoriesRef.length);

categoriesRef.forEach((element) => {
  const categoriesTitle = element.querySelector("h2").textContent;
  const categoriesEl = element.querySelectorAll("li");
  console.log(`Category:`, categoriesTitle);
  console.log(`Elements:`, categoriesEl.length);
});
