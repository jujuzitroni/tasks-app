//

function createTaskElement(taskName, taskCompleted) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";
  input.checked = taskCompleted;
  span.innerText = taskName;
  input.onchange = function () {
    changeCompleteState(taskName);
  };

  label.append(input, span);
  return label;
}

//   1. get task via task.name from localStorage 2. access task.completed 3. change task.completed value to true 4. put changed object back in localStorage
function changeCompleteState(taskName) {
  const taskList = parseJSONFromLocalStorage("taskList", []);
  const changedTaskObject = taskList.find((task) => task.name === taskName);
  changedTaskObject.completed = !changedTaskObject.completed;

  console.log(changedTaskObject);

  localStorage.setItem("taskList", JSON.stringify(taskList));
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

// call for function to create ALL tasks.
createTaskList();

// ////FILTER LIST VIA RADIO BUTTONS/////////
function createTaskList(date) {
  const filteredTaskList = taskList.filter(
    (task) => task.date === date || date === undefined
  );

  // Create task elements array consisting of HTML elements based on the amount of objects
  const taskElements = filteredTaskList.map(function (task) {
    return createTaskElement(task.name, task.completed);
  });

  // Get parent element of tasks
  const taskListElement = document.querySelector(".checkbox-group");

  // Append all elements in task element to task list
  //   taskListElement.append(...taskElements);

  //   replace all labels with empty string so only the selected task.names(aka taskElements) are shown.
  taskListElement.innerHTML = "";
  taskListElement.append(...taskElements);
}

// select all date radio buttons
const radioButtons = document.querySelectorAll(".radio-group__input");

// add what should change onchance to these radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.onchange = () => createTaskList(radioButton.value);
});

// fragen: um bei date filter nur die entsprechenden einträge zu zeigen habe ich das innerHTMl auf "" gesetzt und die gefilteten einträge daran appended. kam mir hacky vor, bessere lösung?
// bei function call für .onclick on label darf ich keine arguments mitgeben. wieso?
// wird alles ein bisschen abgefuckt bei completed tasks wenn es zwei tasks mit dem selben namen gibt.
