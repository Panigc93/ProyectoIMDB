"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }
    //Metodos
    Movie.prototype.printMovie = function () {
        var siMarvel = "No";
        if (this.isMCU == true) {
            siMarvel = "Si";
        }
        var pelicula = ("Los datos de la película son los siguientes:\n" +
            "\nTítulo: " + this.title + "\nAño de estreno: " + this.releaseYear +
            "\nActores: ");
        for (var i = 0; i < this.actors.length; i++) {
            pelicula += this.actors[i].name;
        }
        pelicula += ("\nNacionalidad: " + this.nacionality + "\nDirector: " + this.director.name
            + "\nGuionista: " + this.writer.name + "\nIdioma: " + this.language + "\nPlataforma: " +
            this.plataform + "\nEs de Marvel: " + siMarvel + "\nPersonaje principal: "
            + this.mainCharacterName + "\nProductora: " + this.producer + "\nDistribuidora: "
            + this.distributor + "\nGénero: " + this.genre);
        return pelicula;
    };
    return Movie;
}());
exports.Movie = Movie;
