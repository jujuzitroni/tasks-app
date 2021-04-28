const taskNameInput = document.querySelector(".text-input");
const formElement = document.querySelector(".form");

// formElement.onsubmit = function (event) {
//   event.preventDefault();
//   const checkedDateSelector = document.querySelector(
//     ".radio-group__input:checked"
//   );
//   console.log(taskNameInput.value, checkedDateSelector.value);
// };

formElement.onsubmit = function (event) {
  event.preventDefault();
  const checkedDateSelector = document.querySelector(
    ".radio-group__input:checked"
  );

  if (taskNameInput.value === "") {
    alert("Please enter a Task");
    return;
  }

  if (checkedDateSelector === null) {
    alert("Please select a Date");
    return;
  }

  const task = {
    name: taskNameInput.value,
    date: checkedDateSelector.value,
  };

  const taskJSON = JSON.stringify(task);
  localStorage.setItem("task", taskJSON);
};
