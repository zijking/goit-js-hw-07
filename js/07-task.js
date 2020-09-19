const inputSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSizeEl.addEventListener("input", () => {
  // console.log(inputSizeEl.value);
  //   console.log(textEl.style.fontSize);
  //   console.dir(textEl);
  textEl.style.fontSize = inputSizeEl.value + "px";
});
