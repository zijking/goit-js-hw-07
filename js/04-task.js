const counterValue = document.querySelector("#value");

function increment(event) {
  const temp = Number(counterValue.textContent);
  counterValue.textContent = temp + 1;
}

function decrement(event) {
  const temp = Number(counterValue.textContent);
  counterValue.textContent = temp - 1;
}

const btnIncEl = document.querySelector("[data-action='increment']");
const btnDecEl = document.querySelector("[data-action='decrement']");

// console.log(counterValue);

// console.log(btnIncEl, btnDecEl);

btnIncEl.addEventListener("click", increment);
btnDecEl.addEventListener("click", decrement);
