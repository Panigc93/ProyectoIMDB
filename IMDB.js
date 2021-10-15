"use strict";
exports.__esModule = true;
exports.IMDB = void 0;
var fs = require("fs");
var IMDB = /** @class */ (function () {
    function IMDB(peliculas) {
        this.peliculas = peliculas;
    }
    //Metodos
    IMDB.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this));
    };
    IMDB.prototype.obtenerlnstancialMDB = function (nombreFichero) {
        var entrada = fs.readFileSync(nombreFichero, 'utf8');
        console.log(entrada);
        var carteleraVer = JSON.parse(entrada);
        console.log(carteleraVer);
        console.log(typeof (carteleraVer));
        return carteleraVer;
    };
    return IMDB;
}());
exports.IMDB = IMDB;
