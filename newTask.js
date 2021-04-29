const taskNameInput = document.querySelector(".text-input");
const formElement = document.querySelector(".form");

// formElement.onsubmit = function (event) {
//   event.preventDefault();
//   const checkedDateSelector = document.querySelector(
//     ".radio-group__input:checked"
//   );
//   console.log(taskNameInput.value, checkedDateSelector.value);
// };
function goToPage(href) {
  location.href = href;
}

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

  // macht das gleiche wie zeile 44: (const taskList = JSON.parse(localStorage.getItem("taskList")) || [];)
  // const JSON = JSON.parse(localStorage.getItem("taskList"));
  // if (!JSON) {
  //   const taskList = [];
  // } else {
  //   const taskList = JSON;
  // }

  const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  console.log(taskList);
  taskList.push(task);
  localStorage.setItem("taskList", JSON.stringify(taskList));

  goToPage("/dashboard.html");

  // const taskJSON = JSON.stringify(task);
  // localStorage.setItem("task", taskJSON);
};
