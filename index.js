const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.validity.valid || !input.value) {
    input.classList.add("outline-[#FF5263]");
    input.nextElementSibling.classList.remove("hidden");
  }
});
input.addEventListener("input", function () {
  input.classList.remove("outline-[#FF5263]");
  input.nextElementSibling.classList.add("hidden");
});
