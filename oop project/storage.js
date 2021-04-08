function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films))


}

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if (localStorage.getItem("films")===null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem("films"))
    }
    return films
}

Storage.prototype.deleteFilmFromStorage = function(filmName){
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title === filmName){
            films.splice(index,1)
        }
        
    })
    localStorage.setItem("films",JSON.stringify(films))
}

Storage.prototype.deleteAllFilmsFromStorage = function(){
    let films = [];
    localStorage.setItem("films",JSON.stringify(films))
}