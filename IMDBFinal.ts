import { Professional } from './Professional';
import { Movie } from "./Movies";
import { IMDB } from "./IMDB";
import * as fs from "fs";
let  readlineSync = require('readline-sync');


let titulo;
let anio = 0
let nacionalidad;
let genero;

let primeroAnio;

titulo = readlineSync.question('cual es el titulo? ')
primeroAnio = readlineSync.question('cual es el año? ')
nacionalidad = readlineSync.question('cual es la nacionalidad? ')
genero = readlineSync.question('cual es el genero?')

anio = parseFloat(primeroAnio)

let peliculon = new Movie (titulo,anio,nacionalidad,genero)

console.log(peliculon)

let cartelera = new IMDB ([peliculon])

let nuevaCartelera = cartelera.obtenerlnstancialMDB("imdbBBDD.json")

nuevaCartelera.peliculas.push(peliculon)
console.log(nuevaCartelera);





                