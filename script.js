const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (newLetters, idx) =>
        `<span style="transition-delay:${idx * 50}ms  ">${newLetters}</span>`
    )
    .join("");
});

const inputBoxes = document.querySelectorAll(".box");

inputBoxes.forEach((input) => {
  input.addEventListener("click", function () {
    this.classList.add("hovered");
  });
});

document.addEventListener("click", function (event) {
  inputBoxes.forEach((input) => {
    if (!input.contains(event.target)) {
      if (input.classList.contains("hovered") && input.value === "") {
        input.classList.remove("hovered");
      }
    }
  });
});
