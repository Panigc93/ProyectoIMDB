import { Professional } from './Professional';
import { Movie } from "./Movies";
import { IMDB } from "./IMDB";
import * as fs from "fs";

let carteleraNueva= fs.readFileSync('imdbBBDD.json', 'utf8');

let carteleraVer = JSON.parse(carteleraNueva)

console.log(typeof(carteleraVer))