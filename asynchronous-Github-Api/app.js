const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI(),

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}
function getData(e) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Please provide a valid username.");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
            console.log("error...")
        } else {
          ui.showUserInfo(response.user);
        } 
      })
      .catch((err) =>console.log(err));
  }

  ui.clearInput();
  e.preventDefault();
}

function clearAllSearched() {

}
function getAllSearched() {
  
}
