const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
};

function getData(e) {
  let username = nameInput.value.trim();
  if (username === "") {
    alert("Please insert a name.");
  } else {
    github.getGithubData(username)
    .then((response) => {
        if(response.user.message === "Not Found"){
            ui.showError("User Not Found.");
        }
        else{
            ui.addSearchedUserToUI(username);
            Storage.addSearchedUsersToStorage(username);
            ui.showUserInfo(response.user);
            ui.showRepoInfo(response.repo);
        }
    })
    .catch((err) => ui.showError(err));
  }
  ui.clearInput();
  e.preventDefault();
};

function clearAllSearched() {
  if(confirm("Emin misiniz?")){
    Storage.clearAllSearchedUsersFromStorage();
    ui.clearAllSearchedFromUI();
  }
};

function getAllSearched() {
  let users = Storage.getSearchedUsersFromStorage();
  let result = "";
  users.forEach(user =>{
    result += `<li class="list-group-item">${user}</li>` ;
  });
  lastUsers.innerHTML = result;
};

      /*const li = document.createElement("li");
      li.className = "list-grup-item";
      li.textContent = username;
      this.lastUsers.appendChild(li);*/

      //result += `<li class="list-group-item">${user}</li>`