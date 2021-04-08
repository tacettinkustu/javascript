const form = document.getElementById("film-form")
const titleValue = document.getElementById("title")
const directorValue = document.getElementById("director")
const bannerValue = document.getElementById("url")


const ui = new UI;
const storage = new Storage;


eventListeners();
function eventListeners(){
    form.addEventListener("submit",takeInformations);
    document.addEventListener("DOMContentLoaded",loadAllFilms)
}

function loadAllFilms(){
    let films = storage.getFilmsFromStorage();
    ui.loadFilmsToStorage(films);

    e.preventDefault();
}

function takeInformations(e){
    const title = titleValue.value;
    const director = directorValue.value;
    const banner = bannerValue.value;

    if(title == "" || director =="" || banner == ""){
        ui.alertMessage("danger","You have to fill all the blanks!")
    }else{
        const newFilm = new Film(title,director,banner);
        ui.addToUI(newFilm)
        storage.addFilmToStorage(newFilm);
        ui.alertMessage("success","You added a film!")
        
    };
    ui.deleteValues(titleValue,directorValue,bannerValue);

    e.preventDefault();
}
