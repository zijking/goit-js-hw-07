// console.log("start");

const categoriesItemEl = document.querySelectorAll(".item");
console.log(`У списку ${categoriesItemEl.length} категорії`);
// console.dir(categoriesItemEl);

const titleEl = document.querySelectorAll("h2");
const ulEl = document.querySelectorAll(".item ul");

// console.log(ulEl[0]);

for (let i = 0; i < titleEl.length; i++) {
  //   console.log(titleEl[0]);
  console.log("Категорія:", titleEl[i].textContent);
  console.log("Кількість елементів:", ulEl[i].querySelectorAll("li").length);
}
