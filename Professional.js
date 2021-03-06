"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }
    //Metodo
    Professional.prototype.print = function () {
        var retirado = "No";
        if (this.isRetired == true) {
            retirado = "Si";
        }
        console.log("Este profesional tiene las siguientes características:\n" + "\nNombre: " + this.name + "\nEdad: "
            + this.age + "\nGénero: " + this.genre + "\nPeso: " + this.weight + "\nAltura: "
            + this.height + "\nColor de pelo: " + this.hairColor + "\nColor de ojos: "
            + this.eyeColor + "\nRaza: " + this.race + "\nRetirado: " + retirado +
            "\nNacionalidad: " + this.nationality + "\nCuantos Oscars tiene: " + this.oscarsNumber
            + "\nProfesión: " + this.profession + "\n");
    };
    return Professional;
}());
exports.Professional = Professional;
