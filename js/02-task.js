const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
  "Марципани",
];

const ulEl = document.querySelector("#ingredients");

const liEl = ingredients.map((item) => {
  const temp = document.createElement("li");
  temp.textContent = item;
  return temp;
}); // ;

ulEl.append(...liEl);
