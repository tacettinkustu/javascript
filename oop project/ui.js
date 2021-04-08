function UI() {

}

UI.prototype.addToUI = function (newFilm) {
  const tbody = document.getElementById("films");
  tbody.innerHTML += `
    <tr>
        <td><img src="${newFilm.banner}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;
};

UI.prototype.deleteValues = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
UI.prototype.alertMessage = function(type,message){
    const cardBody = document.querySelector(".card-body")

    const div = document.createElement("div")
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div)

    setTimeout(function(){
        div.remove()
    },2000)
}

UI.prototype.loadFilmsToStorage = function(films){
    films.forEach(function(film){
        const tbody = document.getElementById("films");
        tbody.innerHTML += `
        <tr>
        <td><img src="${film.banner}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr

        `
    })
}

UI.prototype.deleteFilm = function(element){
    element.parentElement.parentElement.remove()
}

UI.prototype.deleteAllFilmsFromUI = function(){
    const tbody = document.getElementById("films");
    tbody.innerHTML = ""
}