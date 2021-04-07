const form1 = document.querySelector("#first-input");
const input1 = document.querySelector("#first-todo");
const todoList = document.querySelector("#todo_list");
const todoUl = document.querySelector("#todo-ul");
const alert1 = document.getElementById("abc");
const search = document.getElementById("search");
const clear = document.getElementById("clear");

eventListeners();

function eventListeners() {
  form1.addEventListener("submit", getvalue);
  document.addEventListener("DOMContentLoaded", loadAllTodos);
  todoList.addEventListener("click", deleteTodo);
  search.addEventListener("keyup", filterTodos);
  clear.addEventListener("click", clearAllItems);
}

function clearAllItems(e) {
  while (todoUl.firstElementChild != null) {
    todoUl.removeChild(todoUl.firstElementChild);
    localStorage.removeItem("todos");
  }

  e.preventDefault();
}

function filterTodos(e) {
  let listItems = document.querySelectorAll(".list-group-item");
  let value = e.target.value.toLowerCase();
  listItems.forEach(function (listItem) {
    let text = listItem.textContent.toLowerCase();

    if (text.indexOf(value) === -1) {
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });

  e.preventDefault();
}

function deleteTodo(e) {
  if (e.target.className == "far fa-trash-alt") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "Todo is deleted");
  }
  e.preventDefault();
}

function deleteTodoFromStorage(deletedTodo) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo == deletedTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodos() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addToList(todo);
  });
}

function getvalue(e) {
  const output = input1.value.trim();

  if (output == "") {
    showAlert("danger", "Please insert a todo!");
  } else {
    showAlert("success", "You add a todo");
    addToList(output);
    addToStorage(output);
  }
  e.preventDefault();
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function addToStorage(output) {
  let todos = getTodosFromStorage();
  todos.push(output);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} mt-3 col-6`;
  alert.textContent = message;
  alert1.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 5000);
}

function addToList(output) {
  let listItem = document.createElement("li");
  let link1 = document.createElement("a");

  link1.href = "#";
  link1.className = "delete-item";
  link1.innerHTML = "<i class='far fa-trash-alt'></i>";

  let textnode = document.createTextNode(output);
  listItem.className =
    "m-1 list-group-item d-flex justify-content-between border-top";
  listItem.appendChild(textnode);

  console.log(link1);
  listItem.appendChild(link1);
  console.log(listItem);

  todoUl.appendChild(listItem);
}
