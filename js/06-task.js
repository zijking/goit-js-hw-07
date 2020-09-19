const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  //   console.log(inputEl.dataset.length);
  //   console.log(inputEl.value.length);
  if (inputEl.value.length <= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    console.log("менше 6");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
