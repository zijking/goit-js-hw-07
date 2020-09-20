function destroyBoxes() {
  const boxConEl = document.querySelector("#boxes");
  boxConEl.innerHTML = "";
}

function createBoxes(amount) {
  const divMasEl = [];

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = 30 + i * 10 + "px";
    divEl.style.height = 30 + i * 10 + "px";
    divEl.style.backgroundColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
    // console.log(`rgb(${randomRgb()},${randomRgb()},${randomRgb()})`);
    divMasEl.push(divEl);
  }

  const boxes = document.querySelector("#boxes");
  boxes.append(...divMasEl);
}

function randomRgb() {
  const r = getRandomIntInclusive(0, 255);

  return r;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}

const renderBtn = document.querySelector("[data-action='render']");
const destroyBtn = document.querySelector('[data-action="destroy"]');
// console.log(renderBtn);
const inputAmoutEl = document.querySelector("#controls input");
// console.log(inputAmoutEl);

renderBtn.addEventListener("click", () => {
  createBoxes(inputAmoutEl.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
