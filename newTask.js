const taskNameInput = document.querySelector(".text-input");
const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const checkedDateSelector = document.querySelector(
    ".radio-group__input:checked"
  );
  console.log(taskNameInput.value, checkedDateSelector.value);
};
