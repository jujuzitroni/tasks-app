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

const brewTeaElement = createTaskElement("Tee kochen");
const drinkTeaElement = createTaskElement("Tee trinken");

const taskGroupElement = document.querySelector(".checkbox-group");

taskGroupElement.append(brewTeaElement, drinkTeaElement);
