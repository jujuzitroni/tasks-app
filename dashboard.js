//

function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

// Get array with task objects from local storage
const taskList = parseJSONFromLocalStorage("taskList", []);

// ////FILTER LIST VIA RADIO BUTTONS/////////
function createTaskList(date) {
  const filteredTaskList = taskList.filter((task) => task.date === date);

  // Create task elements array consisting of HTML elements based on the amount of objects
  const taskElements = filteredTaskList.map(function (task) {
    return createTaskElement(task.name);
  });

  // Get parent element of tasks
  const taskListElement = document.querySelector(".checkbox-group");

  // Append all elements in task element to task list
  taskListElement.append(...taskElements);
}

// select all date radio buttons
const radioButtons = document.querySelectorAll(".radio-group__input");
console.log(radioButtons);

// add what should change onchance to these radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.onchange = () => createTaskList(radioButton.value);
});
