const inputSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = inputSizeEl.value + "px";

inputSizeEl.addEventListener("input", () => {
  textEl.style.fontSize = inputSizeEl.value + "px";
});
