const form = document.getElementById("film-form");
const titleValue = document.getElementById("title");
const directorValue = document.getElementById("director");
const bannerValue = document.getElementById("url");
const secondCardBody = document.querySelectorAll("card-body")[1];
const clearAll = document.getElementById("clear-films")


eventListeners();
function eventListeners() {
  form.addEventListener("submit", takeInformations);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  document.addEventListener("click", deleteFilmFromUI);
  clearAll.addEventListener("click", deleteAllFilms);
}

function deleteAllFilms(e){
    if(e.target.id === "clear-films"){
        UI.deleteAllFilmsFromUI();
        Storage.deleteAllFilmsFromStorage()
    }
    e.preventDefault();
}

function deleteFilmFromUI(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilm(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
  }
}

function loadAllFilms(e){
  let films = Storage.getFilmsFromStorage();
  UI.loadFilmsToStorage(films);

  e.preventDefault();
}

function takeInformations(e) {
  const title = titleValue.value;
  const director = directorValue.value;
  const banner = bannerValue.value;

  if (title == "" || director == "" || banner == "") {
    UI.alertMessage("danger", "You have to fill all the blanks!");
  } else {
    const newFilm = new Film(title, director, banner);
    UI.addToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.alertMessage("success", "You added a film!");
  }
  UI.deleteValues(titleValue, directorValue, bannerValue);

  e.preventDefault();
}
