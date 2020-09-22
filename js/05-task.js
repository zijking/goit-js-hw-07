const inputEl = document.querySelector("#name-input");
const textLine = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  textLine.textContent = event.target.value;
  if (textLine.textContent.length === 0) {
    textLine.textContent = "незнайомець";
  }
});

// console.dir(inputEl);
