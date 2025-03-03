const lg = console.log;

const inputUser = document.querySelector("#user-input");
const addNowBtn = document.querySelector("#add-now");
const listContainer = document.querySelector("#todo-list-container");

function addTask() {
  if (inputUser.value === "") return;

  const li = document.createElement("LI");
  li.classList.add("todo-list");
  const userTodo = document.createElement("SPAN");

  userTodo.textContent = inputUser.value;
  li.appendChild(userTodo);
  const deletBtn = document.createElement("SPAN");
  deletBtn.classList.add("delete");
  deletBtn.innerHTML = "&#10060";
  li.appendChild(deletBtn);

  listContainer.appendChild(li);
}

// todo list  adding event listiner 
addNowBtn.addEventListener("click", function () {
  addTask();
  saveData();
});

// todo list checked and remove  function 
function listDeleteAndChecked(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  }

// todo list eventlistiner 

listContainer.addEventListener("click", (e)=>listDeleteAndChecked(e) );

// save Data to local storage

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// loading local storage data

function getData() {
  const data = localStorage.getItem("data");
if(data){
    listContainer.innerHTML = data;
}
}

getData();
